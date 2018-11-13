const fs = require('fs');

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');
    console.log(filesToString);
  });
};

module.exports.touch = (fileName) => {
  fs.writeFile(fileName, '', err => {
    if (err) throw err;
    console.log(`New file "${fileName}" created.`);
  });
}

module.exports.mkdir = (dirName) => {
  fs.mkdir(dirName, { recursive: true }, (err) => {
    if (err) throw err;
    console.log(`New directory "${dirName}" created.`);
  });
}