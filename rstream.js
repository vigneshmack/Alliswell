var d=require("fs");
var ss=d.createReadStream("sivakasi.txt");
ss.setEncoding("utf-8");
var s="";
var da=function(chunk)
{
    s+=chunk;
}
ss.on("data",da);
var en=function()
{
    console.log(s);
}
ss.on("end",en);
var ee=function()
{
    console.log("Error");
}
ss.on("error",ee);
console.log("program finished");