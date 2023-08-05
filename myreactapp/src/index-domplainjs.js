//dom element creation using javascript

function createElement() {
    const Heading = document.createElement('h1')
    Heading.innerHTML='Hello,DOM'
    Heading.style.backgroundColor = 'pink'
    //we need to get element where to insert
    document.getElementById('root').appendChild(Heading)
}
createElement()