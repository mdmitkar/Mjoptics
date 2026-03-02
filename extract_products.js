import fs from "fs";

const file = "z:/Client 2/Mjoptics/src/pages/Collections.jsx";
let content = fs.readFileSync(file, "utf8");
const match = content.match(/const products = \[[\s\S]*?\n  \];/);
if (match) {
  fs.mkdirSync("z:/Client 2/Mjoptics/src/data", { recursive: true });
  fs.writeFileSync(
    "z:/Client 2/Mjoptics/src/data/products.js",
    "export " + match[0],
  );

  content = content.replace(match[0], "");
  content = content.replace(
    "import ProductCard from '../components/ProductCard';",
    "import ProductCard from '../components/ProductCard';\nimport { products } from '../data/products';",
  );
  fs.writeFileSync(file, content);
  console.log("Extracted products!");
}
