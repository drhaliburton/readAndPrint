// while https is built-in to Node, it is a module, so it must be required
var https = require('https');

// the host can be thought of as the domain name you want to read from,
// and the path is the resource - '/' is the root path, but if you wanted to read a
// particular resource (like '/login/index.html'), that would be defined in the path

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
