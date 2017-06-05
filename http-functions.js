var getHTML = require('./getAndPrintHTMLFour');

function printHTML (html) {
  console.log(html);
}


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};


getHTML(requestOptions, printHTML);
