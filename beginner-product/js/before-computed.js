var app = new Vue({
  el: '#app',
  data: {
    product: 'SOCKS',
    brand: 'Nike ',
    image: 'img/vmSocks-green-onWhite.jpg',
    link: 'http://www.petrebogdan.com',
    seeLink: false,
    // if only true false - > inStock: true
    // inStock: true,
    inventory: 30,
    // outOfStock : 'out-of-stock',
    onSale: {
      status:true,
      styleObj: {
        color: 'red',
        fontSize: '1.3rem',
        textTransform: 'uppercase',
        fontWeight: '500',
        fontStyle:'italic'
      }
    },
    details: ['80% cotton', '20% polyester', 'Gender neutral'],
    variants: [
      {
        variantId: 2233,
        variantColor: '#2d945e',
        variantImage: 'img/vmSocks-green-onWhite.jpg'
      },
      {
        variantId: 2234,
        variantColor: '#1b2c42',
        variantImage: 'img/vmSocks-blue-onWhite.jpg'
      }
    ],
    cart: 0
  },
  computed: {
    title () {
      return this.brand + ' ' + this.product
    },
    inStock () {
      return
    },
    image () {
      
    }
  },
  methods: {
    addToCart () {
      this.cart += 1
    },
    removeFromCart () {
      if(this.cart === 0) {
        this.cart = 0
      } else {
        this.cart -= 1
      }
    },
    updateProduct (variantImage) {
      this.image = variantImage
    }
  }
})
