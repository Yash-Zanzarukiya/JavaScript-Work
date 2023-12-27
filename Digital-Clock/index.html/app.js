const clock = document.querySelector('.clock')

setInterval((params) => {
    let time = new Date();
    clock.innerHTML=time.toLocaleTimeString();
    
},1000)