let outer = document.querySelector('#outer');
let inner = document.querySelector('#inner');
let btn = document.querySelector('button');



outer.addEventListener('click', function(e) {
    //  e.stopPropagation()
    alert('Outer Clicked')
}, true);


inner.addEventListener('click', function(e) {
    //  e.stopPropagation()
    alert('Inner Div Clicked')
},true);

btn.addEventListener('click', function(e) {
    e.stopPropagation()
    alert('Button Clicked')
},false);