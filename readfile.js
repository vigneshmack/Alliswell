var a=require("fs");
var z=new Buffer(1024);
a.open("trustme.txt","r+",function(x,y)
{
    if(x)
    {
        console.log("Error ocurred");
    }
        console.log("file opened successfully");
        a.read(y,z,0,z.length,5,function(r,t)
        {
           if(r)
           {
               console.log("Error occured during read the file.");
           }
            console.log(t + "bytes");
            if(t>0)
            {
                  console.log(z.slice(0,t).toString());
            }
            else
            {
                console.log("No bytes are there");
            }
        });
});