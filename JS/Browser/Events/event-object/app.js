let btn = document.querySelector('button');


btn.onclick = function(e) {

    console.log(e);

    console.log(e.target)

    console.log(this)

}

let anc = document.querySelector('a');


anc.onclick = function(e) {
    e.preventDefault();

    alert('Anchor Clicked');
}