const fs = require('fs');

const svgContent = fs.readFileSync('public/Official_logo.svg', 'utf8');

const regex = /<path[^>]*?fill="([^"]+)"[^>]*?d="([^"]+)"/g;
const regex2 = /<path[^>]*?d="([^"]+)"[^>]*?fill="([^"]+)"/g;
let match;
const data = [];
while ((match = regex.exec(svgContent)) !== null) {
  data.push({ fill: match[1], length: match[2].length });
}
while ((match = regex2.exec(svgContent)) !== null) {
  data.push({ fill: match[2], length: match[1].length });
}

// Check <g fill="...">
const gRegex = /<g[^>]*?fill="([^"]+)"[^>]*>([\s\S]*?)<\/g>/g;
while ((match = gRegex.exec(svgContent)) !== null) {
  const fill = match[1];
  const innerPaths = match[2];
  const dRegex = /d="([^"]+)"/g;
  let dMatch;
  while ((dMatch = dRegex.exec(innerPaths)) !== null) {
    data.push({ fill, length: dMatch[1].length });
  }
}

data.sort((a, b) => b.length - a.length);
console.log(data.slice(0, 20));
