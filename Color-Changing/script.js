let start = document.getElementById('start')
let stop = document.getElementById('stop')

const randomColor = function(){
    let hex = "0123456789ABCDEF"
    let color = '#'
    for (let index = 0; index < 6; index++) {
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
}

let changeBgColor;

start.addEventListener('click',(eventObj) => {
    if(!changeBgColor){
        
        changeBgColor = setInterval(function (){
            document.body.style.backgroundColor=randomColor();
        },750)
    }
})

stop.addEventListener('click',()=>{
    clearInterval(changeBgColor);
    changeBgColor= null;
})
