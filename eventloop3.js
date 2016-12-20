var ex=require("events");
var ems=new ex.EventEmitter();
var abc=function princy()
{
    console.log("event handler1 is executed");
}
ems.on("ranjith",abc);
ems.emit("ranjith");
var els=require("events").EventEmitter.listenerCount(ems,"ranjith");
console.log(els);
ems.on("ranjith",function()
{
    console.log("event handler2 is executed");
});
ems.emit("ranjith");
var els1=require("events").EventEmitter.listenerCount(ems,"ranjith");
console.log(els1);