var h=require("http");
var p=0;
function ranjithprincy(c1,c2)
{
    c2.writeHead(200,"{content-type:Text/Plain}");
    c2.write("slow and steady wins the race\n");
    c2.write("user views the browser "+ ++p +" time(s)");
    console.log("today i don't know ANYTHING but oneday i will do SOMETHING that day you will say NOTHING");
    c2.end();
}
h.createServer(ranjithprincy).listen(8086,"127.0.0.1");