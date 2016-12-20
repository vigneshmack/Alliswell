var wfs=require("fs");
var wws=wfs.createWriteStream("plain.txt");
var content="streams are objects read the data from source or write the data to destination.";
wws.write(content,"utf-8");
wws.on("finish",function()
{
    console.log("write completed");
});
wws.on("error",function()
{
    console.log("Error occured while writing the file");
});
console.log("program ended");
