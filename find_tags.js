const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const lines = html.split('\n');
lines.forEach((line, index) => {
  if (line.includes('<body') || line.includes('</body') || line.includes('<head') || line.includes('</head')) {
    console.log(`Line ${index + 1}: ${line.trim()}`);
  }
});
