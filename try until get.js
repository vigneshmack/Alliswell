var a=require("http");
var b=a.createServer(procedure).listen(8086,"127.0.0.1");
function procedure(req,res)
{
    res.writeHead(200,{'Content-Type' : 'text/plain'});
    res.write("This statement displays at the server\n");
    console.log("This statement displays at the console\n");
    res.write("just i check\n");
    res.end("server program ended");
}
b.once('listening',function()
{
    console.log("client side");
});