import { objProductos } from "./productos.js";
const categoriaHtml = document.querySelectorAll(".categoria")
const bisuteriaHtml = document.getElementById("bisuteriaHtml")
const origamiHtml = document.getElementById("origamiHtml")
const arregloHtml = document.getElementById("arregloHtml")
let categoria = "";
console.log(arregloHtml)

mostrarProductoCategoria()
function mostrarProductoCategoria() {
    categoriaHtml.forEach(function (currentValue, index, array) {
        console.log(currentValue)
        currentValue.addEventListener('click', function () {
            categoria = currentValue.classList[1]
            console.log(categoria)
            if (categoria === 'bisuteria') {
                console.log("bisuteria")
                bisuteriaHtml.style.display = 'grid';
                origamiHtml.style.display = "none";
                arregloHtml.style.display = "none";
            } else if (categoria === 'origami') {
                console.log("origami")
                bisuteriaHtml.style.display = "none";
                origamiHtml.style.display = 'grid';
                arregloHtml.style.display = "none";
            } else if (categoria === 'arreglo') {
                console.log("arreglo")
                arregloHtml.style.display = "grid";
                origamiHtml.style.display = "none";
                bisuteriaHtml.style.display = "none";
            } else {
                bisuteriaHtml.style.display = 'grid';
                origamiHtml.style.display = 'grid';
                arregloHtml.style.display = "grid";
                console.log("Imprimir todos los productos")
            }

        });

    });
}


function imprimirProductos() {
    let bisuteria = 'bisuteria';
    let origami = 'origami';
    let arreglo = 'arreglo';
    let listaCategoria = []
    for (let i = 0; i < objProductos.length; i++) {
        listaCategoria = objProductos[i][bisuteria]
        console.log(listaCategoria)
        if(objProductos[i].hasOwnProperty(bisuteria)) {
            console.log("cumplio la condición")
            for (let producto in listaCategoria) {
                let productos = listaCategoria[producto]
                let cartaJS = `<div class="carta" style='background-color:${productos.color};'">
                            <img src="${productos.imagen}" alt="">
                            <p class="nombre">${productos.nombre}</p>
                            <p class="descripcion">${productos.descripcion}</p>
                            <p class="precio">${productos.precio}</p>
                        </div>`
                /* bisuteriaHtml.insertAdjacentElement("afterbegin",cartaJS) */
                bisuteriaHtml.innerHTML += cartaJS;
                console.log(cartaJS)
            }
        }
    }
    for (let i = 0; i < objProductos.length; i++) {
        listaCategoria = objProductos[i][origami]
        console.log(listaCategoria)
        if(objProductos[i].hasOwnProperty(origami)) {
            console.log("cumplio la condición")
            for (let producto in listaCategoria) {
                let productos = listaCategoria[producto]
                let cartaJS = `<div class="carta" style='background-color:${productos.color};'">
                            <img src="${productos.imagen}" alt="">
                            <p class="nombre">${productos.nombre}</p>
                            <p class="descripcion">${productos.descripcion}</p>
                            <p class="precio">${productos.precio}</p>
                        </div>`
                /* bisuteriaHtml.insertAdjacentElement("afterbegin",cartaJS) */
                origamiHtml.innerHTML += cartaJS;
                console.log(cartaJS)
            }
        }
    }
    for (let i = 0; i < objProductos.length; i++) {
        listaCategoria = objProductos[i][arreglo]
        console.log(listaCategoria)
        if(objProductos[i].hasOwnProperty(arreglo)) {
            console.log("cumplio la condición")
            for (let producto in listaCategoria) {
                let productos = listaCategoria[producto]
                let cartaJS = `<div class="carta" style='background-color:${productos.color};'">
                            <img src="${productos.imagen}" alt="">
                            <p class="nombre">${productos.nombre}</p>
                            <p class="descripcion">${productos.descripcion}</p>
                            <p class="precio">${productos.precio}</p>
                        </div>`
                /* bisuteriaHtml.insertAdjacentElement("afterbegin",cartaJS) */
                arregloHtml.innerHTML += cartaJS;
                console.log(cartaJS)
            }
        }
    }
}
imprimirProductos()