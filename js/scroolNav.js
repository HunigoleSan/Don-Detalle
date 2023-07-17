let vinetaHtml = document.getElementById("vineta");
let vineta_mobile_HTML = document.getElementById("vineta_mobile");
let catalogoHtml = document.getElementById("catalogo");
let iconos_redes_sociales_HTML = document.querySelectorAll(".icon");
console.log(iconos_redes_sociales_HTML.item);

function moverNavScroll() {
  let scrollTop = document.documentElement.scrollTop;
  
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
        iconos_redes_sociales_HTML[i].classList.remove("icon_transform_desktop");
      }, 500);
    }
  }

  if (scrollTop > 900) {
    vineta_mobile_HTML.classList.remove("nav__bottom_mobile_top");
    vineta_mobile_HTML.classList.add("nav__bottom_mobile");
    console.log(vineta_mobile_HTML)
  } else {
    vineta_mobile_HTML.classList.remove("nav__bottom_mobile");
    vineta_mobile_HTML.classList.add("nav__bottom_mobile_top");
  }

}

window.addEventListener("scroll", moverNavScroll);