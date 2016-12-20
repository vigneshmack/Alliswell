var i=require("http");
i.createServer(activity).listen(8086,"127.0.0.1");
function activity(r1,r2)
{
    r2.writeHead(200,{'Content-Type':'plain/text'});
    r2.write("Don't trouble others until others troubles you\n");
    r2.end("server program ended\n");
}
console.log("This statement is printed as client side(console)");