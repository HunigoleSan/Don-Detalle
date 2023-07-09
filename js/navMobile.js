const menuPrincipalHtml = document.getElementById("menuPrincipal")
const navMobileCerrarHtml = document.getElementById("navMobileCerrar")
const navMobileAbrirHtml = document.getElementById("navMobileAbrir")
const contenedorNavHtml = document.getElementById("contenedorNav")
const navegacionHtml = document.getElementById("navegacion")
const categoriaNavhtml = document.querySelectorAll(".categoria")
navMobileAbrirHtml.addEventListener('click',function(){
    navMobileAbrirHtml.style.display="none"
    navMobileCerrarHtml.style.display='flex';
    contenedorNavHtml.classList.add('nav_change')
    navegacionHtml.classList.add('categoria__ul_mobile')
    

})
navMobileCerrarHtml.addEventListener('click',function(){

    navMobileAbrirHtml.style.display="flex"
    navMobileCerrarHtml.style.display="none"
    menuPrincipalHtml.style.overflow = 'inherit';
    contenedorNavHtml.classList.remove('nav_change')
    navegacionHtml.classList.remove('categoria__ul_mobile')

})
function cerrarNavPorCategoria(){
    categoriaNavhtml.forEach(function(currentValue, index,  array){
        currentValue.addEventListener('click', function () {
            navMobileAbrirHtml.style.display="flex"
            navMobileCerrarHtml.style.display="none"
            menuPrincipalHtml.style.overflow = 'inherit';
            contenedorNavHtml.classList.remove('nav_change')
            navegacionHtml.classList.remove('categoria__ul_mobile')
        });
    })
    
}
cerrarNavPorCategoria()