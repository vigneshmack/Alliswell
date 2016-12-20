var http = require('http');
var fs = require('fs');
var i =0;
function onRequest(request,response){
    console.log("A user made a request"+request.url);
    response.writeHead(200,{"Context-Type":"text/plain"});
    response.write("a data is there"+i++);
    response.write("\n");
    response.end();
}
/*
fs.readFile('file1.txt',function(err ,data){
    if(err) Console.log("error");
    console.log(data.toString());
});*/

http.createServer(onRequest).listen(8086,"127.0.0.1");
console.log("Server is now running....");