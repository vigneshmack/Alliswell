process.stdin.setEncoding("ascii");
function ranjith()
{
    var xx=process.stdin.read();
    if(xx!=null)
    {
        process.stdout.write(xx);
    }
}
process.stdin.on("readable",ranjith);
var viki=function cvb()
{
    process.stdout.write("end");
}
process.stdin.on("end",viki);
