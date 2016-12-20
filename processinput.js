process.stdin.on("data",function(a)
{
        if(a==10)
        {
           process.stdout.write("output:"+a);
        }

});
