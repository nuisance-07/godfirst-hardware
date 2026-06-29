const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const MONGODB_URI = "mongodb+srv://ColloMuash:45127Rex$@cluster0.ukapq8j.mongodb.net/godfirst_hardware?appName=Cluster0";

// Read products from route.ts
const filePath = path.join(__dirname, 'src/app/api/seed/route.ts');
const content = fs.readFileSync(filePath, 'utf8');

const productsMatch = content.match(/const products = (\[[\s\S]*?\]);\n\nexport async function GET/);
if (!productsMatch) {
  console.error("Could not find products array.");
  process.exit(1);
}

let productsData = eval(productsMatch[1]);

mongoose.connect(MONGODB_URI)
  .then(async () => {
    console.log("Connected to MongoDB.");
    
    // Use the mongoose connection to drop and re-insert the collection
    const db = mongoose.connection.db;
    const collection = db.collection('godfirst_products');
    
    await collection.deleteMany({});
    console.log("Cleared existing products.");
    
    // add timestamps
    const now = new Date();
    const toInsert = productsData.map(p => ({
      ...p,
      createdAt: now,
      updatedAt: now
    }));
    
    await collection.insertMany(toInsert);
    console.log(`Successfully seeded ${toInsert.length} products to database.`);
    
    mongoose.disconnect();
    process.exit(0);
  })
  .catch(err => {
    console.error("MongoDB Error:", err);
    process.exit(1);
  });
