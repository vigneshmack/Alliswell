var a=require("fs");
var b=require("http");
var c=require("url");
function thuppaki(y,z)
{
    var n=c.parse(y.url).pathname;
    console.log(n+" received");
    a.readFile(n.substr(1),function(k,l)
    {
        if(k)
        {
            z.writeHead(404,{"Content-Type":"text/plain"});
            z.write("Page not found");
            z.end();
        }
        else
        {
            z.writeHead(200,{"Content-Type":"text/plain"});
            z.write(l.toString());
            z.end();
        }
    });
}
b.createServer(thuppaki).listen(8086,"127.0.0.1");
console.log("find the file name indirectly ,read the file in asynchronous manner");