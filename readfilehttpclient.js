var hh=require("http");
function a()
{
    localhost:"8086";
    port:"127.0.0.1";
    path:"/ser.html";
}
var cc="";
function b(abc)
{
    abc.on("data",function(ss)
    {
        cc+=ss;
    });
    abc.on("end",function()
    {
        console.log(cc.toString());
    });
    abc.on("error",function()
    {
        console.log("Error occured");
    });

}
var bn=hh.request(a,b);
bn.end();