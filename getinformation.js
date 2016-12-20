var cv=require("fs");
cv.stat("theri.txt",function(err,stats)
{
    if(err)
    {
        console.log("Error occured");
    }
    else
    {
        console.log("Information about file:");
        console.log(stats);
        console.log("ISFILE:"+stats.isFile());
        console.log("ISDIRECTORY:"+stats.isDirectory());
    }
});