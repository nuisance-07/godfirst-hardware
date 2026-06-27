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

// Updates mapping
const updates = [
  { match: "Welding Electrodes/Rods", name: "Welding Rods", price: 650, featured: true },
  { match: "Mombasa Cement Nyumba 50kg", name: "Mombasa Cement 50kg", price: 820, featured: true },
  { match: "Bamburi Cement 50kg", name: "Bamburi Nguvu Cement 50kg", price: 950, featured: true },
  { match: "Bamburi Cement Bag Back", name: "Bamburi Fundi Cement 50kg", price: 720, featured: true },
  { match: "Aalborg Portland White Cement Bags", name: "White Cement 40kg", price: 3400, featured: true },
  { match: "Sina Gips Gypsum Plaster Bags Loading", name: "Gyproc Filler", price: 2800, featured: true },
  { match: "DuraCoat Skim Coat 25kg", name: "DuraCoat Skimcoat Filler", price: 1800, featured: true },
  { match: "Orient Ceiling Fan", name: "Orient Fan", price: 3800, featured: true },
  { match: "Gypsum Plaster Bags Stacked", name: "Gypsum Powder POP", price: 2800, featured: true },
];

products = products.map(p => {
  let matchedUpdate = updates.find(u => p.name.includes(u.match));
  if (matchedUpdate) {
    p.name = matchedUpdate.name;
    p.price = matchedUpdate.price;
    p.featured = true;
  }
  return p;
});

const newProductsStr = JSON.stringify(products, null, 2);
content = content.replace(productsMatch[1], newProductsStr);

fs.writeFileSync(filePath, content, 'utf8');
console.log("Updated seed script with new prices and featured products.");
