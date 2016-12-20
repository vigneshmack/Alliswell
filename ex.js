var hh=require("http");
i=0;
hh.createServer(function (j1,j2)
{

    j2.writeHead(200,{"Content-Type":"text/plain"});
    j2.write("USER VIEW:"+ ++i);
    j2.write("\n");
    j2.end();
}).listen(8086,"127.0.0.1");
console.log("viki dai");