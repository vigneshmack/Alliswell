var sz=require("fs");
console.log("Going to open a file");
sz.open("in.txt","r+",function(err,aa)
{
    if(err)
    {
        console.log("Error occured");
    }
    else
    {
        console.log("file opened sucessfully");
    }
    console.log("Going to read that openedfile");
    sz.readFile("in.txt",function(err,ss)
    {
        if(err)
        {
            console.log("Error occured");
        }
        else
        {
            console.log(ss.toString());
            console.log("Content length:"+ss.length);
            var n=ss.length;
            console.log("part:"+ss.slice(0,n).toString());
        }
    });
});