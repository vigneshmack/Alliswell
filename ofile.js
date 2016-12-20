var x=require("fs");
console.log("Now I am going to open a file");
x.open("sura.txt","r+",function(a,b)
{
    if(a)
    {
        console.log("Error occurs");
    }
    else
    {
        console.log("File opened successfully");
    }
});
console.log("I completed the program");