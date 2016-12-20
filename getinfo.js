var cc=require("fs");
console.log("Now we are going to get the file information");
cc.stat("sura.txt",function(x,y)
{
    if(x)
    {
        console.log("Errors occured");
    }
    else if(y)
    {
        console.log("Information about the file:");
        console.log(y);
        console.log("we can check the file information");
        console.log("File:"+ y.isFile());
        console.log("Directory:"+ y.isDirectory());
        console.log("Block device:"+ y.isBlockDevice());
        console.log("character device:"+ y.isCharacterDevice());
    }
});