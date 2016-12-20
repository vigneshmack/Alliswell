var ee=require("events");
var em=new ee.EventEmitter();
var listener2=function lincy()
{
    console.log("lincy (listener2) executed");
}
var listener1=function princy()
{
    console.log("princy (listener1) executed");
}
em.addListener("bvmachi",listener1);
em.on("bvmachi",listener2);
em.emit("bvmachi");
var nooflistener=require("events").EventEmitter.listenerCount(em,"bvmachi");
console.log("NO OF LISTENERS PRESENTED IN EVENT NOW:"+nooflistener);
em.removeListener("bvmachi",listener2);
console.log("listener2 not executed now");
em.emit("bvmachi");
var nooflisteners=require("events").EventEmitter.listenerCount(em,"bvmachi");
console.log("NO OF LISTENERS PRESENTED IN EVENT NOW:"+nooflisteners);