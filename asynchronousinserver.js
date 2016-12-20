var a=require("http");
var b=require("fs");
function kushi(y,z)
{

    b.readFile("addremlistener.js",function(i,j)
    {
        if(i)
        {
            z.writeHead(404,{"Content-Type":"text/plain"});
            z.write("Error found");
            z.write("Could not be able to read the file");
        }
        else
        {
            z.writeHead(200,{"Content-Type":"text/plain"});
            z.write(j.toString());
        }
        z.end();
    });
}
a.createServer(kushi).listen(8086,"127.0.0.1");
console.log("File is going to be read in asynchronous manner");