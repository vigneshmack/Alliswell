var e=require("fs");
var q=e.createReadStream("sura.txt");
var w=e.createWriteStream("trustme.txt");
q.pipe(w);