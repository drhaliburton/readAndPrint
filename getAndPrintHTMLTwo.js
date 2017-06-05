
var https = require('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Add your code here */
function getAndPrintHTMLChunks () {

  https.get(requestOptions, function (response) {

    response.setEncoding('utf8');
    response.on('data', function (data) {
      console.log('Chunk:', data + '\n');
    });

  });
}



getAndPrintHTMLChunks();
