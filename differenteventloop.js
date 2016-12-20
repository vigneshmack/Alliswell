var ew=require("events");
var es=new ew.EventEmitter();
es.on("radha",function()
{
    console.log("event handler is executed");
});
es.emit("radha");