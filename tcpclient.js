var cc=require("net");
var cli=new cc.Socket();
function maheshbabu()
{
    console.log("client connected to server");
}
cli.connect("8086","127.0.0.1",maheshbabu);
process.stdin.resume();
function y(maa)
{
   cli.write(maa);
}
process.stdin.on("data",y);
var cde=function(z)
{
    console.log("DATA FROM SERVER:"+z);
}
cli.on("data",cde);
cli.on("end",function()
{
    console.log("connection is closed");
})