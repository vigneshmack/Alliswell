var fa=require("fs");
console.log("file is going to open");
function viki(err,dd)
{
    if(err)
    {
        console.log("Error occured");
    }
    else
    {
        console.log("file opened successfully");
    }
}
fa.open("theri.txt","r+",viki);
