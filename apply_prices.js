const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/app/api/seed/route.ts');
let content = fs.readFileSync(filePath, 'utf8');

const productsMatch = content.match(/const products = (\[[\s\S]*?\]);\n\nexport async function GET/);
if (!productsMatch) {
  console.error("Could not find products array.");
  process.exit(1);
}

let products = eval(productsMatch[1]);

const newProducts = [];

// Helper to slugify
const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

products.forEach(p => {
  // Cement
  if (p.name.includes("Mombasa Cement")) {
    p.price = 820;
    newProducts.push(p);
  }
  else if (p.name.includes("Bamburi Nguvu")) {
    p.price = 950;
    newProducts.push(p);
  }
  else if (p.name.includes("Bamburi Fundi")) {
    p.price = 720;
    newProducts.push(p);
  }
  // Welding Rods
  else if (p.name.includes("Welding Rods")) {
    p.price = 650;
    newProducts.push(p);
  }
  // Undertaker
  else if (p.name.includes("Undertaker")) {
    p.price = 3500;
    newProducts.push(p);
  }
  // Tangit
  else if (p.name.includes("Tangit")) {
    p.name = "P.V.C Tangit Glue";
    p.price = 850;
    p.unit = "per pc";
    newProducts.push(p);
  }
  // PPR
  else if (p.name.includes("PPR Pipe Fittings Green")) {
    p.name = "PPR Sockets";
    p.price = 30;
    p.unit = "per pc";
    newProducts.push(p);
  }
  // Nails Variants
  else if (p.slug === "black-concrete-nails-11") {
    const nails = [
      { name: 'Nails 1"', price: 350, unit: "per kg" },
      { name: 'Nails 1 1/2"', price: 350, unit: "per kg" },
      { name: 'Nails 2"', price: 200, unit: "per kg" },
      { name: 'Nails 3"', price: 200, unit: "per kg" },
      { name: 'Nails 4"', price: 200, unit: "per kg" },
      { name: 'Nails 5"', price: 200, unit: "per kg" },
      { name: 'Ceiling Nails 1"', price: 350, unit: "per kg" },
      { name: 'Ceiling Nails 1 1/2"', price: 350, unit: "per kg" }
    ];
    nails.forEach((variant, i) => {
      newProducts.push({
        ...p,
        name: variant.name,
        slug: slugify(variant.name) + "-" + i,
        price: variant.price,
        unit: variant.unit
      });
    });
  }
  // Ignore other generic nails to avoid clutter
  else if (p.name.includes("Black Concrete Nails")) {
    // skip
  }
  // Hose pipe Variants
  else if (p.slug === "tan-ur-pvc-water-hose-green-18") {
    const hoses = [
      { name: 'Hose pipe 3/4" roll', price: 6500, unit: "per roll" },
      { name: 'Hose pipe 1/2" roll', price: 6000, unit: "per roll" },
      { name: 'Hose pipe 1" roll', price: 7500, unit: "per roll" },
      { name: 'Hose pipe 1 metre', price: 200, unit: "per metre" }
    ];
    hoses.forEach((variant, i) => {
      newProducts.push({
        ...p,
        name: variant.name,
        slug: slugify(variant.name) + "-" + i,
        price: variant.price,
        unit: variant.unit
      });
    });
  }
  // Ignore other generic hoses
  else if (p.name.includes("Water Hose")) {
    // skip
  }
  // Binding Wire Variants
  else if (p.slug === "black-binding-wire-roll-29") {
    const wires = [
      { name: 'Binding Wire 1 roll', price: 4000, unit: "per roll" },
      { name: 'Binding Wire 1kg', price: 350, unit: "per kg" }
    ];
    wires.forEach((variant, i) => {
      newProducts.push({
        ...p,
        name: variant.name,
        slug: slugify(variant.name) + "-" + i,
        price: variant.price,
        unit: variant.unit
      });
    });
  }
  // D-bars Variants
  else if (p.slug === "steel-reinforcement-bars-rebar-48") {
    const bars = [
      { name: 'D8 Steel Rebar', price: 680, unit: "per piece" },
      { name: 'D10 Steel Rebar', price: 980, unit: "per piece" },
      { name: 'D12 Steel Rebar', price: 1370, unit: "per piece" },
      { name: 'D16 Steel Rebar', price: 2370, unit: "per piece" },
      { name: 'D20 Steel Rebar', price: 3900, unit: "per piece" },
      { name: 'D25 Steel Rebar', price: 6700, unit: "per piece" }
    ];
    bars.forEach((variant, i) => {
      newProducts.push({
        ...p,
        name: variant.name,
        slug: slugify(variant.name) + "-" + i,
        price: variant.price,
        unit: variant.unit
      });
    });
  }
  // Ignore other generic rebar
  else if (p.name.includes("Reinforcement Bars Rebar")) {
    // skip
  }
  else {
    newProducts.push(p);
  }
});

// Stringify preserving formatting as much as possible
const newProductsStr = JSON.stringify(newProducts, null, 2);
content = content.replace(productsMatch[1], newProductsStr);

fs.writeFileSync(filePath, content, 'utf8');
console.log(`Updated seed script. Replaced ${products.length} products with ${newProducts.length} specific products and new prices.`);
