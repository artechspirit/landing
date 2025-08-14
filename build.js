import fs from "fs";
import path from "path";

function copyRecursive(src, dest, excludeFiles = []) {
  const stats = fs.statSync(src);

  if (stats.isDirectory()) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach((file) => {
      const srcPath = path.join(src, file);
      const destPath = path.join(dest, file);
      copyRecursive(srcPath, destPath, excludeFiles);
    });
  } else {
    if (!excludeFiles.includes(path.basename(src))) {
      fs.copyFileSync(src, dest);
      console.log(`Copied: ${src} -> ${dest}`);
    }
  }
}

// Copy src to dist, exclude input.css
copyRecursive("./src", "./dist", ["input.css"]);
