const fs = require('fs');
const svgContent = fs.readFileSync('public/Official_logo.svg', 'utf8');

const regex = /fill="([^"]+)"/g;
let match;
const fills = {};

while ((match = regex.exec(svgContent)) !== null) {
  const color = match[1];
  fills[color] = (fills[color] || 0) + 1;
}

console.log(fills);
