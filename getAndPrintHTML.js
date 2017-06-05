
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
      var dataResult = "";
      for (var i = 0; i < data.length; i++) {
        dataResult += data[i];
      }
      console.log(dataResult);
    });

  });
}

getAndPrintHTMLChunks();
