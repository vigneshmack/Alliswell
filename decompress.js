var ff=require("fs");
var zz=require("zlib");
ff.createReadStream("trustme.txt.gz").pipe(zz.createGunzip()).pipe(ff.createWriteStream("trustme.txt"));
console.log("program ended");