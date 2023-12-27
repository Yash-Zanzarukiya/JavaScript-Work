const body = document.querySelector('body')
const boxes = document.querySelectorAll('span')

boxes.forEach(function (item) {

    item.addEventListener('click', function (eventObj) {
        
        if (eventObj.target.id === 'red') {
            body.style.backgroundColor = 'red'
        }
        if (eventObj.target.id === 'blue') {
            body.style.backgroundColor = 'blue'
        }
        if (eventObj.target.id === 'green') {
            body.style.backgroundColor = 'green'
        }
        if (eventObj.target.id === 'grey') {
            body.style.backgroundColor = 'grey'
        }
    })

})