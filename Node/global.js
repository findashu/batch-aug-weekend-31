// console.log(global);



process.title = "My Process";

console.log(process)

console.log(process.platform);

console.log(process.pid);

console.log(process.cwd())


console.log(process.cpuUsage());


process.on('exit', function() {
    console.log('About to end the process')
});


process.on('uncaughtException', function() {
    console.log('Something went wrong')
});


console.log('Directory Name ',__dirname);

console.log('File Name', __filename);



console.log(module);


// Time functions

