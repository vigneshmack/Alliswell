var str="TEST";
var n=str.length;
var ba=new Buffer(n);
ba.write(str,0,n);
console.log(ba.toJSON());