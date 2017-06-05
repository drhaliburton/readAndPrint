
var https = require('https');



  /* Add your code here */
function getAndPrintHTMLChunks (options) {

  https.get(options, function (response) {

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

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

getAndPrintHTMLChunks(requestOptions);
