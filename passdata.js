var fs=require("fs");
fs.createReadStream("plain.txt").pipe(fs.createWriteStream("ou.txt"));