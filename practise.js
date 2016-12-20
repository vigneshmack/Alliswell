var ed=require("fs");
var ee=require("zlib");
var aa=ed.createReadStream("in.txt");
var bb=ed.createWriteStream("in.txt.gz");
aa.pipe(ee.createGzip()).bb