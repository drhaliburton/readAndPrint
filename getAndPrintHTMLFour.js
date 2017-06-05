
var https = require('https');

function getHTML (options, callback) {

  https.get(options, function (response) {
    response.setEncoding('utf8');

    var dataResult = "";
    response.on('data', function (data) {
        for (var i = 0; i < data.length; i++) {
          dataResult += data[i];
        }
      });
    response.on('end', function() {
      callback(dataResult);
    });
  });
}


function printHTML (html) {
  console.log(html);
}



var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

getHTML(requestOptions, printHTML);
