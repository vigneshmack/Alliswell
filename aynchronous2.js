var ws=require("fs");
ws.readFile("dubakoor.txt",function(a,b)
{
    if(a)
    {
        console.log("Error occured during read the file");
    }
    else
    {
        console.log(b.toString());
    }
});
