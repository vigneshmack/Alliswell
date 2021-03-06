console.log("platform:"+process.platform);
console.log("Execution path:"+process.execPath);
console.log("title:"+process.title);
const newmask = 60;
const oldmask = process.umask(newmask);
console.log("Changed umask from "+oldmask.toString(5)+" to "+ newmask.toString(5));
console.log("uptime:",process.uptime());
console.log("versions:",process.versions);
console.log("version:",process.version);
console.log("release:",process.release);
console.log("arch:"+process.arch);
console.log("cwd:"+process.cwd());
console.log("config",process.config);
console.log("connected:"+process.connected);
console.log("disconnect:"+process.disconnect);
console.log("ENV:",process.env);
