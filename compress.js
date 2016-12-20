var fe=require("fs");
var z=require("zlib");
fe.createReadStream("trustme.txt").pipe(z.createGzip()).pipe(fe.createWriteStream("trustme.txt.gz"));
console.log("program ended");
