var aa=require("dgram");
var client=new aa.createSocket("udp4");
process.stdin.resume();
var zz=function babullu(w)
{
    var t=w.toString("utf-8");
    client.send(t,0,t.length,"8086","127.0.0.1",function(a,b)
    {
        if(a)
        {
            console.log("Error occured while sending the data from client to server:");
        }
        else
        {
            console.log();
        }
    });
}
process.stdin.on("data",zz);
