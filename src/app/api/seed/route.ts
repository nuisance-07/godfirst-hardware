
import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import { Product } from "@/models/Product";

const products = [
  {
    "name": "Sina Gips Gypsum Plaster Bags Loading",
    "slug": "sina-gips-gypsum-plaster-bags-loading-0",
    "category": "Cement & Binding",
    "price": 0,
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
    "inStock": true
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
    "name": "Aalborg Portland White Cement Bags",
    "slug": "aalborg-portland-white-cement-bags-2",
    "category": "Cement & Binding",
    "price": 0,
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
    "inStock": true
  },
  {
    "name": "PPR Pipe Fittings Green",
    "slug": "ppr-pipe-fittings-green-3",
    "category": "Plumbing",
    "price": 0,
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
    "inStock": true
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
    "name": "Mombasa Cement Nyumba 50kg",
    "slug": "mombasa-cement-nyumba-50kg-5",
    "category": "Cement & Binding",
    "price": 0,
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
    "inStock": true
  },
  {
    "name": "Mombasa Cement Nyumba Pozzolanic 50kg",
    "slug": "mombasa-cement-nyumba-pozzolanic-50kg-6",
    "category": "Cement & Binding",
    "price": 0,
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
    "name": "Gypsum Plaster Bags Stacked",
    "slug": "gypsum-plaster-bags-stacked-9",
    "category": "Cement & Binding",
    "price": 0,
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
    "inStock": true
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
    "name": "Black Concrete Nails",
    "slug": "black-concrete-nails-11",
    "category": "Tools & Hardware",
    "price": 0,
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
    "inStock": true
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
    "name": "Black Concrete Nails in Bags",
    "slug": "black-concrete-nails-in-bags-13",
    "category": "Tools & Hardware",
    "price": 0,
    "description": "Premium Black Concrete Nails in Bags for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
      "/images/products/tools---hardware/black-concrete-nails-in-bags-13.jpeg"
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
    "price": 0,
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
    "name": "Black Concrete Nails Bag",
    "slug": "black-concrete-nails-bag-17",
    "category": "Tools & Hardware",
    "price": 0,
    "description": "Premium Black Concrete Nails Bag for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
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
      "/images/products/tools---hardware/black-concrete-nails-bag-17.jpeg"
    ],
    "inStock": true
  },
  {
    "name": "Tan-Ur PVC Water Hose Green",
    "slug": "tan-ur-pvc-water-hose-green-18",
    "category": "Plumbing",
    "price": 0,
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
    "inStock": true
  },
  {
    "name": "Undertaker 480 EC Insecticide 1L",
    "slug": "undertaker-480-ec-insecticide-1l-19",
    "category": "Tools & Hardware",
    "price": 0,
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
    "name": "Tan-Ur PVC Water Hose Green",
    "slug": "tan-ur-pvc-water-hose-green-20",
    "category": "Plumbing",
    "price": 0,
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
      "/images/products/plumbing/tan-ur-pvc-water-hose-green-20.jpeg"
    ],
    "inStock": true
  },
  {
    "name": "Green PVC Water Hose Roll",
    "slug": "green-pvc-water-hose-roll-21",
    "category": "Plumbing",
    "price": 0,
    "description": "Premium Green PVC Water Hose Roll for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Green",
      "Category": "Plumbing"
    },
    "images": [
      "/images/products/plumbing/green-pvc-water-hose-roll-21.jpeg"
    ],
    "inStock": true
  },
  {
    "name": "Green PVC Water Hose Roll",
    "slug": "green-pvc-water-hose-roll-22",
    "category": "Plumbing",
    "price": 0,
    "description": "Premium Green PVC Water Hose Roll for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Green",
      "Category": "Plumbing"
    },
    "images": [
      "/images/products/plumbing/green-pvc-water-hose-roll-22.jpeg"
    ],
    "inStock": true
  },
  {
    "name": "Blue PVC Water Hose Roll",
    "slug": "blue-pvc-water-hose-roll-23",
    "category": "Plumbing",
    "price": 0,
    "description": "Premium Blue PVC Water Hose Roll for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Blue",
      "Category": "Plumbing"
    },
    "images": [
      "/images/products/plumbing/blue-pvc-water-hose-roll-23.jpeg"
    ],
    "inStock": true
  },
  {
    "name": "Tan-Uk PVC Water Hose Blue",
    "slug": "tan-uk-pvc-water-hose-blue-24",
    "category": "Plumbing",
    "price": 0,
    "description": "Premium Tan-Uk PVC Water Hose Blue for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Tan-Uk",
      "Category": "Plumbing"
    },
    "images": [
      "/images/products/plumbing/tan-uk-pvc-water-hose-blue-24.jpeg"
    ],
    "inStock": true
  },
  {
    "name": "Blue PVC Water Hose Roll",
    "slug": "blue-pvc-water-hose-roll-25",
    "category": "Plumbing",
    "price": 0,
    "description": "Premium Blue PVC Water Hose Roll for your construction and hardware needs. Quality guaranteed by Godfirst Hardware.",
    "features": [
      "High quality",
      "Durable",
      "Reliable"
    ],
    "specifications": {
      "Brand": "Blue",
      "Category": "Plumbing"
    },
    "images": [
      "/images/products/plumbing/blue-pvc-water-hose-roll-25.jpeg"
    ],
    "inStock": true
  },
  {
    "name": "Electrical Wire Rolls Stacked",
    "slug": "electrical-wire-rolls-stacked-26",
    "category": "Electrical & Fixtures",
    "price": 0,
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
    "inStock": true
  },
  {
    "name": "Welding Electrodes/Rods",
    "slug": "welding-electrodes-rods-27",
    "category": "Steel & Welding",
    "price": 0,
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
    "inStock": true
  },
  {
    "name": "DuraCoat Skim Coat 25kg",
    "slug": "duracoat-skim-coat-25kg-28",
    "category": "Cement & Binding",
    "price": 0,
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
    "inStock": true
  },
  {
    "name": "Black Binding Wire Roll",
    "slug": "black-binding-wire-roll-29",
    "category": "Steel & Welding",
    "price": 0,
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
    "inStock": true
  },
  {
    "name": "DuraCoat Skim Coat 25kg",
    "slug": "duracoat-skim-coat-25kg-30",
    "category": "Cement & Binding",
    "price": 0,
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
    "inStock": true
  },
  {
    "name": "Orient Ceiling Fan",
    "slug": "orient-ceiling-fan-31",
    "category": "Electrical & Fixtures",
    "price": 0,
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
    "inStock": true
  },
  {
    "name": "Tangit PVC-U Glue Adhesive",
    "slug": "tangit-pvc-u-glue-adhesive-32",
    "category": "Plumbing",
    "price": 0,
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
    "inStock": true
  },
  {
    "name": "Orient Ceiling Fan",
    "slug": "orient-ceiling-fan-33",
    "category": "Electrical & Fixtures",
    "price": 0,
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
    "inStock": true
  },
  {
    "name": "Orient Ceiling Fan Box",
    "slug": "orient-ceiling-fan-box-34",
    "category": "Electrical & Fixtures",
    "price": 0,
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
    "inStock": true
  },
  {
    "name": "Orient Ceiling Fan Box Close Up",
    "slug": "orient-ceiling-fan-box-close-up-35",
    "category": "Electrical & Fixtures",
    "price": 0,
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
    "inStock": true
  },
  {
    "name": "Orient Ceiling Fan",
    "slug": "orient-ceiling-fan-36",
    "category": "Electrical & Fixtures",
    "price": 0,
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
    "inStock": true
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
    "name": "Orient Ceiling Fan Box",
    "slug": "orient-ceiling-fan-box-38",
    "category": "Electrical & Fixtures",
    "price": 0,
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
    "inStock": true
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
    "name": "Bamburi Cement 50kg",
    "slug": "bamburi-cement-50kg-42",
    "category": "Cement & Binding",
    "price": 0,
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
    "inStock": true
  },
  {
    "name": "Bamburi Cement Bag Back",
    "slug": "bamburi-cement-bag-back-43",
    "category": "Cement & Binding",
    "price": 0,
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
    "inStock": true
  },
  {
    "name": "Mombasa Cement Pozzolanic 50kg",
    "slug": "mombasa-cement-pozzolanic-50kg-44",
    "category": "Cement & Binding",
    "price": 0,
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
    "name": "Steel Reinforcement Bars Rebar",
    "slug": "steel-reinforcement-bars-rebar-48",
    "category": "Steel & Welding",
    "price": 0,
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
    "inStock": true
  },
  {
    "name": "Steel Reinforcement Bars Rebar",
    "slug": "steel-reinforcement-bars-rebar-49",
    "category": "Steel & Welding",
    "price": 0,
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
      "/images/products/steel---welding/steel-reinforcement-bars-rebar-49.jpeg"
    ],
    "inStock": true
  },
  {
    "name": "Steel Reinforcement Bars Rebar",
    "slug": "steel-reinforcement-bars-rebar-50",
    "category": "Steel & Welding",
    "price": 0,
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
      "/images/products/steel---welding/steel-reinforcement-bars-rebar-50.jpeg"
    ],
    "inStock": true
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
    "name": "Steel Reinforcement Bars Rebar",
    "slug": "steel-reinforcement-bars-rebar-53",
    "category": "Steel & Welding",
    "price": 0,
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
      "/images/products/steel---welding/steel-reinforcement-bars-rebar-53.jpeg"
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
    "price": 0,
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
    "name": "Steel Reinforcement Bars Rebar",
    "slug": "steel-reinforcement-bars-rebar-57",
    "category": "Steel & Welding",
    "price": 0,
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
      "/images/products/steel---welding/steel-reinforcement-bars-rebar-57.jpeg"
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
