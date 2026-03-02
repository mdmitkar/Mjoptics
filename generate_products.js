import fs from "fs";

const brands = [
  "Ray-Ban",
  "Oakley",
  "Tom Ford",
  "Persol",
  "Titan",
  "Silhouette",
  "MJ Optics",
];
const styles = [
  "Aviator",
  "Wayfarer",
  "Round",
  "Square",
  "Cat Eye",
  "Rimless",
  "Clubmaster",
];
const types = ["Sunglasses", "Eyeglasses", "Computer Glasses"];
const tagsOptions = [
  "Bestseller",
  "New Arrival",
  "Premium",
  "Polarized",
  "Essential",
  "Lightweight",
];
const bases = [
  "/images/frame1.png",
  "/images/frame2.png",
  "/images/frame3.png",
];

const baseColors = [
  { name: "Classic Black", hex: "#1e293b", filter: "brightness(0.2)" },
  {
    name: "Crimson Red",
    hex: "#be123c",
    filter: "hue-rotate(330deg) saturate(2) brightness(0.8)",
  },
  {
    name: "Navy Blue",
    hex: "#1d4ed8",
    filter: "hue-rotate(210deg) saturate(1.5) brightness(0.7)",
  },
  {
    name: "Forest Green",
    hex: "#15803d",
    filter: "hue-rotate(120deg) saturate(1.2) brightness(0.6)",
  },
  {
    name: "Gold/Tortoise",
    hex: "#d97706",
    filter: "hue-rotate(30deg) saturate(1.5) brightness(1.1)",
  },
  {
    name: "Silver Tone",
    hex: "#94a3b8",
    filter: "saturate(0) brightness(1.3)",
  },
  {
    name: "Rose Gold",
    hex: "#fda4af",
    filter: "hue-rotate(330deg) saturate(1.2) brightness(1.4)",
  },
];

const generateProducts = () => {
  const prods = [];
  for (let i = 1; i <= 20; i++) {
    const brand = brands[Math.floor(Math.random() * brands.length)];
    const style = styles[Math.floor(Math.random() * styles.length)];
    const type = types[Math.floor(Math.random() * types.length)];
    const isSunglasses = type === "Sunglasses";
    const tagCount = Math.floor(Math.random() * 2) + 1;
    const itemTags = [...tagsOptions]
      .sort(() => 0.5 - Math.random())
      .slice(0, tagCount);
    const colorCount = Math.floor(Math.random() * 3) + 2; // 2 to 4 colors
    const colors = [...baseColors]
      .sort(() => 0.5 - Math.random())
      .slice(0, colorCount);

    // Select base image based on style/type loosely
    let base = bases[0];
    if (style === "Wayfarer" || isSunglasses) base = bases[1];
    if (style === "Rimless" || style === "Round") base = bases[2];

    prods.push({
      id: i,
      name: `${brand} ${style}`,
      brand: brand,
      category: type,
      price: "$" + (Math.floor(Math.random() * 25) * 10 + 90),
      tags: itemTags,
      baseImage: base,
      colors: colors,
    });
  }
  return prods;
};

const file = "z:/Client 2/Mjoptics/src/pages/Collections.jsx";
let content = fs.readFileSync(file, "utf8");

content = content.replace(
  "import { Search, Filter, ChevronRight } from 'lucide-react';",
  "import { Search, Filter } from 'lucide-react';\\nimport ProductCard from '../components/ProductCard';",
);

const prodsStr =
  "const products = " + JSON.stringify(generateProducts(), null, 2) + ";";
content = content.replace(/const products = \[[\s\S]*?\n  \];/, prodsStr);

const oldMap = /{filteredProducts\.map\(\(product, index\) => \([\s\S]*?}\)\)}/;
const newMap = `{filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}`;
content = content.replace(oldMap, newMap);

fs.writeFileSync(file, content);
console.log("Collections page updated with 20 products and ProductCard!");
