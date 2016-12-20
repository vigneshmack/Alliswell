var w=require("events");
var t=new w.EventEmitter();
var abc=function ght()
{
    console.log("puyal comes from puzhuthi");
}
t.once("puyal",abc);
function kuruvi()
{
    console.log("Kuruvi movie released at 2008");
}
t.on("puyal",kuruvi);
t.emit("puyal");