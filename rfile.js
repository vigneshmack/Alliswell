var q=require("fs");
q.readFile("sivakasi.txt",function(a,v)
{
   if(a)
   {
       console.log("Error occured");
   }
    else if(v)
   {
       console.log(v.toString());
       console.log(v.length);
   }
});
var t="Success and failure is not permanent hardwork is permanent";
q.writeFile("dubakoor.txt",t,function(x,y)
{
    if(x)
    {
        console.log("Error occured");
    }
    else if(y)
    {
        console.log("Data written into the file successfully");
    }
});