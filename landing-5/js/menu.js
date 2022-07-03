const hamburguer = document.querySelector(".hamburguer")
const menu =document.querySelector('.menu-navigation')

hamburguer.addEventListener('click',()=>{

    menu.classList.toggle('spread')
})

window.addEventListener('click',(event)=>{

    if ( menu.classList.contains('spread') && (event.target!=menu) && (event.target!=hamburguer) ){
        menu.classList.toggle('spread')
    }
})