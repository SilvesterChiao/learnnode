var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){}).listen(3000);
console.log('http start');

var url = 'http://www.zhlzw.com/UploadFiles/Article_UploadFiles/201204/20120412123929822.jpg';
http.get(url, function(res){
  var imgData = '';

  res.setEncoding('binary');

  res.on('data', function(chunk){
    imgData += chunk;
  });

  res.on('end', function(){
    fs.writeFile('images/maasdf.jpg', imgData, 'binary', function(err){
      if(err){
        console.log('down fail');
      }

      console.log('down success');
    });
  });
});
