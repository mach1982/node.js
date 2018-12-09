var http = require('http');


http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");


 var x;
var spawn = require('child_process').spawn,
    ls    = spawn('halt', ['-p'],[0]);

ls.stdout.on('data', function (data) {
 console.log('stdout: ' + data);




});

ls.stderr.on('data', function (data) {
  console.log('stderr: ' + data);
});




response.end();
}).listen(9999);



