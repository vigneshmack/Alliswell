var es=require("http");
es.createServer(function(j1,j2)
{
    j2.writeHead(200,{"Content-Type":"text/plain"});
    j2.write("Don't under estimate anyone\n");
    j2.write("Don't close your eyes until reach your goal");
    j2.end();
}).listen(8086,"127.0.0.1");
