const fs = require('fs');

const svgContent = fs.readFileSync('public/Official_logo.svg', 'utf8');

// The background path starts with: M0 1363v1363h1535V0H0zm
// We need to replace it with an absolute M command.
// Initial point was 0, 1363. m624.5-359 -> absolute M 624.5 1004
let newContent = svgContent.replace('M0 1363v1363h1535V0H0zm624.5-359c', 'M624.5 1004c');

// Check if there are other full-screen background rects or paths
// e.g. <rect width="100%" height="100%" ...
// Not found in the snippet, but let's check.

fs.writeFileSync('public/Official_logo_nobg.svg', newContent, 'utf8');
console.log('Background removed and saved to Official_logo_nobg.svg');
