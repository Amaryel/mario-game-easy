const mario = document.querySelector('.mario')

function jump() {  
    mario.classList.add('jump')
    setTimeout(() =>{
        mario.classList.remove('jump');
    }, 700)
}

document.addEventListener('keydown', jump)