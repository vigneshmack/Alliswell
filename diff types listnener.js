var ee=require("events");
var en=new ee.EventEmitter();
var vijay=function()
{
    console.log("vijay is executed");
}
en.addListener("kushi",vijay);
en.addListener("kushi",function()
{
    console.log("bind the event with anonymous function");
});
function pawankalyan()
{
    console.log("pawan kalyan executed");
}
en.addListener("kushi",pawankalyan);
en.emit("kushi");
var ed=require("events").EventEmitter.listenerCount(en,"kushi");
console.log("No of events presented in the event:",ed);