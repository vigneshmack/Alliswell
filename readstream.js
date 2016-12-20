var rfs=require("fs");
var rs=rfs.createReadStream("trustme.txt");
rs.setEncoding("utf-8");
var dat="";
var viki=function(chunk)
{
    dat+=chunk;
}
rs.on("data",viki);
var vino=function()
{
    console.log(dat.toString("ucs-32"));
}
rs.on("end",vino);
var waseem=function()
{
    console.log("Error ocuured when read the file");
}
rs.on("error",waseem);
console.log("program ended");