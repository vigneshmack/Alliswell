var hh=require("http");
var op=function ranjithprincy()
{
    host:"localhost";
    port:"8086";
    path:"/sivakasi.txt";
}
var viki=function ranjithlincy(w2)
{
    var tt="";
    var abc=function bvn(dd)
    {
        tt+=dd;
    }
    w2.on("data",abc);
    var cde=function waseemleone()
    {
        console.log(tt.toString());
    }
    w2.on("end",cde);
}
var rq=hh.request(op,viki);
rq.end();
