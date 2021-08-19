var app = new Vue ({
    el: '#app', //te conecta con un elemento del HTML
    data: { // ingresamos data en el elemento
        product: "Aguas",
        brand: "La Tienda Mínima",
        //image: "Imagenes/INSTAGRAM 1.jpg",
        variante_elegida:0,
        altText: "Aguas de hamamelis,rosas y otra",
        details: ["Astringente", "Caracteristica", "Otra caracteristicas"],
        inStock:7,
        inventory: 9,
        variants: [ { variantId: 0001, 
                    variantColor: 'yellow',
                    variantImage: "Imagenes/INSTAGRAM 1.jpg"
        },
                    { variantId: 0002,
                        variantColor:'pink',
                    variantImage: "Imagenes/INSTAGRAM 2.jpg" }
        ],
        cart:0,
    },
    
    methods: {         
            carrito() {
                this.cart+= 1
            }
,
            cambioimagen(index) {
                this.variante_elegida = index,
                console.log(index)
            }

        }
        ,
    computed:
    {
        title(){
            return this.brand + " " + this.product
        },
        image()
        {
            return this.variants  [this.variante_elegida].variantImage
        },
       // inStock(){
         //   return this.variants  [this.variante_elegida].variantQuantity

        //}
    } 
    })