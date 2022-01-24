var input = document.querySelector('input');
let root = document.querySelector('.root');

let moviesArr = [
    // {
    //     name: 'Avengers',
    //     watched: false,
    // },
];

function handleUI() {
    root.innerHTML = '';
    moviesArr.forEach((element) => {
        let li = document.createElement('li');
        li.innerText = element.name;
        let label = document.createElement('label');
        label.innerText = element.watched;
        if(!element.watched) {
            label.innerText = 'watched';
        } else {
            label.innerText = 'not watched'
        }
        let checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.checked = element.watched;
        checkBox.addEventListener('click', (event) => {
            checkboxHandle(event);
        });
        label.append(checkBox);
        li.append(label);
        root.append(li);
        console.log(root);
    })   
}

function checkboxHandle(event) {
    console.dir(event.target);
    
}

function handleEvent(event) {
    event.preventDefault();
    console.log(event.keyCode);
    if(event.keyCode === 13) {
        let data = {
            name: event.target.value,
            watched: false,
        };
        event.target.value = '';
        moviesArr.push(data);
        handleUI();
    }
}

input.addEventListener('keyup', (event) => {
    handleEvent(event);
})

handleUI();