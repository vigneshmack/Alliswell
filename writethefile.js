var zc=require("fs");
console.log("Going to write a file");
zc.writeFile("theri.txt","Nothing is impossible",function(err,aa)
{
    if(err)
    {
        console.log("Error occured");
    }
    else
    {
        console.log("Data written successfully into the file");
    }
    console.log("Going to read the content whatever written into the file.");
    zc.readFile("theri.txt",function(err,ee)
    {
        if(err)
        {
            console.log("Error  occured.");
        }
        else
        {
            console.log(ee.toString());
        }
    });
});
