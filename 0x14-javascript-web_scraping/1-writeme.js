#!/usr/bin/node
const fs = require('fs');

if (process.argv.length !== 4) {
  console.error('Usage: ./1-writeme.js <file_path> <text_to_write>');
  process.exit(1);
}

const filePath = process.argv[2];
const textToWrite = process.argv[3];

fs.writeFile(filePath, textToWrite, (err) => {
  if (err) {
    console.error(err);
  }
});
