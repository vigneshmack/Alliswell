var a=require("http");
x=0;
a.createServer(function(a1,a2)
{
    a2.writeHead(200,"{Content-Type:text/plain}");
    a2.write("user visits the server" + ++x +" time(s)");
    console.log("connection");
    a2.end();
}).listen(8086,"127.0.0.1");
console.log("Server started");