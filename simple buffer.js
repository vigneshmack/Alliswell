console.log("print buffer object:");
var buf=new Buffer("abcdefghijklmnopqrstuvwxyz");
console.log(buf);
console.log("print whatever in the buffer (strings):");
var buf1=new Buffer("abcdefghijklmnopqrstuvwxyz");
console.log(buf1.toString());
console.log("print (ascii) whatever in the buffer:");
var b=new Buffer("abcdefghijklmnopqrstuvwxyz");
var t=0;
for(t=0;t< b.length;t++)
{
    console.log(b[t]);
}
console.log("print whatever in the buffer (numbers):");
var buf3 = new Buffer("100&*7(");
console.log(buf3.toString());
console.log("print (ascii) whatever in the buffer (numbers):");
var buf2 = new Buffer("100");
for(var i = 0; i < buf2.length; i++) {
    console.log(buf2[i]);
}
console.log("Intiating buffer");
var bc =new Buffer(1024);
console.log(bc[6]);
console.log("Buffer Array:");
var bb=new Buffer(["qa","vsdd","edfe","we","rer","crt"]);
var h;
for(h=0;h<bb.length;h++)
{
    console.log(bb[h]);
}
var cc=new Buffer("abcd");
console.log(cc.toJSON(cc));