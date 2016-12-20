var see=require("net");
function bussinessman(a)
{
    console.log("server connected to client");
   function abc(x)
   {
       console.log("DATA FROM CLIENT:"+x);
       a.write(x);
   }
    a.on("data",abc);
    var cde=function vbn()
    {
        console.log("client connection is closed");
    }
    a.on("end",cde);
}
see.createServer(bussinessman).listen(8086,"127.0.0.1");