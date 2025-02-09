const fs = require("fs");
const path = require("path");

const sourceDir = path.join(__dirname, "src/assets"); // Adjust if using /src/assets
const destinationDir = path.join(__dirname, "public");

// Ensure the destination directory exists
if (!fs.existsSync(destinationDir)) {
  fs.mkdirSync(destinationDir, { recursive: true });
}

// Copy all files from assets to public/icons
fs.readdirSync(sourceDir).forEach(file => {
  fs.copyFileSync(path.join(sourceDir, file), path.join(destinationDir, file));
  console.log(`Copied: ${file}`);
});

console.log("✅ Icons copied to public/icons/");
