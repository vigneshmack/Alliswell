var dd=require("fs");
var b=new Buffer(1024);
dd.open("ou.txt","r+",function(err,az)
{
    if(err)
    {
        console.log("Error occured during open the file");
    }
    console.log("File opened successfully");
    dd.ftruncate(az,10,function(e)
    {
           if(e)
           {
               console.log("Error occured during truncate the file");
           }
        console.log("10 bytes truncated successfully");
        dd.read(az,b,0,b.length,0,function(e,tt)
        {
            if(e)
            {
                console.log("Error occured during read the file");
            }
            console.log(tt.toString());
            dd.close(az,function(ee)
            {
                if(ee)
                {
                    console.log("Error occured during close the file");
                }
                console.log("File closed successfully");
            });
        });
    });
});