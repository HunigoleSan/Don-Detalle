let vinetaHtml = document.getElementById("vineta");
let vineta_mobile_HTML = document.getElementById("vineta_mobile");
let catalogoHtml = document.getElementById("catalogo");
let iconos_redes_sociales_HTML = document.querySelectorAll(".icon");

let statusNav = false
function moverNavScroll() {
  let scrollTop = document.documentElement.scrollTop;
  if (statusNav == false) {
    if (scrollTop > 900) {
      vinetaHtml.classList.add("nav__bottom");
      for (let i = 0; i < iconos_redes_sociales_HTML.length; i++) {
        setTimeout(function () {
          iconos_redes_sociales_HTML[i].classList.add("icon_transform_desktop");
        }, 500);
      }
      vineta_mobile_HTML.classList.remove("nav__bottom_mobile_top");
      vineta_mobile_HTML.classList.add("nav__bottom_mobile");
      statusNav = true
    } else if(scrollTop < 900){

      vinetaHtml.classList.remove("nav__bottom");
      for (let i = 0; i < iconos_redes_sociales_HTML.length; i++) {
        setTimeout(function () {
          iconos_redes_sociales_HTML[i].classList.remove("icon_transform_desktop");
        }, 500);
      }
      statusNav = false
      vineta_mobile_HTML.classList.remove("nav__bottom_mobile");
      vineta_mobile_HTML.classList.add("nav__bottom_mobile_top");
    
    }
  }else{
    statusNav = false
  }


}

window.addEventListener("scroll", moverNavScroll);