var h=require("http");
var f=require("fs");
var u=require("url");
function classmass(c1,c2)
{
    var fn=u.parse(c1.url).pathname;
    console.log("Filename " +fn+ " received");
    f.readFile(fn.substr(1),function(a,b)
    {
        if(a)
        {
            c2.writeHead(404,{"Content-Type" :"text/plain"});
            c2.write("page not found");
        }
        else
        {
            console.log("Page found");
            c2.writeHead(200,{"Content-Type" :"text/plain"});
            c2.write(b.toString());
        }
        c2.end();
    });
}
h.createServer(classmass).listen(8086,"127.0.0.1");
console.log("program ended");