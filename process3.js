var hanji=function abc(a)
{
    console.warn(a.name);
    console.warn(a.message);
    console.warn(a.stack);
}
process.on("warning",hanji);