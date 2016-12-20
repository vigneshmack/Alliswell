var fg=require("fs");
var rs=fg.createReadStream("eventloop.js");
var ws=fg.createWriteStream("eventloop2.js");
rs.pipe(ws);
console.log("program ended");