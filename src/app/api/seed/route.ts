
import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import { Product } from "@/models/Product";

const products = [
  {
    "name": "Gyproc Filler",
    "slug": "sina-gips-gypsum-plaster-bags-loading-0",
    "category": "Cement & Binding",
    "price": 2800,
    "description": "Premium Sina Gips Gypsum Plaster Bags Loading for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
    "name": "Sina Gips Gypsum Plaster of Paris 25kg",
    "slug": "sina-gips-gypsum-plaster-of-paris-25kg-1",
    "category": "Cement & Binding",
    "price": 0,
    "description": "Premium Sina Gips Gypsum Plaster of Paris 25kg for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
      "/images/products/cement---binding/sina-gips-gypsum-plaster-of-paris-25kg-1.jpeg"
    ],
    "inStock": true
  },
  {
    "name": "White Cement 40kg",
    "slug": "aalborg-portland-white-cement-bags-2",
    "category": "Cement & Binding",
    "price": 3400,
    "description": "Premium Aalborg Portland White Cement Bags for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
    "description": "Premium PPR Pipe Fittings Green for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
    "name": "Alortra White Cement 40kg",
    "slug": "alortra-white-cement-40kg-4",
    "category": "Cement & Binding",
    "price": 0,
    "description": "Premium Alortra White Cement 40kg for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Alortra",
      "Category": "Cement & Binding"
    },
    "images": [
      "/images/products/cement---binding/alortra-white-cement-40kg-4.jpeg"
    ],
    "inStock": true
  },
  {
    "name": "Mombasa Cement 50kg",
    "slug": "mombasa-cement-nyumba-50kg-5",
    "category": "Cement & Binding",
    "price": 820,
    "description": "Premium Mombasa Cement Nyumba 50kg for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
    "description": "Premium Mombasa Cement Nyumba Pozzolanic 50kg for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
    "name": "Aalborg White Portland Cement 40kg",
    "slug": "aalborg-white-portland-cement-40kg-7",
    "category": "Cement & Binding",
    "price": 0,
    "description": "Premium Aalborg White Portland Cement 40kg for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
      "/images/products/cement---binding/aalborg-white-portland-cement-40kg-7.jpeg"
    ],
    "inStock": true
  },
  {
    "name": "DuraCoat Internal & External Skim Coat",
    "slug": "duracoat-internal---external-skim-coat-8",
    "category": "Cement & Binding",
    "price": 0,
    "description": "Premium DuraCoat Internal & External Skim Coat for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
      "/images/products/cement---binding/duracoat-internal---external-skim-coat-8.jpeg"
    ],
    "inStock": true
  },
  {
    "name": "Gypsum Powder POP",
    "slug": "gypsum-plaster-bags-stacked-9",
    "category": "Cement & Binding",
    "price": 2800,
    "description": "Premium Gypsum Plaster Bags Stacked for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
    "name": "DuraCoat Skim Coat Bags",
    "slug": "duracoat-skim-coat-bags-10",
    "category": "Cement & Binding",
    "price": 0,
    "description": "Premium DuraCoat Skim Coat Bags for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
      "/images/products/cement---binding/duracoat-skim-coat-bags-10.jpeg"
    ],
    "inStock": true
  },
  {
    "name": "Nails 1\"",
    "slug": "nails-1-0",
    "category": "Tools & Hardware",
    "price": 350,
    "description": "Premium Black Concrete Nails for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
    "description": "Premium Black Concrete Nails for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
    "description": "Premium Black Concrete Nails for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
    "description": "Premium Black Concrete Nails for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
    "description": "Premium Black Concrete Nails for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
    "description": "Premium Black Concrete Nails for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
    "description": "Premium Black Concrete Nails for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
    "description": "Premium Black Concrete Nails for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
    "name": "DuraCoat Skim Coat Bags",
    "slug": "duracoat-skim-coat-bags-12",
    "category": "Cement & Binding",
    "price": 0,
    "description": "Premium DuraCoat Skim Coat Bags for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
      "/images/products/cement---binding/duracoat-skim-coat-bags-12.jpeg"
    ],
    "inStock": true
  },
  {
    "name": "UltraTech Gyp+ Gypsum Plaster",
    "slug": "ultratech-gyp--gypsum-plaster-14",
    "category": "Cement & Binding",
    "price": 0,
    "description": "Premium UltraTech Gyp+ Gypsum Plaster for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "UltraTech",
      "Category": "Cement & Binding"
    },
    "images": [
      "/images/products/cement---binding/ultratech-gyp--gypsum-plaster-14.jpeg"
    ],
    "inStock": true
  },
  {
    "name": "UltraTech Gyp+ Gypsum Plaster Back",
    "slug": "ultratech-gyp--gypsum-plaster-back-15",
    "category": "Cement & Binding",
    "price": 0,
    "description": "Premium UltraTech Gyp+ Gypsum Plaster Back for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "UltraTech",
      "Category": "Cement & Binding"
    },
    "images": [
      "/images/products/cement---binding/ultratech-gyp--gypsum-plaster-back-15.jpeg"
    ],
    "inStock": true
  },
  {
    "name": "Undertaker 480 EC Insecticide 1L",
    "slug": "undertaker-480-ec-insecticide-1l-16",
    "category": "Tools & Hardware",
    "price": 3500,
    "description": "Premium Undertaker 480 EC Insecticide 1L for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
    "description": "Premium Tan-Ur PVC Water Hose Green for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
    "description": "Premium Tan-Ur PVC Water Hose Green for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
    "description": "Premium Tan-Ur PVC Water Hose Green for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
    "description": "Premium Tan-Ur PVC Water Hose Green for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
    "description": "Premium Undertaker 480 EC Insecticide 1L for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
    "description": "Premium Electrical Wire Rolls Stacked for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
      "/images/products/electrical---fixtures/electrical-wire-rolls-stacked-26.jpeg"
    ],
    "inStock": true,
    "unit": "per roll"
  },
  {
    "name": "Cable wire 2.5 roll",
    "slug": "cable-wire-2-5-roll-1",
    "category": "Electrical & Fixtures",
    "price": 6500,
    "description": "Premium Electrical Wire Rolls Stacked for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
      "/images/products/electrical---fixtures/electrical-wire-rolls-stacked-26.jpeg"
    ],
    "inStock": true,
    "unit": "per roll"
  },
  {
    "name": "Welding Rods",
    "slug": "welding-electrodes-rods-27",
    "category": "Steel & Welding",
    "price": 650,
    "description": "Premium Welding Electrodes/Rods for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
    "featured": true
  },
  {
    "name": "DuraCoat Skimcoat Filler",
    "slug": "duracoat-skim-coat-25kg-28",
    "category": "Cement & Binding",
    "price": 1800,
    "description": "Premium DuraCoat Skim Coat 25kg for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
    "description": "Premium Black Binding Wire Roll for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
    "description": "Premium Black Binding Wire Roll for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
    "description": "Premium DuraCoat Skim Coat 25kg for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
    "description": "Premium Orient Ceiling Fan for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
    "description": "Premium Tangit PVC-U Glue Adhesive for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
    "description": "Premium Orient Ceiling Fan for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
    "description": "Premium Orient Ceiling Fan Box for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
    "description": "Premium Orient Ceiling Fan Box Close Up for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
    "description": "Premium Orient Ceiling Fan for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
    "name": "Cement Bags Stacked",
    "slug": "cement-bags-stacked-37",
    "category": "Cement & Binding",
    "price": 0,
    "description": "Premium Cement Bags Stacked for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Cement",
      "Category": "Cement & Binding"
    },
    "images": [
      "/images/products/cement---binding/cement-bags-stacked-37.jpeg"
    ],
    "inStock": true
  },
  {
    "name": "Orient Fan",
    "slug": "orient-ceiling-fan-box-38",
    "category": "Electrical & Fixtures",
    "price": 3800,
    "description": "Premium Orient Ceiling Fan Box for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
    "name": "Cement Bags Stacked",
    "slug": "cement-bags-stacked-39",
    "category": "Cement & Binding",
    "price": 0,
    "description": "Premium Cement Bags Stacked for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Cement",
      "Category": "Cement & Binding"
    },
    "images": [
      "/images/products/cement---binding/cement-bags-stacked-39.jpeg"
    ],
    "inStock": true
  },
  {
    "name": "Cement Bags Stacked",
    "slug": "cement-bags-stacked-40",
    "category": "Cement & Binding",
    "price": 0,
    "description": "Premium Cement Bags Stacked for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Cement",
      "Category": "Cement & Binding"
    },
    "images": [
      "/images/products/cement---binding/cement-bags-stacked-40.jpeg"
    ],
    "inStock": true
  },
  {
    "name": "Cement Bags Stacked",
    "slug": "cement-bags-stacked-41",
    "category": "Cement & Binding",
    "price": 0,
    "description": "Premium Cement Bags Stacked for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Cement",
      "Category": "Cement & Binding"
    },
    "images": [
      "/images/products/cement---binding/cement-bags-stacked-41.jpeg"
    ],
    "inStock": true
  },
  {
    "name": "Bamburi Nguvu Cement 50kg",
    "slug": "bamburi-cement-50kg-42",
    "category": "Cement & Binding",
    "price": 950,
    "description": "Premium Bamburi Cement 50kg for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
    "description": "Premium Bamburi Cement Bag Back for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
    "description": "Premium Mombasa Cement Pozzolanic 50kg for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
    "name": "Twyford Glazed Floor Tiles 300x300mm",
    "slug": "twyford-glazed-floor-tiles-300x300mm-45",
    "category": "Paint & Finishes",
    "price": 0,
    "description": "Premium Twyford Glazed Floor Tiles 300x300mm for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Twyford",
      "Category": "Paint & Finishes"
    },
    "images": [
      "/images/products/paint---finishes/twyford-glazed-floor-tiles-300x300mm-45.jpeg"
    ],
    "inStock": true
  },
  {
    "name": "Twyford Glazed Floor Tiles 300x300mm",
    "slug": "twyford-glazed-floor-tiles-300x300mm-46",
    "category": "Paint & Finishes",
    "price": 0,
    "description": "Premium Twyford Glazed Floor Tiles 300x300mm for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Twyford",
      "Category": "Paint & Finishes"
    },
    "images": [
      "/images/products/paint---finishes/twyford-glazed-floor-tiles-300x300mm-46.jpeg"
    ],
    "inStock": true
  },
  {
    "name": "Twyford Glazed Floor Tiles Box",
    "slug": "twyford-glazed-floor-tiles-box-47",
    "category": "Paint & Finishes",
    "price": 0,
    "description": "Premium Twyford Glazed Floor Tiles Box for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Twyford",
      "Category": "Paint & Finishes"
    },
    "images": [
      "/images/products/paint---finishes/twyford-glazed-floor-tiles-box-47.jpeg"
    ],
    "inStock": true
  },
  {
    "name": "D8 Steel Rebar",
    "slug": "d8-steel-rebar-0",
    "category": "Steel & Welding",
    "price": 680,
    "description": "Premium Steel Reinforcement Bars Rebar for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
    "description": "Premium Steel Reinforcement Bars Rebar for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
    "description": "Premium Steel Reinforcement Bars Rebar for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
    "description": "Premium Steel Reinforcement Bars Rebar for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
    "description": "Premium Steel Reinforcement Bars Rebar for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
    "description": "Premium Steel Reinforcement Bars Rebar for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
    "name": "Plywood Sheets Stacked",
    "slug": "plywood-sheets-stacked-51",
    "category": "Tools & Hardware",
    "price": 0,
    "description": "Premium Plywood Sheets Stacked for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Plywood",
      "Category": "Tools & Hardware"
    },
    "images": [
      "/images/products/tools---hardware/plywood-sheets-stacked-51.jpeg"
    ],
    "inStock": true
  },
  {
    "name": "Crown & DuraCoat Paint Buckets",
    "slug": "crown---duracoat-paint-buckets-52",
    "category": "Paint & Finishes",
    "price": 0,
    "description": "Premium Crown & DuraCoat Paint Buckets for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Crown",
      "Category": "Paint & Finishes"
    },
    "images": [
      "/images/products/paint---finishes/crown---duracoat-paint-buckets-52.jpeg"
    ],
    "inStock": true
  },
  {
    "name": "Welding Materials and Cutting Disc",
    "slug": "welding-materials-and-cutting-disc-54",
    "category": "Steel & Welding",
    "price": 0,
    "description": "Premium Welding Materials and Cutting Disc for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
      "/images/products/steel---welding/welding-materials-and-cutting-disc-54.jpeg"
    ],
    "inStock": true
  },
  {
    "name": "Crown & DuraCoat Paint Buckets",
    "slug": "crown---duracoat-paint-buckets-55",
    "category": "Paint & Finishes",
    "price": 0,
    "description": "Premium Crown & DuraCoat Paint Buckets for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Crown",
      "Category": "Paint & Finishes"
    },
    "images": [
      "/images/products/paint---finishes/crown---duracoat-paint-buckets-55.jpeg"
    ],
    "inStock": true
  },
  {
    "name": "Stainless Steel Kitchen Sink",
    "slug": "stainless-steel-kitchen-sink-56",
    "category": "Plumbing",
    "price": 2500,
    "description": "Premium Stainless Steel Kitchen Sink for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
    "name": "Coiled Water Pipes",
    "slug": "coiled-water-pipes-58",
    "category": "Plumbing",
    "price": 0,
    "description": "Premium Coiled Water Pipes for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Coiled",
      "Category": "Plumbing"
    },
    "images": [
      "/images/products/plumbing/coiled-water-pipes-58.jpeg"
    ],
    "inStock": true
  },
  {
    "name": "Galvanized Wire Coils Loading",
    "slug": "galvanized-wire-coils-loading-59",
    "category": "Steel & Welding",
    "price": 0,
    "description": "Premium Galvanized Wire Coils Loading for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Galvanized",
      "Category": "Steel & Welding"
    },
    "images": [
      "/images/products/steel---welding/galvanized-wire-coils-loading-59.jpeg"
    ],
    "inStock": true
  },
  {
    "name": "Steel Profiles and Sheets Yard",
    "slug": "steel-profiles-and-sheets-yard-60",
    "category": "Steel & Welding",
    "price": 0,
    "description": "Premium Steel Profiles and Sheets Yard for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
      "/images/products/steel---welding/steel-profiles-and-sheets-yard-60.jpeg"
    ],
    "inStock": true
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
