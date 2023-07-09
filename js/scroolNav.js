let vinetaHtml = document.getElementById("vineta")
let catalogoHtml = document.getElementById("catalogo")

function moverNavScroll(){
    let scrollTop = document.documentElement.scrollTop

    if(scrollTop  > 900){
        console.log("es menor")
        vinetaHtml.classList.add("nav__bottom")
        
    }else{
        vinetaHtml.classList.remove("nav__bottom")
    }
    
}
window.addEventListener('scroll',moverNavScroll)