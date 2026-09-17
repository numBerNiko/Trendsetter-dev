const fs = require('fs');

const svgContent = fs.readFileSync('public/Official_logo_nobg.svg', 'utf8');

let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
let currentX = 0, currentY = 0;

// This is a naive regex, but let's just extract all absolute and relative commands to get a rough idea.
// Actually, writing a full SVG path parser in 10 minutes is hard. 
// A simpler way: we can just find all coordinate-like numbers in the SVG and find the min/max of them?
// No, relative commands will mess that up, but let's look at the numbers.
// SVG has 'd="..."'
const dMatch = svgContent.match(/d="([^"]+)"/g);

if (!dMatch) {
  console.log("No paths found");
  process.exit();
}

// Just output a rough estimate by finding all absolute coordinates
// Wait, a better way is to serve the SVG in a tiny HTML page, and open it in a browser, then read the result.
// Let's create an HTML file that calculates getBBox() and writes it to a file using a fetch request to a tiny local server.

const http = require('http');
const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      console.log('BBox from browser:', body);
      res.end('ok');
      process.exit(0);
    });
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <!DOCTYPE html>
      <html>
      <body>
        <div id="container"></div>
        <script>
          fetch('/Official_logo_nobg.svg').then(r => r.text()).then(svg => {
            document.getElementById('container').innerHTML = svg;
            const svgEl = document.querySelector('svg');
            const bbox = svgEl.getBBox();
            fetch('/', {
              method: 'POST',
              body: JSON.stringify({x: bbox.x, y: bbox.y, width: bbox.width, height: bbox.height})
            });
          });
        </script>
      </body>
      </html>
    `);
  }
});

server.listen(5175, () => {
  console.log('Listening on 5175');
});

// Since Official_logo_nobg.svg needs to be served:
const server2 = http.createServer((req, res) => {
  if (req.url === '/Official_logo_nobg.svg') {
    res.writeHead(200, { 'Content-Type': 'image/svg+xml' });
    res.end(svgContent);
  } else if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <!DOCTYPE html>
      <html>
      <body>
        <div id="container"></div>
        <script>
          fetch('/Official_logo_nobg.svg').then(r => r.text()).then(svg => {
            document.getElementById('container').innerHTML = svg;
            // Need to make sure it's mounted and rendered
            setTimeout(() => {
              const svgEl = document.querySelector('svg');
              // We actually want the bbox of all elements EXCEPT the root svg itself
              // Or better, the bbox of the <g> tags
              let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
              const paths = document.querySelectorAll('path, polygon, rect, circle, ellipse, line, polyline');
              for (const path of paths) {
                const box = path.getBBox();
                if (box.width === 0 && box.height === 0) continue;
                minX = Math.min(minX, box.x);
                minY = Math.min(minY, box.y);
                maxX = Math.max(maxX, box.x + box.width);
                maxY = Math.max(maxY, box.y + box.height);
              }
              const result = {x: minX, y: minY, width: maxX - minX, height: maxY - minY};
              fetch('/submit', {
                method: 'POST',
                body: JSON.stringify(result)
              }).catch(e => console.error(e));
            }, 100);
          });
        </script>
      </body>
      </html>
    `);
  } else if (req.url === '/submit') {
    let body = '';
    req.on('data', chunk => body += chunk.toString());
    req.on('end', () => {
      console.log('BBox from browser:', body);
      fs.writeFileSync('bbox.json', body);
      res.end('ok');
      process.exit(0);
    });
  }
});
server2.listen(5176, () => {
  console.log('Server started on 5176');
});
