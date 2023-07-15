import { objProductos } from "./productos.js";
    
const PRODUTCOS_HTML = document.getElementById("productos")
const categoriaHtml = document.querySelectorAll(".categoria")
const bisuteriaHtml = document.getElementById("bisuteriaHtml")
const origamiHtml = document.getElementById("origamiHtml")
const arregloHtml = document.getElementById("arregloHtml")
const llaveroHtml = document.getElementById("llaveroHtml")
const floresEternasHtml = document.getElementById("floresEternasHtml")
const PRODUCTOS_BISUTERIA_HTML = document.querySelectorAll('.productos_bisuteria')
let categoria = "";

mostrarProductoCategoria()
function mostrarProductoCategoria() {
    categoriaHtml.forEach(function (currentValue, index, array) {
        /* console.log(currentValue) */
        currentValue.addEventListener('click', function () {
            categoria = currentValue.classList[1]
            /* console.log(categoria) */
            if (categoria === 'bisuteria') {
                /* console.log("bisuteria") */
                bisuteriaHtml.style.display = 'grid';
                origamiHtml.style.display = "none";
                arregloHtml.style.display = "none";
                llaveroHtml.style.display = "none";
                floresEternasHtml.style.display = "none";
            } else if (categoria === 'origami') {
                /* console.log("origami") */
                bisuteriaHtml.style.display = "none";
                origamiHtml.style.display = 'grid';
                arregloHtml.style.display = "none";
                llaveroHtml.style.display = "none";
                floresEternasHtml.style.display = "none";
            } else if (categoria === 'arreglo') {
                console.log("arreglo")
                arregloHtml.style.display = "grid";
                origamiHtml.style.display = "none";
                bisuteriaHtml.style.display = "none";
                llaveroHtml.style.display = "none";
                floresEternasHtml.style.display = "none";
            } else if (categoria === 'llavero') {
                console.log("Llavero")
                llaveroHtml.style.display = "grid";
                arregloHtml.style.display = "none";
                origamiHtml.style.display = "none";
                bisuteriaHtml.style.display = "none";
                floresEternasHtml.style.display = "none";

            } else if (categoria === 'floresEternas') {
                console.log("Flores Eternas")
                floresEternasHtml.style.display = "grid";
                llaveroHtml.style.display = "none";
                arregloHtml.style.display = "none";
                origamiHtml.style.display = "none";
                bisuteriaHtml.style.display = "none";
                
                
            }  else {
                bisuteriaHtml.style.display = 'grid';
                origamiHtml.style.display = 'grid';
                arregloHtml.style.display = "grid";
                llaveroHtml.style.display = "grid";
                floresEternasHtml.style.display = "none";
                /* console.log("Imprimir todos los productos") */
            }

        });

    });
}

function imprimirProductos() {
    
    let bisuteria = 'bisuteria';
    let origami = 'origami';
    let arreglo = 'arreglo';
    let llavero = 'llavero';
    let floresEternas = 'floresEternas';
    let listaCategoria = []
    

     for (let i = 0; i < objProductos.length; i++) {
        listaCategoria = objProductos[i][bisuteria]
        if(objProductos[i].hasOwnProperty(bisuteria)) {
            for (let producto in listaCategoria) {
                let productos = listaCategoria[producto]
                let cartaJS = `<div class="carta productos_bisuteria" style='background-color:${productos.color};'">
                            <img id="${productos.id}" class="bisuteria_js" src="${productos.imagen}" alt="${productos.alt}">
                            <p class="nombre">${productos.nombre}</p>
                            <div class="contenedor__descripcion">
                                <p class="descripcion">${productos.descripcion}</p> 
                                <p class="precio">${productos.precio}</p>
                            </div>
                        </div>`
                bisuteriaHtml.innerHTML += cartaJS;
                
                
            }
        }
    } 
    
     for (let i = 0; i < objProductos.length; i++) {
        listaCategoria = objProductos[i][origami]
        if(objProductos[i].hasOwnProperty(origami)) {
            for (let producto in listaCategoria) {
                let productos = listaCategoria[producto]
                let cartaJS = `<div class="carta" style='background-color:${productos.color};'">
                            <img id="${productos.id}" class="origami_js" src="${productos.imagen}" alt="">
                            <p class="nombre">${productos.nombre}</p>
                            <div class="contenedor__descripcion">
                                <p class="descripcion">${productos.descripcion}</p> 
                                <p class="precio">${productos.precio}</p>
                            </div>
                            
                        </div>`
                origamiHtml.innerHTML += cartaJS;
                
            }
        }
    }
    for (let i = 0; i < objProductos.length; i++) {
        listaCategoria = objProductos[i][arreglo]
        if(objProductos[i].hasOwnProperty(arreglo)) {
            for (let producto in listaCategoria) {
                let productos = listaCategoria[producto]
                let cartaJS = `<div class="carta" style='background-color:${productos.color};'">
                            <img id="${productos.id}" class="arreglo_js" src="${productos.imagen}" alt="">
                            <p class="nombre">${productos.nombre}</p>
                            <div class="contenedor__descripcion">
                                <p class="descripcion">${productos.descripcion}</p> 
                                <p class="precio">${productos.precio}</p>
                            </div>
                        </div>`
                arregloHtml.innerHTML += cartaJS;
                
                
            }
        }
    }
    for (let i = 0; i < objProductos.length; i++) {
        listaCategoria = objProductos[i][llavero]
        if(objProductos[i].hasOwnProperty(llavero)) {
            for (let producto in listaCategoria) {
                let productos = listaCategoria[producto]
                let cartaJS = `<div class="carta" style='background-color:${productos.color};'">
                            <img id="${productos.id}" class="llavero_js" src="${productos.imagen}" alt="${productos.alt}">
                            <p class="nombre">${productos.nombre}</p>
                            <div class="contenedor__descripcion">
                                <p class="descripcion">${productos.descripcion}</p> 
                                <p class="precio">${productos.precio}</p>
                            </div>
                        </div>`
                llaveroHtml.innerHTML += cartaJS;
            }
        }
    }
    for (let i = 0; i < objProductos.length; i++) {
        listaCategoria = objProductos[i][floresEternas]
        console.log(listaCategoria)
        if(objProductos[i].hasOwnProperty(floresEternas)) {
            let cartaJS = `<h2>${listaCategoria.proximamente}</h2>`
                floresEternasHtml.innerHTML += cartaJS;
                console.log(cartaJS)
        }
        
    }
}
imprimirProductos()
