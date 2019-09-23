var app = new Vue({
  el: '#app',
  data: {
    product: 'SOCKS',
    brand: 'Nike ',
    selectedVariant: 0,// this is the index that will hover
    link: 'http://www.petrebogdan.com',
    seeLink: false,
    reducere: false,
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
        variantImage: 'img/vmSocks-green-onWhite.jpg',
        variantQuantity: 10
      },
      {
        variantId: 2234,
        variantColor: '#1b2c42',
        variantImage: 'img/vmSocks-blue-onWhite.jpg',
        variantQuantity: 0
      }
    ],
    cart: 0
  },
  computed: {
    title () {
      return this.brand + ' ' + this.product
    },
    inStock () {
      return this.variants[this.selectedVariant].variantQuantity
    },
    image () {
      return this.variants[this.selectedVariant].variantImage
    },
    sale () {
      if(this.onSale.status) {
        return this.brand + ' ' + this.product + ' ' + 'are on sale!'
      } else {
        return this.brand + ' ' + this.product + ' ' + 'are at our regular price'
      }
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
    updateProduct (index) {
      this.selectedVariant = index
      // console.log(index)
    }
  }
})
