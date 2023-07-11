let colores = [
    "#A38262",
    "#92A362",
    "#62A393"
]

let objProductos =[{
    bisuteria:{
        bisuteria1:{
            imagen: "img/productos/bis_1_Pulsera_de_conejo.jpg",
            nombre : "Pulsera De Conejo",
            descripcion: "Cuenta con dije de níquel, cuarzo rosa, pulsera regulable.",
            precio: "S/10.00",
            color: colores[0],
            alt: "Pulsera De Conejo"
        },
        bisuteria2:{
            imagen: "img/productos/bis_2_Pulsera_compartida_de_Murano.jpg",
            nombre : "Pulsera Compartida De Murano",
            descripcion: "Cuenta con dije de acero imantado, hecha de Murano cómoda de usar y elegante.",
            precio: "S/15.00",
            color: colores[1],
            alt: "Pulsera Compartida De Murano"
        },
        bisuteria3:{
            imagen: "img/productos/bis_3_Corazon_sabio.jpg",
            nombre : "Corazón Sabio.",
            descripcion: "Cuenta con mostacillas moradas, corazones morados, hilo elástico.",
            precio: "S/6.00",
            color: colores[2],
            alt: "Corazón Sabio."
        },
        bisuteria4:{
            imagen: "img/productos/bis_4_Pulsera_smile.jpg",
            nombre : "Pulsera Smile",
            descripcion: "Hecha de mostacillas negras, cuentas con cara alegre, hilo elástico.",
            precio: "S/6.00",
            color: colores[0] ,
            alt: "Pulsera Smile"
        },
        bisuteria5:{
            imagen: "img/productos/bis_5_Pulsera_black_smile.jpg",
            nombre : "Pulsera Black Smile",
            descripcion: "Cuenta con mostacillas negras, cuentas con cara de sonrisa, elástica.",
            precio: "S/6.00",
            color: colores[1] ,
            alt: "Pulsera Black Smile"
        },
        bisuteria6:{
            imagen: "img/productos/bis_6_Corazon_amoroso.jpg",
            nombre : "Corazón Amoroso",
            descripcion: "Hecha de mostacillas rojas, corazones rojos, elástica.",
            precio: "S/6.00",
            color: colores[2] ,
            alt: "Corazón Amoroso"
        },
        bisuteria7:{
            imagen: "img/productos/bis_7_Pulsera_basica_de_conchas.jpg",
            nombre : "Pulsera Básica De Conchas",
            descripcion: "Cuenta con bolitas de acero plateadas inoxidable, hilo blanco, regulable.",
            precio: "S/8.00",
            color: colores[0] ,
            alt: "Pulsera Básica De Conchas"
        },
        bisuteria8:{
            imagen: "img/productos/bis_8_Pulsera_de_conchas.jpg",
            nombre : "Pulsera De Conchas",
            descripcion: "Cuenta con bolitas de acero doradas inoxidable, hilo blanco, regulable.",
            precio: "S/18.00",
            color: colores[1] ,
            alt: "Pulsera De Conchas"
        },
        bisuteria9:{
            imagen: "img/productos/bis_9_Pulsera_con_conchas.jpg",
            nombre : "Pulsera Con Conchas",
            descripcion: "Cuenta con bolitas de acero plateadas inoxidable, hilo blanco, regulable.",
            precio: "S/18.00",
            color: colores[2],
            alt: "Pulsera Con Conchas"
        },
        bisuteria10:{
            imagen: "img/productos/bis_10_Pulsera_moon.jpg",
            nombre : "Pulsera Moon",
            descripcion: "Cuenta con dije a acero dorado, piedra luna, bolitas de acero inoxidable, hilo blanco, graduable.",
            precio: "S/18.00",
            color: colores[0],
            alt: "Pulsera Moon"
        },
        bisuteria11:{
            imagen: "img/productos/bis_11_Pulsera_dolphin.jpg",
            nombre : "Pulsera Dolphin",
            descripcion: "Hecha con hilo celeste tejido a mano, con dije de níquel y bolitas de acero puro, graduable.",
            precio: "S/12.00",
            color: colores[1],
            alt: "Pulsera Dolphin"
        },
        bisuteria12:{
            imagen: "img/productos/bis_12_Pulsera_marina.jpg",
            nombre : "Pulsera Marina",
            descripcion: "Cuenta con dije de níquel, bolitas 100% de acero, hilo azul tejido a mano.",
            precio: "S/12.00",
            color: colores[2],
            alt: "Pulsera Marina"
        },
        bisuteria13:{
            imagen: "img/productos/bis_13_Mano_de_Fatima.jpg",
            nombre : "Mano de Fátima",
            descripcion: "Cuenta con piedra luna, dije de acero con incrustaciones de diamantes (fantasía), hilo elástico. Otorga la protección y previene el mal del ojo.",
            precio: "S/26.00",
            color: colores[0],
            alt: "Mano de Fátima"
        },
        bisuteria14:{
            imagen: "img/productos/bis_14_Pulsera_de_la_suerte.jpg",
            nombre : "Pulsera De La Suerte",
            descripcion: "Cuenta con piedra luna, dije de acero con forma de trébol, hilo elástico, cómodo de usar.",
            precio: "S/25.00",
            color: colores[1] ,
            alt: "Pulsera De La Suerte"
        },
        bisuteria15:{
            imagen: "img/productos/bis_15_Pulsera_compartida_de_onix_mate.jpg",
            nombre : "Pulsera Compartida De Ónix Mate",
            descripcion: "Hecha de ónix mate blanca y negra, con dije de acero imantado, hilo elástico, representan la unión de dos personas.",
            precio: "S/18.00",
            color: colores[2],
            alt: "Pulsera Compartida De Ónix Mate"
        },
        bisuteria16:{
            imagen: "img/productos/bis_16_Ojo_turco_azul.jpg",
            nombre : "Ojo Turco Azul",
            descripcion: "Hecha de bolitas mate azul, ojo turco, bolitas de acero dorado, hilo elástico.",
            precio: "S/9.00",
            color: colores[0],
            alt: "Ojo Turco Azul"
        },
        bisuteria17:{
            imagen: "img/productos/bis_17_Ojo_turco_rojo.jpg",
            nombre : "Ojo Turco Rojo",
            descripcion: "Hecha de bolitas blancas mate, ojo turco, bolitas de acero doradas, hilo elástico.",
            precio: "S/9.00",
            color: colores[1],
            alt: "Ojo Turco Rojo"
        },
        bisuteria18:{
            imagen: "img/productos/bis_18_Ojo_turco_negro.jpg",
            nombre : "Ojo Turco Negro",
            descripcion: "Hecha de bolitas blancas mate, ojo turco, bolitas de acero, hilo elástico.",
            precio: "S/9.00",
            color: colores[2],
            alt: "Ojo Turco Negro"
        },
        bisuteria19:{
            imagen: "img/productos/bis_19_Ojo_turco_rojo.jpg",
            nombre : "Ojo Turco Rojo",
            descripcion: "Cuenta con bolitas mate rojas, ojo turco, bolitas de acero, hilo elástico.",
            precio: "S/9.00",
            color: colores[0],
            alt: "Ojo Turco Rojo"
        },
        bisuteria20:{
            imagen: "img/productos/bis_20_Ojo_turco_negro.jpg",
            nombre : "Ojo Turco Negro",
            descripcion: "Cuenta con bolitas negras mate, ojo turco, bolitas de acero, hilo elástico.",
            precio: "S/9.00",
            color: colores[1],
            alt: "Ojo Turco Negro"
        },
        bisuteria21:{
            imagen: "img/productos/bis_21_Ojo_turco_azul.jpg",
            nombre : "Ojo Turco Azul",
            descripcion: "Hecha de mostacillas azules, bolitas de acero, ojo turco, hilo elástico.",
            precio: "S/8.00",
            color: colores[2],
            alt: "Ojo Turco Azul"
        },
        bisuteria22:{
            imagen: "img/productos/bis_22_Ojo_turco_azul.jpg",
            nombre : "Ojo Turco Azul",
            descripcion: "Cuenta con mostacillas celeste, ojo turco, bolitas de acero doradas, hilo elástico.",
            precio: "S/8.00",
            color: colores[0],
            alt: "Ojo Turco Azul"
        },
        bisuteria23:{
            imagen: "img/productos/bis_23_Ojo_turco_rojo.jpg",
            nombre : "Ojo Turco Rojo",
            descripcion: "Cuenta con mostacillas rojas, ojo turco, bolitas de acero doradas, hilo elástico.",
            precio: "S/8.00",
            color: colores[1],
            alt: "Ojo Turco Rojo"
        },
        bisuteria24:{
            imagen: "img/productos/bis_24_Corazon_luminiscente.jpg",
            nombre : "Corazón luminiscente",
            descripcion: "Hecha de mostacillas negras, corazón rojo que brilla en la oscuridad, hilo elástico.",
            precio: "S/6.00",
            color: colores[2],
            alt: "Corazón luminiscente"
        },
        bisuteria25:{
            imagen: "img/productos/bis_25_Luna_eterna.jpg",
            nombre : "Luna Eterna",
            descripcion: "Hecha de piedra luna, dije de acero en forma de luna, hilo elástico. Representa el resplandor de la luna.",
            precio: "S/25.00",
            color: colores[2],
            alt: "Luna Eterna"
        }
    },
    origami:{
        origami1:{
            imagen: "img/productos/origami/ori_1_Rosa_de_papel.jpg",
            nombre: "Rosa De Papel",
            descripcion: "Fácil limpieza",
            precio: "S/32.00",
            color: colores[0],
            alt: "Rosa De Papel"

        },
        origami2:{
            imagen: "img/productos/origami/ori_2_Corazon_con_parador_de_papel.jpg",
            nombre: "Corazón Con Parador De Papel",
            descripcion: "Fácil limpieza",
            precio: "S/15.00",
            color: colores[0],
            alt: "Corazón Con Parador De Papel"

        },origami3:{
            imagen: "img/productos/origami/ori_3_Elefante_de_papel.jpg",
            nombre: "Elefante de papel",
            descripcion: "Fácil limpieza",
            precio: "S/30.00",
            color: colores[0],
            alt: "Elefante de papel"

        },origami4:{
            imagen: "img/productos/origami/ori_4_Gato_negro_con_blanco__de_papel.jpg",
            nombre: "Gato Negro Con Blanco De Papel",
            descripcion: "Fácil limpieza",
            precio: "S/28.00",
            color: colores[0],
            alt: "Gato Negro Con Blanco De Papel"

        },origami5:{
            imagen: "img/productos/origami/ori_5_Oso_panda_de_papel.jpg",
            nombre: "Oso Panda De Papel",
            descripcion: "Fácil limpieza",
            precio: "S/32.00",
            color: colores[0],
            alt: "Oso Panda De Papel"

        },origami6:{
            imagen: "img/productos/origami/ori_6_Perro_de_papel.jpg",
            nombre: "Perro De Papel",
            descripcion: "Fácil limpieza",
            precio: "S/58.00",
            color: colores[0],
            alt: "Perro De Papel"

        },origami7:{
            imagen: "img/productos/origami/ori_7_Tortuga_de_papel.jpg",
            nombre: "Tortuga de Papel",
            descripcion: "Fácil limpieza",
            precio: "S/30.00",
            color: colores[0],
            alt: "Tortuga de Papel"
        }     
    },
    arreglo:{
        arreglo1:{
            imagen: "",
            nombre: "undefined",
            descripcion: "undefined",
            precio: "undefined",
            color: colores[1],
            alt: "undefined"
        }
    }
}];
export{objProductos}