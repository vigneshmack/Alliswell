var tfs=require("fs");
var rrs=tfs.createReadStream("trustme.txt");
rrs.setEncoding("utf-8");
var s="";
rrs.on("data",function(chunk)
{
    s+=chunk;
});
rrs.on("end",function()
{
    console.log(s.toString());
});
rrs.on("error",function()
{
    console.log("Error occured during read file");
});
console.log("program ended");