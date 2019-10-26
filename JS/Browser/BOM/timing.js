// setTimeout();



// setTimeout(function() {
//     console.log('After Two Second');
// }, 2000);

var counter = 1;

var id = setInterval(function(){
    if(counter == 5) {
        clearInterval(id);
    }
    console.log('Every Second');
    counter++;
}, 3000);

console.log('Interval Id',id);