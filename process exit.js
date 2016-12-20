var x=require("events");
process.on("beforeExit",function()
{
    function ranjithprincy()
    {
        console.log("Ranjith loves princy and lincy");
    }
    setTimeout(ranjithprincy,0);
    var xx=new x.EventEmitter();
    var deva=function rasigan()
    {
        console.log("listener 1 is executed");
    }
    xx.on("viki",deva);
    function lovetoday()
    {
        console.log("listener 2 is executed");
    }
    xx.on("viki",lovetoday);
    xx.emit("viki");
    var ex= require("events").EventEmitter.listenerCount(xx,"viki");
    console.log("No of listener in events:"+ex);
    xx.removeListener("viki",deva);
    var ex= require("events").EventEmitter.listenerCount(xx,"viki");
    console.log("After remove the listeners no of listener in events:"+ex);
});