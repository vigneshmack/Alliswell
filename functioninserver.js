var z=require("http");
function vikiwaseem(d)
{
    var i,j;
    for(i=1,j=10;i<=10&&j>=1;i++,j--)
    {
     d.write("\n"+i);
        d.write("\t"+j);
    }
}
function red(c,d)
{
    d.writeHead(200,{"Content-Type":"text/plain"});
    vikiwaseem(d);
    d.end();
}
z.createServer(red).listen(8086,"127.0.0.1");