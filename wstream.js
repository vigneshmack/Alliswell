var u=require("fs");
var tt="thirupachi movie casted : vijay,trisha,pasupathi, this movie was commercial hit based on sister centiment";
var cc=u.createWriteStream("thirupatchi.txt");
cc.write(tt,"utf-8");
var fh=function()
{
    console.log("data is written into the file");
}
cc.on("finish",fh);
var er=function()
{
    console.log("Error occured");
}
cc.on("error",er);
console.log("program finished");