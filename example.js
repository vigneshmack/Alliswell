console.time("value");
var t=require("fs");
var v=new Buffer(1024);
console.info("Now I am going to open a file");
t.open("sivakasi.txt","r+",function(m,n)
{
    if(m)
    {
        console.error("Error occured during open the file");
    }
    else if(n)
    {
        console.info("File Opened Successfully");
        console.info("Now I am going to read the file");
        t.read(n,v,0,v.length,9,function(y,b)
        {
            if(y)
            {
                console.info("Error occured during read the file");
            }
            else if(b)
            {
                console.info(v.slice(0,b).toString());
                console.log("Bytes:"+b);
            }
        });
    }
});
var ee=require("events");
var en=new ee.EventEmitter();
var vijay=function()
{
    console.log("vijay is executed");
}
en.addListener("kushi",vijay);
en.addListener("kushi",function()
{
    console.info("bind the event with anonymous function");
});
function pawankalyan()
{
    console.log("pawan kalyan executed");
}
en.addListener("kushi",pawankalyan);
en.emit("kushi");
var ed=require("events").EventEmitter.listenerCount(en,"kushi");
console.log("No of events presented in the event:",ed);
console.timeEnd("value");
