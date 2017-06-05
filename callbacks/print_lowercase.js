var getHTML = require('../getAndPrintHTMLFour');

function printHTML (html) {
  var output = html.toLowerCase();
  console.log(output);
}


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};


getHTML(requestOptions, printHTML);
