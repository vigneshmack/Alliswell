var w=require("http");
var q=require("fs");
function theri(c,d)
{
    d.writeHead(200, {"Content-Type":"text/plain"});
    var vv=q.readFileSync("sivakasi.txt");
    d.write(vv.toString());
    d.end();

}
w.createServer(theri).listen(8086,"127.0.0.1");
console.log("Now file is going to be read in synchronous manner");