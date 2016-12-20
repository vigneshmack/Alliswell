var q=require("fs");
var t=require("zlib");
q.createReadStream("sura.txt").pipe(t.createGzip()).pipe(q.createWriteStream("sura.txt.gz"))