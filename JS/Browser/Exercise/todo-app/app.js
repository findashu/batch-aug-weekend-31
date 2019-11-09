let inpt = document.querySelector('input');
let btn = document.querySelector('button');
let displayList = document.querySelector('#displayList');

let items = JSON.parse(localStorage.getItem('list')) || [];

function addTodoItem() {
    let value = inpt.value;
    let data = {
        value: value,
        checked: false
    }


    items.push(data);

    localStorage.setItem('list', JSON.stringify(items))

    renderList(items);
}


function renderList(list) {
   displayList.innerHTML =  list.map((ele,i) => {
        return `
            <li>
                <input type="checkbox" id="inpt${i}" ${ele.checked ? 'checked': ''} />
                <label>${ele.value}</label>
            </li>
        `
    }).join('')
}


let checkbx = document.querySelector('inpt');


renderList(items)


displayList.addEventListener('click', function(e) {
    console.log(this)
    console.log(e.target);
})

btn.addEventListener('click', addTodoItem)