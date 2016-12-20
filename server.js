var http=require("http");
http.createServer(function(request,response)
{
    response.writeHead(200, {"Content-Type":"text/plain"});
    response.write("hello Ya it's me viki");
    response.end();
}).listen(8086,"127.0.0.1");
console.log("program ended");