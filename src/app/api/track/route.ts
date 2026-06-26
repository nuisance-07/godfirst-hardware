import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import { PageView } from "@/models/PageView";

export async function POST(req: Request) {
  try {
    const { path } = await req.json();
    
    await dbConnect();
    
    // Very basic tracking
    await PageView.create({
      path,
      timestamp: new Date(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Tracking error:", error);
    return NextResponse.json({ error: "Failed to track" }, { status: 500 });
  }
}
