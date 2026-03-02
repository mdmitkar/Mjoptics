const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "src", "pages");

const files = fs.readdirSync(dir).filter((f) => f.endsWith(".jsx"));

files.forEach((f) => {
  const filePath = path.join(dir, f);
  let content = fs.readFileSync(filePath, "utf8");
  let newContent = content.replace(/\\\`/g, "\`").replace(/\\\$/g, "$");
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent);
    console.log("Fixed", f);
  }
});
