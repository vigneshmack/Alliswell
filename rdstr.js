var rr=require("fs");
var ws=rr.createReadStream("in.txt");
var co="";
ws.setEncoding("utf-8");
ws.on("data",function(chunk)
{
    co+=chunk;
});
ws.on("end",function()
{
    console.log(co.toString());
});
ws.on("error",function()
{
    console.log("Error occured");
});