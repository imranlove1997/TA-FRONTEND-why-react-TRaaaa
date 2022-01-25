let input = document.getElementById('name');
let ul = document.querySelector('.root');

let moviesArr = [];

input.addEventListener('keyup', (event) => {
    if(event.keyCode === 13) {
        moviesArr.push({
            name: event.target.value,
            watched: false,
        });
        event.target.value = '';
        handleUI(moviesArr, ul);
    }
})

function handleChange(event) {
    let id = event.target.id;
    moviesArr[id].watched = !moviesArr[id].watched;
    handleUI(moviesArr, ul);
}

function elm(type, attr={}, ...children) {
    let element = document.createElement(type);
    // for(let key in attr) {
    //     if(key,startsWith('data-')) {
    //         element.setAttribute(key, attr[key]);
    //     } else {
    //         element[key] = attr[key];
    //     }
    // }
    children.forEach((child) => {
        if (typeof child === 'object') {
            element.append(child);
        }
        if(typeof child === 'string') {
            let node = document.createTextNode(child);
            element.append(child);
        }
    })
    return element;
}

function handleUI(data, root) {
   let movieData = data.map((movie, i) => {
       let li = React.createElement('li', {}, movie.name, React.createElement('button', {
           id: i,
           onClick: handleChange
       }, movie.watched ? 'watched' : 'To Watched'));
        // ul.append(li);
        return li;
    });
    ReactDOM.render(movieData, ul);
}


handleUI(moviesArr, ul);