let vinetaHtml = document.getElementById("vineta");
let catalogoHtml = document.getElementById("catalogo");
let iconos_redes_sociales_HTML = document.querySelectorAll(".icon");
console.log(iconos_redes_sociales_HTML.item);

function moverNavScroll() {
  let scrollTop = document.documentElement.scrollTop;
  console.log(document.documentElement.scrollHeight);
  if (scrollTop > 900) {
    vinetaHtml.classList.add("nav__bottom");
    for (let i = 0; i < iconos_redes_sociales_HTML.length; i++) {
      setTimeout(function () {
        iconos_redes_sociales_HTML[i].classList.add("icon_transform_desktop");
      }, 500);
    }
  } else {
    vinetaHtml.classList.remove("nav__bottom");
    for (let i = 0; i < iconos_redes_sociales_HTML.length; i++) {
      setTimeout(function () {
        iconos_redes_sociales_HTML[i].classList.remove(
          "icon_transform_desktop"
        );
      }, 500);
    }
  }
}
/* let anchoPantala = 0;
function vinetaMobileDisplay(){
    if(anchoPantala <= 414){

    }
}
window.addEventListener("resize", function () {
  anchoPantala = window.innerWidth;
  console.log(anchoPantala);
});

 */
window.addEventListener("scroll", moverNavScroll);