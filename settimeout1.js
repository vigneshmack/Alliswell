process.on("beforeExit",function()
{
    var es=require("events");
    var em=new es.EventEmitter();
    var li1=function abc()
    {
        console.log("listener1 executed");
    }
    em.on("bubblu",li1);
    var li2=function cde()
    {
        console.log("listener2 is executed");
    }
    em.addListener("bubblu",li2);
    em.emit("bubblu");
    var lc=require("events").EventEmitter.listenerCount(em,"bubblu");
    console.log("No of listeners presented in the event now:"+lc);
    em.removeListener("bubblu",li1);
    console.log("Remove the listener1");
    var lc1=require("events").EventEmitter.listenerCount(em,"bubblu");
    console.log("No of listener presented in the event now:"+lc1);
    em.emit("bubblu");
    console.log("give respect to elders");
});