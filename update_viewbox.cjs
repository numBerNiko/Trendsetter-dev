const fs = require('fs');
const svgBoundingBox = require('svg-path-bounding-box');

const svgContent = fs.readFileSync('public/Official_logo_nobg.svg', 'utf8');

const regex = /d="([^"]+)"/g;
let match;
let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;

while ((match = regex.exec(svgContent)) !== null) {
  const d = match[1];
  try {
    const box = svgBoundingBox(d);
    if (box.width === 0 && box.height === 0) continue;
    minX = Math.min(minX, box.minX);
    minY = Math.min(minY, box.minY);
    maxX = Math.max(maxX, box.maxX);
    maxY = Math.max(maxY, box.maxY);
  } catch (e) {
    console.error('Error parsing path', e.message);
  }
}

if (minX === Infinity) {
  console.error("No valid paths found");
  process.exit(1);
}

const margin = 20; // Add some margin
const vbX = Math.floor(minX - margin);
const vbY = Math.floor(minY - margin);
const vbW = Math.ceil(maxX - minX + margin * 2);
const vbH = Math.ceil(maxY - minY + margin * 2);

const newVb = `${vbX} ${vbY} ${vbW} ${vbH}`;
console.log('New viewBox:', newVb);

const updatedSvg = svgContent.replace(/viewBox="[^"]+"/, `viewBox="${newVb}"`);
fs.writeFileSync('public/Official_logo.svg', updatedSvg);
console.log('Updated Official_logo.svg');
