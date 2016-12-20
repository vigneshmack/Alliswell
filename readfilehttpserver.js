var hh=require("http");
var ff=require("fs");
var uu=require("url");
function inarugation(x1,x2)
{
    var ans=uu.parse(x1.url).pathname;
    ff.readFile(ans.substr(1),function(a,b)
    {
       if(a)
       {
           x2.writeHead(404,{"Content-Type":"text/html"});
           x2.write("Error occured during read the file");
           x2.end();
       }
        else
       {
           x2.writeHead(200,{"Content-Type":"text/html"});
           x2.write(b.toString());
           x2.end();
       }
    });
}
hh.createServer(inarugation).listen(8086,"127.0.0.1");
console.log("server connected");