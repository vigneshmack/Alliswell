var zx=require("dgram");
var ss=new zx.createSocket("udp4");
function wow(aa)
{
    console.log("DATA FROM CLIENT:"+aa);
}
ss.on("message",wow);
ss.bind("8086");