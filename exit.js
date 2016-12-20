var viki=function abc()
{
    console.log("vikivino");
    setTimeout(ranjith,60000);
    function ranjith()
    {
        console.log("This statement will not execute");
    }
    console.log("hai");
}
process.on("exit",viki);
console.log("program finished");