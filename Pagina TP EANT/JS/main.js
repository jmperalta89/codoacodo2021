 var app = new Vue ({
el: '#app', //te conecta con un elemento del HTML
data: { // ingresamos data en el elemento
    product: "Aguas",
    image: "Imagenes/kit.png",
    altText: "Aguas de hamamelis,rosas y otra",
    inStock: true,
    details: ["Astringente", "Caracteristica", "Otra caracteristicas"],
    inventory: 9,
    variants: [ { variantId: 0001, 
                variantColor: 'Hamamelis',
                variantImage: "Imagenes/INSTAGRAM 1.png"
    },
                { variantId: 0002,
                    variantColor: 'Rosas',
                variantImage: "Imagenes/INSTAGRAM 2.png" }
    ],
    cart:0,
},
        methods: {         
        Carrito:function() {
            this.cart=this.cart+1
        }
    } 
})


