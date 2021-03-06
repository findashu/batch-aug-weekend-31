let xhr = new XMLHttpRequest();


function handleData() {
    console.log(xhr)

    if(xhr.readyState < 4) {
        return;
    }

    if(xhr.status != 200) {
        return;
    }

    console.log(JSON.parse(xhr.responseText));

    let dt = JSON.parse(xhr.responseText)

    let h1 = document.createElement('h1');
    h1.innerText = `User Id : ${dt.userId}`
    let p = document.createElement('p');
    p.innerText = `Title : ${dt.title}`

    document.body.appendChild(h1);
    document.body.appendChild(p);
}


xhr.onreadystatechange = handleData;


xhr.open('GET', 'https:/jsonplaceholder.typicode.com/todos/1', true);

xhr.send('');