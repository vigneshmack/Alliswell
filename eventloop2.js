var bb=require("events");
var aa=new bb.EventEmitter();
var waseem=function leone()
{
    console.log("waseem weds leone");
}
aa.on("viki",waseem);
var vasanth=function topper()
{
    console.log("vasanth weds xyz");
}
aa.addListener("viki",vasanth);
function ranjith()
{
    console.log("Ranjith weds princy and lincy");
}
aa.on("viki",function()
{
    console.log("bv weds nivi");
});
aa.on("viki",ranjith);
aa.emit("viki");
var lis=require("events").EventEmitter.listenerCount(aa,"viki");
console.log("No of listener presented in the event:"+lis);
aa.removeListener("viki",vasanth);
var lis=require("events").EventEmitter.listenerCount(aa,"viki");
console.log("No of listener presented in the event after removing some listener:"+lis);
aa.emit("viki");