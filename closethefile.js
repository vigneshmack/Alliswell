var es=require("fs");
console.log("Going to open the file");
es.open("ou.txt","r+",function(err,aa)
{
    if(err)
    {
        console.log("Error occured during open the file");
    }
    console.log("File opened successfully");
    es.readFile("ou.txt",function(err,ac)
    {
        if(err)
        {
            console.log("Error occured during read the file");
        }
        console.log(ac.toString());
        es.close("ou.txt",function(err)
        {
            if(err)
            {
                console.log("Error occured during close the file");
            }
            console.log("File closed successfully");
        });
    });
});