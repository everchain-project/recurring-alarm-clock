// This patch makes changes to the node module at
// node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs/browser.js
// It replaces the string
//      "node: false"
//  with
//      "node: {crypto: true, stream: true, fs: 'empty'}"
// Fix found at https://gist.github.com/niespodd/1fa82da6f8c901d1c33d2fcbb762947d
const fs = require('fs');
const f = 'node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs/browser.js';

fs.readFile(f, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/node: false/g, 'node: {crypto: true, stream: true}');

  fs.writeFile(f, result, 'utf8', function (err) {
    if (err) return console.log(err);
    else console.log("applied web3 crypto patch");
  });
});