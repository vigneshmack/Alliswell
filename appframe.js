var express=require("express");
var app=express();
app.get("/",function(request,response)
{
    console.log("I got the request");
    response.send("so, I respond to normal request");
});
app.get("/hello",function(request,response)
{
    console.log("I got hello request");
    response.send("so, i respond to hello request");
});
var server=app.listen(8086,function()
{
    var port= server.address().port;
    console.log("server listening at:"+port);
});