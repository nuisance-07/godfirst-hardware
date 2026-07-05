
import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import { Product } from "@/models/Product";

const products = [
  {
    "name": "Gyproc Filler",
    "slug": "sina-gips-gypsum-plaster-bags-loading-0",
    "category": "Cement & Binding",
    "price": 2800,
    "description": "Premium Sina Gips Gypsum Plaster Bags Loading for your construction and hardware needs. Quality guaranteed by Dhawakah Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Sina",
      "Category": "Cement & Binding"
    },
    "images": [
      "/images/products/cement---binding/sina-gips-gypsum-plaster-bags-loading-0.jpeg"
    ],
    "inStock": true,
    "featured": true
  },
  {
    "name": "White Cement 40kg",
    "slug": "aalborg-portland-white-cement-bags-2",
    "category": "Cement & Binding",
    "price": 3400,
    "description": "Premium Aalborg Portland White Cement Bags for your construction and hardware needs. Quality guaranteed by Dhawakah Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Aalborg",
      "Category": "Cement & Binding"
    },
    "images": [
      "/images/products/cement---binding/aalborg-portland-white-cement-bags-2.jpeg"
    ],
    "inStock": true,
    "featured": true
  },
  {
    "name": "PPR Sockets",
    "slug": "ppr-pipe-fittings-green-3",
    "category": "Plumbing",
    "price": 30,
    "description": "Premium PPR Pipe Fittings Green for your construction and hardware needs. Quality guaranteed by Dhawakah Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "PPR",
      "Category": "Plumbing"
    },
    "images": [
      "/images/products/plumbing/ppr-pipe-fittings-green-3.jpeg"
    ],
    "inStock": true,
    "unit": "per pc"
  },
  {
    "name": "Mombasa Cement 50kg",
    "slug": "mombasa-cement-nyumba-50kg-5",
    "category": "Cement & Binding",
    "price": 820,
    "description": "Premium Mombasa Cement Nyumba 50kg for your construction and hardware needs. Quality guaranteed by Dhawakah Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Mombasa",
      "Category": "Cement & Binding"
    },
    "images": [
      "/images/products/cement---binding/mombasa-cement-nyumba-50kg-5.jpeg"
    ],
    "inStock": true,
    "featured": true
  },
  {
    "name": "Mombasa Cement Nyumba Pozzolanic 50kg",
    "slug": "mombasa-cement-nyumba-pozzolanic-50kg-6",
    "category": "Cement & Binding",
    "price": 820,
    "description": "Premium Mombasa Cement Nyumba Pozzolanic 50kg for your construction and hardware needs. Quality guaranteed by Dhawakah Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Mombasa",
      "Category": "Cement & Binding"
    },
    "images": [
      "/images/products/cement---binding/mombasa-cement-nyumba-pozzolanic-50kg-6.jpeg"
    ],
    "inStock": true
  },
  {
    "name": "Gypsum Powder POP",
    "slug": "gypsum-plaster-bags-stacked-9",
    "category": "Cement & Binding",
    "price": 2800,
    "description": "Premium Gypsum Plaster Bags Stacked for your construction and hardware needs. Quality guaranteed by Dhawakah Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Gypsum",
      "Category": "Cement & Binding"
    },
    "images": [
      "/images/products/cement---binding/gypsum-plaster-bags-stacked-9.jpeg"
    ],
    "inStock": true,
    "featured": true
  },
  {
    "name": "Nails 1\"",
    "slug": "nails-1-0",
    "category": "Tools & Hardware",
    "price": 350,
    "description": "Premium Black Concrete Nails for your construction and hardware needs. Quality guaranteed by Dhawakah Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Black",
      "Category": "Tools & Hardware"
    },
    "images": [
      "/images/products/tools---hardware/black-concrete-nails-11.jpeg"
    ],
    "inStock": true,
    "unit": "per kg"
  },
  {
    "name": "Nails 1 1/2\"",
    "slug": "nails-1-1-2-1",
    "category": "Tools & Hardware",
    "price": 350,
    "description": "Premium Black Concrete Nails for your construction and hardware needs. Quality guaranteed by Dhawakah Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Black",
      "Category": "Tools & Hardware"
    },
    "images": [
      "/images/products/tools---hardware/black-concrete-nails-11.jpeg"
    ],
    "inStock": true,
    "unit": "per kg"
  },
  {
    "name": "Nails 2\"",
    "slug": "nails-2-2",
    "category": "Tools & Hardware",
    "price": 200,
    "description": "Premium Black Concrete Nails for your construction and hardware needs. Quality guaranteed by Dhawakah Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Black",
      "Category": "Tools & Hardware"
    },
    "images": [
      "/images/products/tools---hardware/black-concrete-nails-11.jpeg"
    ],
    "inStock": true,
    "unit": "per kg"
  },
  {
    "name": "Nails 3\"",
    "slug": "nails-3-3",
    "category": "Tools & Hardware",
    "price": 200,
    "description": "Premium Black Concrete Nails for your construction and hardware needs. Quality guaranteed by Dhawakah Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Black",
      "Category": "Tools & Hardware"
    },
    "images": [
      "/images/products/tools---hardware/black-concrete-nails-11.jpeg"
    ],
    "inStock": true,
    "unit": "per kg"
  },
  {
    "name": "Nails 4\"",
    "slug": "nails-4-4",
    "category": "Tools & Hardware",
    "price": 200,
    "description": "Premium Black Concrete Nails for your construction and hardware needs. Quality guaranteed by Dhawakah Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Black",
      "Category": "Tools & Hardware"
    },
    "images": [
      "/images/products/tools---hardware/black-concrete-nails-11.jpeg"
    ],
    "inStock": true,
    "unit": "per kg"
  },
  {
    "name": "Nails 5\"",
    "slug": "nails-5-5",
    "category": "Tools & Hardware",
    "price": 200,
    "description": "Premium Black Concrete Nails for your construction and hardware needs. Quality guaranteed by Dhawakah Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Black",
      "Category": "Tools & Hardware"
    },
    "images": [
      "/images/products/tools---hardware/black-concrete-nails-11.jpeg"
    ],
    "inStock": true,
    "unit": "per kg"
  },
  {
    "name": "Ceiling Nails 1\"",
    "slug": "ceiling-nails-1-6",
    "category": "Tools & Hardware",
    "price": 350,
    "description": "Premium Black Concrete Nails for your construction and hardware needs. Quality guaranteed by Dhawakah Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Black",
      "Category": "Tools & Hardware"
    },
    "images": [
      "/images/products/tools---hardware/black-concrete-nails-11.jpeg"
    ],
    "inStock": true,
    "unit": "per kg"
  },
  {
    "name": "Ceiling Nails 1 1/2\"",
    "slug": "ceiling-nails-1-1-2-7",
    "category": "Tools & Hardware",
    "price": 350,
    "description": "Premium Black Concrete Nails for your construction and hardware needs. Quality guaranteed by Dhawakah Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Black",
      "Category": "Tools & Hardware"
    },
    "images": [
      "/images/products/tools---hardware/black-concrete-nails-11.jpeg"
    ],
    "inStock": true,
    "unit": "per kg"
  },
  {
    "name": "Undertaker 480 EC Insecticide 1L",
    "slug": "undertaker-480-ec-insecticide-1l-16",
    "category": "Tools & Hardware",
    "price": 3500,
    "description": "Premium Undertaker 480 EC Insecticide 1L for your construction and hardware needs. Quality guaranteed by Dhawakah Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Undertaker",
      "Category": "Tools & Hardware"
    },
    "images": [
      "/images/products/tools---hardware/undertaker-480-ec-insecticide-1l-16.jpeg"
    ],
    "inStock": true
  },
  {
    "name": "Hose pipe 3/4\" roll",
    "slug": "hose-pipe-3-4-roll-0",
    "category": "Plumbing",
    "price": 6500,
    "description": "Premium Tan-Ur PVC Water Hose Green for your construction and hardware needs. Quality guaranteed by Dhawakah Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Tan-Ur",
      "Category": "Plumbing"
    },
    "images": [
      "/images/products/plumbing/tan-ur-pvc-water-hose-green-18.jpeg"
    ],
    "inStock": true,
    "unit": "per roll"
  },
  {
    "name": "Hose pipe 1/2\" roll",
    "slug": "hose-pipe-1-2-roll-1",
    "category": "Plumbing",
    "price": 6000,
    "description": "Premium Tan-Ur PVC Water Hose Green for your construction and hardware needs. Quality guaranteed by Dhawakah Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Tan-Ur",
      "Category": "Plumbing"
    },
    "images": [
      "/images/products/plumbing/tan-ur-pvc-water-hose-green-18.jpeg"
    ],
    "inStock": true,
    "unit": "per roll"
  },
  {
    "name": "Hose pipe 1\" roll",
    "slug": "hose-pipe-1-roll-2",
    "category": "Plumbing",
    "price": 7500,
    "description": "Premium Tan-Ur PVC Water Hose Green for your construction and hardware needs. Quality guaranteed by Dhawakah Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Tan-Ur",
      "Category": "Plumbing"
    },
    "images": [
      "/images/products/plumbing/tan-ur-pvc-water-hose-green-18.jpeg"
    ],
    "inStock": true,
    "unit": "per roll"
  },
  {
    "name": "Hose pipe 1 metre",
    "slug": "hose-pipe-1-metre-3",
    "category": "Plumbing",
    "price": 200,
    "description": "Premium Tan-Ur PVC Water Hose Green for your construction and hardware needs. Quality guaranteed by Dhawakah Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Tan-Ur",
      "Category": "Plumbing"
    },
    "images": [
      "/images/products/plumbing/tan-ur-pvc-water-hose-green-18.jpeg"
    ],
    "inStock": true,
    "unit": "per metre"
  },
  {
    "name": "Undertaker 480 EC Insecticide 1L",
    "slug": "undertaker-480-ec-insecticide-1l-19",
    "category": "Tools & Hardware",
    "price": 3500,
    "description": "Premium Undertaker 480 EC Insecticide 1L for your construction and hardware needs. Quality guaranteed by Dhawakah Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Undertaker",
      "Category": "Tools & Hardware"
    },
    "images": [
      "/images/products/tools---hardware/undertaker-480-ec-insecticide-1l-19.jpeg"
    ],
    "inStock": true
  },
  {
    "name": "Cable wire 1.5 roll",
    "slug": "cable-wire-1-5-roll-0",
    "category": "Electrical & Fixtures",
    "price": 5500,
    "description": "Premium Electrical Wire Rolls Stacked for your construction and hardware needs. Quality guaranteed by Dhawakah Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Electrical",
      "Category": "Electrical & Fixtures"
    },
    "images": [
      "/images/products/plumbing/coiled-water-pipes-58.jpeg"
    ],
    "inStock": true,
    "unit": "per roll"
  },
  {
    "name": "Cable wire 2.5 roll",
    "slug": "cable-wire-2-5-roll-1",
    "category": "Electrical & Fixtures",
    "price": 6500,
    "description": "Premium Electrical Wire Rolls Stacked for your construction and hardware needs. Quality guaranteed by Dhawakah Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Electrical",
      "Category": "Electrical & Fixtures"
    },
    "images": [
      "/images/products/plumbing/coiled-water-pipes-58.jpeg"
    ],
    "inStock": true,
    "unit": "per roll"
  },
  {
    "name": "Welding Rods 1 pkt",
    "slug": "welding-rods-1-pkt",
    "category": "Steel & Welding",
    "price": 650,
    "description": "Premium Welding Rods (1 packet) for your construction and hardware needs. Quality guaranteed by Dhawakah Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Welding",
      "Category": "Steel & Welding"
    },
    "images": [
      "/images/products/steel---welding/welding-electrodes-rods-27.jpeg"
    ],
    "inStock": true,
    "featured": true,
    "unit": "per pkt"
  },
  {
    "name": "Welding Rods 1kg",
    "slug": "welding-rods-1kg",
    "category": "Steel & Welding",
    "price": 300,
    "description": "Premium Welding Rods (1kg) for your construction and hardware needs. Quality guaranteed by Dhawakah Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Welding",
      "Category": "Steel & Welding"
    },
    "images": [
      "/images/products/steel---welding/welding-electrodes-rods-27.jpeg"
    ],
    "inStock": true,
    "featured": true,
    "unit": "per kg"
  },
  {
    "name": "DuraCoat Skimcoat Filler",
    "slug": "duracoat-skim-coat-25kg-28",
    "category": "Cement & Binding",
    "price": 1800,
    "description": "Premium DuraCoat Skim Coat 25kg for your construction and hardware needs. Quality guaranteed by Dhawakah Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "DuraCoat",
      "Category": "Cement & Binding"
    },
    "images": [
      "/images/products/cement---binding/duracoat-skim-coat-25kg-28.jpeg"
    ],
    "inStock": true,
    "featured": true
  },
  {
    "name": "Binding Wire 1 roll",
    "slug": "binding-wire-1-roll-0",
    "category": "Steel & Welding",
    "price": 4000,
    "description": "Premium Black Binding Wire Roll for your construction and hardware needs. Quality guaranteed by Dhawakah Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Black",
      "Category": "Steel & Welding"
    },
    "images": [
      "/images/products/steel---welding/black-binding-wire-roll-29.jpeg"
    ],
    "inStock": true,
    "unit": "per roll"
  },
  {
    "name": "Binding Wire 1kg",
    "slug": "binding-wire-1kg-1",
    "category": "Steel & Welding",
    "price": 350,
    "description": "Premium Black Binding Wire Roll for your construction and hardware needs. Quality guaranteed by Dhawakah Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Black",
      "Category": "Steel & Welding"
    },
    "images": [
      "/images/products/steel---welding/black-binding-wire-roll-29.jpeg"
    ],
    "inStock": true,
    "unit": "per kg"
  },
  {
    "name": "DuraCoat Skimcoat Filler",
    "slug": "duracoat-skim-coat-25kg-30",
    "category": "Cement & Binding",
    "price": 1800,
    "description": "Premium DuraCoat Skim Coat 25kg for your construction and hardware needs. Quality guaranteed by Dhawakah Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "DuraCoat",
      "Category": "Cement & Binding"
    },
    "images": [
      "/images/products/cement---binding/duracoat-skim-coat-25kg-30.jpeg"
    ],
    "inStock": true,
    "featured": true
  },
  {
    "name": "Orient Fan",
    "slug": "orient-ceiling-fan-31",
    "category": "Electrical & Fixtures",
    "price": 3800,
    "description": "Premium Orient Ceiling Fan for your construction and hardware needs. Quality guaranteed by Dhawakah Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Orient",
      "Category": "Electrical & Fixtures"
    },
    "images": [
      "/images/products/electrical---fixtures/orient-ceiling-fan-31.jpeg"
    ],
    "inStock": true,
    "featured": true
  },
  {
    "name": "P.V.C Tangit Glue",
    "slug": "tangit-pvc-u-glue-adhesive-32",
    "category": "Plumbing",
    "price": 850,
    "description": "Premium Tangit PVC-U Glue Adhesive for your construction and hardware needs. Quality guaranteed by Dhawakah Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Tangit",
      "Category": "Plumbing"
    },
    "images": [
      "/images/products/plumbing/tangit-pvc-u-glue-adhesive-32.jpeg"
    ],
    "inStock": true,
    "unit": "per pc"
  },
  {
    "name": "Orient Fan",
    "slug": "orient-ceiling-fan-33",
    "category": "Electrical & Fixtures",
    "price": 3800,
    "description": "Premium Orient Ceiling Fan for your construction and hardware needs. Quality guaranteed by Dhawakah Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Orient",
      "Category": "Electrical & Fixtures"
    },
    "images": [
      "/images/products/electrical---fixtures/orient-ceiling-fan-33.jpeg"
    ],
    "inStock": true,
    "featured": true
  },
  {
    "name": "Orient Fan",
    "slug": "orient-ceiling-fan-box-34",
    "category": "Electrical & Fixtures",
    "price": 3800,
    "description": "Premium Orient Ceiling Fan Box for your construction and hardware needs. Quality guaranteed by Dhawakah Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Orient",
      "Category": "Electrical & Fixtures"
    },
    "images": [
      "/images/products/electrical---fixtures/orient-ceiling-fan-box-34.jpeg"
    ],
    "inStock": true,
    "featured": true
  },
  {
    "name": "Orient Fan",
    "slug": "orient-ceiling-fan-box-close-up-35",
    "category": "Electrical & Fixtures",
    "price": 3800,
    "description": "Premium Orient Ceiling Fan Box Close Up for your construction and hardware needs. Quality guaranteed by Dhawakah Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Orient",
      "Category": "Electrical & Fixtures"
    },
    "images": [
      "/images/products/electrical---fixtures/orient-ceiling-fan-box-close-up-35.jpeg"
    ],
    "inStock": true,
    "featured": true
  },
  {
    "name": "Orient Fan",
    "slug": "orient-ceiling-fan-36",
    "category": "Electrical & Fixtures",
    "price": 3800,
    "description": "Premium Orient Ceiling Fan for your construction and hardware needs. Quality guaranteed by Dhawakah Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Orient",
      "Category": "Electrical & Fixtures"
    },
    "images": [
      "/images/products/electrical---fixtures/orient-ceiling-fan-36.jpeg"
    ],
    "inStock": true,
    "featured": true
  },
  {
    "name": "Orient Fan",
    "slug": "orient-ceiling-fan-box-38",
    "category": "Electrical & Fixtures",
    "price": 3800,
    "description": "Premium Orient Ceiling Fan Box for your construction and hardware needs. Quality guaranteed by Dhawakah Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Orient",
      "Category": "Electrical & Fixtures"
    },
    "images": [
      "/images/products/electrical---fixtures/orient-ceiling-fan-box-38.jpeg"
    ],
    "inStock": true,
    "featured": true
  },
  {
    "name": "Bamburi Nguvu Cement 50kg",
    "slug": "bamburi-cement-50kg-42",
    "category": "Cement & Binding",
    "price": 950,
    "description": "Premium Bamburi Cement 50kg for your construction and hardware needs. Quality guaranteed by Dhawakah Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Bamburi",
      "Category": "Cement & Binding"
    },
    "images": [
      "/images/products/cement---binding/bamburi-cement-50kg-42.jpeg"
    ],
    "inStock": true,
    "featured": true
  },
  {
    "name": "Bamburi Fundi Cement 50kg",
    "slug": "bamburi-cement-bag-back-43",
    "category": "Cement & Binding",
    "price": 720,
    "description": "Premium Bamburi Cement Bag Back for your construction and hardware needs. Quality guaranteed by Dhawakah Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Bamburi",
      "Category": "Cement & Binding"
    },
    "images": [
      "/images/products/cement---binding/bamburi-cement-bag-back-43.jpeg"
    ],
    "inStock": true,
    "featured": true
  },
  {
    "name": "Mombasa Cement Pozzolanic 50kg",
    "slug": "mombasa-cement-pozzolanic-50kg-44",
    "category": "Cement & Binding",
    "price": 820,
    "description": "Premium Mombasa Cement Pozzolanic 50kg for your construction and hardware needs. Quality guaranteed by Dhawakah Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Mombasa",
      "Category": "Cement & Binding"
    },
    "images": [
      "/images/products/cement---binding/mombasa-cement-pozzolanic-50kg-44.jpeg"
    ],
    "inStock": true
  },
  {
    "name": "D8 Steel Rebar",
    "slug": "d8-steel-rebar-0",
    "category": "Steel & Welding",
    "price": 680,
    "description": "Premium Steel Reinforcement Bars Rebar for your construction and hardware needs. Quality guaranteed by Dhawakah Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Steel",
      "Category": "Steel & Welding"
    },
    "images": [
      "/images/products/steel---welding/steel-reinforcement-bars-rebar-48.jpeg"
    ],
    "inStock": true,
    "unit": "per piece"
  },
  {
    "name": "D10 Steel Rebar",
    "slug": "d10-steel-rebar-1",
    "category": "Steel & Welding",
    "price": 980,
    "description": "Premium Steel Reinforcement Bars Rebar for your construction and hardware needs. Quality guaranteed by Dhawakah Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Steel",
      "Category": "Steel & Welding"
    },
    "images": [
      "/images/products/steel---welding/steel-reinforcement-bars-rebar-48.jpeg"
    ],
    "inStock": true,
    "unit": "per piece"
  },
  {
    "name": "D12 Steel Rebar",
    "slug": "d12-steel-rebar-2",
    "category": "Steel & Welding",
    "price": 1370,
    "description": "Premium Steel Reinforcement Bars Rebar for your construction and hardware needs. Quality guaranteed by Dhawakah Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Steel",
      "Category": "Steel & Welding"
    },
    "images": [
      "/images/products/steel---welding/steel-reinforcement-bars-rebar-48.jpeg"
    ],
    "inStock": true,
    "unit": "per piece"
  },
  {
    "name": "D16 Steel Rebar",
    "slug": "d16-steel-rebar-3",
    "category": "Steel & Welding",
    "price": 2370,
    "description": "Premium Steel Reinforcement Bars Rebar for your construction and hardware needs. Quality guaranteed by Dhawakah Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Steel",
      "Category": "Steel & Welding"
    },
    "images": [
      "/images/products/steel---welding/steel-reinforcement-bars-rebar-48.jpeg"
    ],
    "inStock": true,
    "unit": "per piece"
  },
  {
    "name": "D20 Steel Rebar",
    "slug": "d20-steel-rebar-4",
    "category": "Steel & Welding",
    "price": 3900,
    "description": "Premium Steel Reinforcement Bars Rebar for your construction and hardware needs. Quality guaranteed by Dhawakah Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Steel",
      "Category": "Steel & Welding"
    },
    "images": [
      "/images/products/steel---welding/steel-reinforcement-bars-rebar-48.jpeg"
    ],
    "inStock": true,
    "unit": "per piece"
  },
  {
    "name": "D25 Steel Rebar",
    "slug": "d25-steel-rebar-5",
    "category": "Steel & Welding",
    "price": 6700,
    "description": "Premium Steel Reinforcement Bars Rebar for your construction and hardware needs. Quality guaranteed by Dhawakah Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Steel",
      "Category": "Steel & Welding"
    },
    "images": [
      "/images/products/steel---welding/steel-reinforcement-bars-rebar-48.jpeg"
    ],
    "inStock": true,
    "unit": "per piece"
  },
  {
    "name": "Cutting Disk 9\"",
    "slug": "cutting-disk-9-inch",
    "category": "Steel & Welding",
    "price": 300,
    "description": "Premium 9 inch Cutting Disk for angle grinders. Quality guaranteed by Dhawakah Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Welding",
      "Category": "Steel & Welding"
    },
    "images": [
      "/images/products/steel---welding/cutting-disk.jpeg"
    ],
    "inStock": true,
    "unit": "per pc"
  },
  {
    "name": "Cutting Disk 7\"",
    "slug": "cutting-disk-7-inch",
    "category": "Steel & Welding",
    "price": 200,
    "description": "Premium 7 inch Cutting Disk for angle grinders. Quality guaranteed by Dhawakah Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Welding",
      "Category": "Steel & Welding"
    },
    "images": [
      "/images/products/steel---welding/cutting-disk.jpeg"
    ],
    "inStock": true,
    "unit": "per pc"
  },
  {
    "name": "Stainless Steel Kitchen Sink",
    "slug": "stainless-steel-kitchen-sink-56",
    "category": "Plumbing",
    "price": 2500,
    "description": "Premium Stainless Steel Kitchen Sink for your construction and hardware needs. Quality guaranteed by Dhawakah Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Stainless",
      "Category": "Plumbing"
    },
    "images": [
      "/images/products/plumbing/stainless-steel-kitchen-sink-56.jpeg"
    ],
    "inStock": true
  },
  {
    "category": "Plumbing",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "PVC",
      "Category": "Plumbing"
    },
    "images": [
      "/images/products/plumbing/waste-pipes.jpeg"
    ],
    "inStock": true,
    "name": "Waste Pipe 4\"",
    "slug": "waste-pipe-4-inch",
    "price": 2000,
    "unit": "per pc",
    "description": "Premium 4 inch PVC Waste Pipe for plumbing. Quality guaranteed by Dhawakah Hardware."
  },
  {
    "category": "Plumbing",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "PVC",
      "Category": "Plumbing"
    },
    "images": [
      "/images/products/plumbing/waste-pipes.jpeg"
    ],
    "inStock": true,
    "name": "Waste Pipe 3\"",
    "slug": "waste-pipe-3-inch",
    "price": 650,
    "unit": "per pc",
    "description": "Premium 3 inch PVC Waste Pipe for plumbing. Quality guaranteed by Dhawakah Hardware."
  },
  {
    "category": "Plumbing",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "PVC",
      "Category": "Plumbing"
    },
    "images": [
      "/images/products/plumbing/waste-pipes.jpeg"
    ],
    "inStock": true,
    "name": "Waste Pipe 2\"",
    "slug": "waste-pipe-2-inch",
    "price": 680,
    "unit": "per pc",
    "description": "Premium 2 inch PVC Waste Pipe for plumbing. Quality guaranteed by Dhawakah Hardware."
  }
];

export async function GET() {
  try {
    await dbConnect();
    await Product.deleteMany({}); // Wipe existing
    await Product.insertMany(products);
    return NextResponse.json({ success: true, message: `Successfully seeded ${products.length} products.` });
  } catch (error: any) {
    console.error("Seeding error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
