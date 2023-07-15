import { objProductos } from "./productos.js";
const BISUTERIA_HTML = document.querySelectorAll('.bisuteria_js')
const ORIGAMI_HTML = document.querySelectorAll('.origami_js')
const ARREGLO_HTML = document.querySelectorAll('.arreglo_js')
const LLAVERO_HTML = document.querySelectorAll('.llavero_js')
/* console.log(PRODUCTOS_BISUTERIA_HTML) */
let body_HTML = document.getElementById("contenedorBody")
let contenedorImagen_JS = document.createElement('div')
let cerrarImagen_JS = document.createElement('span')
let contenedorProducto_JS = document.createElement('div')
let imagen_JS = document.createElement('img')
let listaCategoria = [];
contenedorImagen_JS.classList.add("contenedor_imagen_js")
cerrarImagen_JS.classList.add("cerrar_imagen_js")
cerrarImagen_JS.id = "cerrarImagen"
cerrarImagen_JS.textContent="Cerrar"
contenedorProducto_JS.classList.add("producto_imagen_js")

cerrarImagen()
agrandarImagenSeleccionadoBisuteria()
agrandarImagenSeleccionadoOrigami()
agrandarImagenSeleccionadoArreglos()
agrandarImagenSeleccionadoLlaveros()
function agrandarImagenSeleccionadoBisuteria(){
    BISUTERIA_HTML.forEach(function(currentValue, index,array){
        currentValue.addEventListener('click', function(){
            console.log(currentValue)
            for (let i = 0; i < objProductos.length; i++) {
                listaCategoria = objProductos[i]['bisuteria']
                if(objProductos[i].hasOwnProperty('bisuteria')) {
                    for (let producto in listaCategoria) {
                        let productos = listaCategoria[producto]
                        let idProducto = productos.id
                        if (idProducto === currentValue.id){
                            imagen_JS.src = `${productos.imagen}`
                            body_HTML.appendChild(contenedorImagen_JS)
                            contenedorImagen_JS.appendChild(cerrarImagen_JS)
                            contenedorImagen_JS.appendChild(contenedorProducto_JS)
                            contenedorProducto_JS.appendChild(imagen_JS)
                            /* body_HTML.style.overflow="hidden" */
                            console.log("si son iguales los id")
                        }
                    }
                }
            } 
        })
        
    })
}
function agrandarImagenSeleccionadoOrigami(){
    ORIGAMI_HTML.forEach(function(currentValue, index,array){
        currentValue.addEventListener('click', function(){
            for (let i = 0; i < objProductos.length; i++) {
                listaCategoria = objProductos[i]['origami']
                if(objProductos[i].hasOwnProperty('origami')) {
                    for (let producto in listaCategoria) {
                        let productos = listaCategoria[producto]
                        let idProducto = productos.id
                        if (idProducto === currentValue.id){
                            imagen_JS.src = `${productos.imagen}`
                            body_HTML.appendChild(contenedorImagen_JS)
                            contenedorImagen_JS.appendChild(cerrarImagen_JS)
                            contenedorImagen_JS.appendChild(contenedorProducto_JS)
                            contenedorProducto_JS.appendChild(imagen_JS)
                            /* body_HTML.scrollTop="1024px" */
                            /* body_HTML.style.overflow="hidden" */
                            console.log("si son iguales los id")
                        }
                    }
                }
            } 
        })
    })
}
function agrandarImagenSeleccionadoArreglos(){
    ARREGLO_HTML.forEach(function(currentValue, index,array){
        currentValue.addEventListener('click', function(){
            for (let i = 0; i < objProductos.length; i++) {
                listaCategoria = objProductos[i]['arreglo']
                if(objProductos[i].hasOwnProperty('arreglo')) {
                    for (let producto in listaCategoria) {
                        let productos = listaCategoria[producto]
                        let idProducto = productos.id
                        if (idProducto === currentValue.id){
                            imagen_JS.src = `${productos.imagen}`
                            body_HTML.appendChild(contenedorImagen_JS)
                            contenedorImagen_JS.appendChild(cerrarImagen_JS)
                            contenedorImagen_JS.appendChild(contenedorProducto_JS)
                            contenedorProducto_JS.appendChild(imagen_JS)

                            console.log("si son iguales los id")
                        }
                    }
                }
            } 
        })
    })
}
function agrandarImagenSeleccionadoLlaveros(){
    LLAVERO_HTML.forEach(function(currentValue, index,array){
        currentValue.addEventListener('click', function(){
            for (let i = 0; i < objProductos.length; i++) {
                listaCategoria = objProductos[i]['llavero']
                if(objProductos[i].hasOwnProperty('llavero')) {
                    for (let producto in listaCategoria) {
                        let productos = listaCategoria[producto]
                        let idProducto = productos.id
                        if (idProducto === currentValue.id){
                            imagen_JS.src = `${productos.imagen}`
                            body_HTML.appendChild(contenedorImagen_JS)
                            contenedorImagen_JS.appendChild(cerrarImagen_JS)
                            contenedorImagen_JS.appendChild(contenedorProducto_JS)
                            contenedorProducto_JS.appendChild(imagen_JS)

                            console.log("si son iguales los id")
                        }
                    }
                }
            } 
        })
    })
}

function cerrarImagen(){
    cerrarImagen_JS.addEventListener('click',function(){
        body_HTML.style.overflow="inherit"
        body_HTML.removeChild(contenedorImagen_JS)
    })
}
