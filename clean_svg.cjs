const fs = require('fs');

const svgContent = fs.readFileSync('public/Official_logo.svg', 'utf8');

const keepNavy = ['#00002a', '#2a3355'];
const keepGold = ['#a65', '#aa662a', '#aa9980', '#a95', '#d49980', '#806655'];

const navyColor = '#0B1B3D';
const goldColor = '#C5A059';

let outPaths = [];

// The tracer output is typically: <g fill="..."><path .../><path .../></g> or <path fill="..." d="..."/>
// We will extract all d="..." and their associated fill.

let currentFill = null;

// Use regex to tokenize tags
const tagRegex = /<[^>]+>/g;
let match;
while ((match = tagRegex.exec(svgContent)) !== null) {
  const tag = match[0];
  if (tag.startsWith('<g')) {
    const fillMatch = tag.match(/fill="([^"]+)"/);
    if (fillMatch) {
      currentFill = fillMatch[1];
    }
  } else if (tag.startsWith('</g>')) {
    currentFill = null;
  } else if (tag.startsWith('<path')) {
    const fillMatch = tag.match(/fill="([^"]+)"/);
    const fill = fillMatch ? fillMatch[1] : currentFill;
    
    const dMatch = tag.match(/d="([^"]+)"/);
    if (fill && dMatch) {
      if (keepNavy.includes(fill)) {
        outPaths.push(`<path fill="${navyColor}" d="${dMatch[1]}" />`);
      } else if (keepGold.includes(fill)) {
        outPaths.push(`<path fill="${goldColor}" d="${dMatch[1]}" />`);
      }
    }
  }
}

// Reconstruct SVG
const viewBoxMatch = svgContent.match(/viewBox="[^"]+"/);
const viewBox = viewBoxMatch ? viewBoxMatch[0] : 'viewBox="206 903 1127 802"';

const finalSvg = `<svg xmlns="http://www.w3.org/2000/svg" ${viewBox}>\n  ${outPaths.join('\n  ')}\n</svg>`;

fs.writeFileSync('public/Official_logo.svg', finalSvg);
console.log('Cleaned Official_logo.svg');

// Now generate the light variant
const lightNavyColor = '#F8F9FA'; // warm off-white
const finalSvgLight = finalSvg.replace(new RegExp(navyColor, 'g'), lightNavyColor);

fs.writeFileSync('public/Official_logo_light.svg', finalSvgLight);
console.log('Created Official_logo_light.svg');
