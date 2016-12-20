var ii=require("net");
ii.createServer(function(ss)
{
    console.log("server connected to client");
    function ghilli(z)
    {
        console.log("DATA FROM CLIENT:"+z);
    }
    ss.on("data",ghilli);
    process.stdin.resume();
    var massage=function chellam(zz)
    {
        ss.write(zz);
    }
    process.stdin.on("data",massage);
    ss.on("end",function()
    {
        console.log("server connection is closed");
    });
}).listen(8086,"127.0.0.1");