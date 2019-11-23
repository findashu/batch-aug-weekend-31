setTimeout(function() {
    console.log('Time out function')
}, 0);

var counter = 1

setInterval(function() {
    console.log('Interval Function');

    if(counter == 5) {
        clearInterval(this);
    }
    counter++;
},1000)


// setImmediate


setImmediate(function() {
    console.log('Immediate Execution')
})
