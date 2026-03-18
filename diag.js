const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const styleOpen = (html.match(/<style>/g) || []).length;
const styleClose = (html.match(/<\/style>/g) || []).length;
const headOpen = (html.match(/<head>/g) || []).length;
const headClose = (html.match(/<\/head>/g) || []).length;
const bodyOpen = (html.match(/<body>/g) || []).length;
const bodyClose = (html.match(/<\/body>/g) || []).length;

console.log(`<style>: ${styleOpen}, </style>: ${styleClose}`);
console.log(`<head>: ${headOpen}, </head>: ${headClose}`);
console.log(`<body>: ${bodyOpen}, </body>: ${bodyClose}`);
console.log(`Total chars: ${html.length}`);

// Find position of last </style> and </head>
const lastStyleClose = html.lastIndexOf('</style>');
const lastHeadClose = html.lastIndexOf('</head>');
console.log(`Last </style> at: ${lastStyleClose}, </head> at: ${lastHeadClose}`);
console.log(`Order OK (style before head): ${lastStyleClose < lastHeadClose}`);

// Check if there's content between </style> and </head>
if (lastStyleClose < lastHeadClose) {
  const between = html.slice(lastStyleClose + '</style>'.length, lastHeadClose).trim();
  console.log(`Content between </style> and </head>: "${between.slice(0, 200)}"`);
}

// Check for unclosed tags by looking at what's after the last </style>
const afterStyle = html.slice(lastStyleClose + '</style>'.length, lastStyleClose + 200);
console.log(`\nContent right after last </style>:\n${afterStyle}`);

// Check netlify.toml or any config
const files = fs.readdirSync('.');
console.log(`\nFiles in directory: ${files.join(', ')}`);
