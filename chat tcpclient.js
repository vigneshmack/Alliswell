var cv=require("net");
var cc=new cv.Socket();
cc.connect("8086","127.0.0.1",function()
{
    console.log("client connected to server");
});
process.stdin.resume();
var arm=function armstrong(xx)
{
    cc.write(xx);
}
process.stdin.on("data",arm);
function anagram(yy)
{
    console.log("DATA FROM SERVER:"+yy);
}
cc.on("data",anagram);
cc.on("end",function()
{
    console.log("client connection is closed");
});
