var fs=require("fs");
fs.readFile("dubakoor.txt",function(err,a)
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log(a.toString());
    }
});
console.log("program finished");