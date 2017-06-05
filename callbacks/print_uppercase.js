var getHTML = require('../getAndPrintHTMLFour');

function printHTML (html) {
  var output = html.toUpperCase();
  console.log(output);
}


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};


getHTML(requestOptions, printHTML);
