// this keyword points to current object;
var a = 10;
console.log(this);


function add () {
    console.log(this);
}

// function call
add();


var obj = {
    name :'hello',
    desc : function() {
        console.log(this);
        function inner( ){
            console.log('inner ',this)
        }
        inner();
    },

    d: () => {
        
    }
}


// method call
obj.desc();
