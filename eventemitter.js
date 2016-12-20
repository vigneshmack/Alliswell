var ew=require("events");
var eq=new ew.EventEmitter();
var prove=function abc()
{
    console.log("listener1 is added");
}
eq.on("viki",prove);
var proof=function cde()
{
    console.log("listener2 is added");
}
eq.addListener("viki",proof);
eq.emit("viki");
var es=require("events").EventEmitter.listenerCount(eq,"viki");
console.log("No of events presented in the event now:"+es);
eq.removeListener("viki",prove);
var e2=require("events").EventEmitter.listenerCount(eq,"viki");
console.log("No of events presented  in the event now:"+e2);