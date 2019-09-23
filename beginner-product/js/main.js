// global chanel to listen to events Event bus
var eventBus = new Vue ({

})

//component inserted into main vue

Vue.component('product-review', {
  template: `
    <form class="review-form" @submit.prevent="onSubmit"><!-- .prevent este modifier ca sa nu mai faca refres la pagina -->
      <p  v-if="errors.length">
        <b>Please correct the following:</b>
        <ul>
          <li v-for="error in errors"> <small>{{error}}</small> </li>
        </ul>
      </p>
      <p>
        <label for="name">Name:</label>
        <input id="name" v-model="name">
      </p>
      <p>
        <label for="review">Review:</label>
        <textarea id="review" v-model="review"></textarea>
      </p>
      <p>
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating"><!-- .number este modifier ca sa imi trimita valoarea ca numar -->
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
      </p>

      <p>
        <b>Would you recommend this product?</b><br>
        <input type="radio" id="Yes" value="Yes" v-model="picked" style="width:30px;">
        <label for="Yes">Yes</label>
        <input type="radio" id="No" value="No" v-model="picked" style="width:30px;">
        <label for="No">No</label>
      </p>

      <p>
        <input type="submit" value="Submit"/>
      </p>

    </form>
  `,
  data () {
    return {
      name: null,
      review: null,
      rating: null,
      errors: [],
      picked: null
    }
  },
  methods: {
    onSubmit() {
      if(this.name && this.review && this.rating && this.picked) {
        let productReview = {
          name: this.name,
          review: this.review,
          rating: this.rating,
          picked: this.picked
        }
        eventBus.$emit('review-submitted', productReview)
        this.name = null
        this.review = null
        this.rating = null
        this.picked = this.picked
      } else {
        if (!this.name){this.errors.push('please fill the name input')}
        if (!this.rating){this.errors.push('please rate us')}
        if (!this.review){this.errors.push('please let us know your review')}
        if (!this.picked){this.errors.push('please ask our question')}
        
      }
    }
  }
})
Vue.component ('product', {
  props: {
    premium: {
      type:Boolean,
      required:true
    }
  },
  template:`
  <div class="product">
    <div class="product-image">
      <img :src="image" alt="">
      <a v-show="seeLink" :href="link" target="_blank">vezi siteul</a>
    </div>
    <div class="product-info">
      <h1>{{title}}</h1>
      <p v-if="inStock">In Stock</p>
      <p v-else :class="{outOfStock : !inStock}">Out of Stock</p>
      <p>Shipping : {{ shipping }}</p>
      <p> {{  sale }}</p>
      <span v-if="onSale.status"  :style="onSale.styleObj">ON SALE!</span>
      <product-details :details="details"></product-details>
      <div v-for="(variant, index) in variants"
          :key="variant.variantId"
          class="color-box variant-color"
          :style="{backgroundColor: variant.variantColor}"
          @mouseover="updateProduct(index)">
      </div>
      <button v-on:click="addToCart"
              :disabled="!inStock"
              :class="{ disabledButton: !inStock }">Add to cart</button>
      <button v-on:click="removeFromCart">Remove from cart</button>
      <hr>
      <product-tabs :reviews="reviews"></product-tabs>
    </div>
  </div>
  `,
  data () {
    return {
    product: 'SOCKS',
    brand: 'Nike ',
    selectedVariant: 0,// this is the index that will hover
    link: 'http://www.petrebogdan.com',
    seeLink: false,
    reducere: false,
    onSale: {
      status:false,
      styleObj: {
        color: 'red',
        fontSize: '1.3rem',
        textTransform: 'uppercase',
        fontWeight: '500',
        fontStyle:'italic'
      }
    },
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
    reviews: [],
    details: ['80% cotton', '20% polyester', 'Gender neutral']
    }
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
    },
    shipping () {
      if(this.premium) {
        return 'Free'
      } else {
        return '5lei'
      }
    }
  },
  methods: {
    addToCart () {
      // this.cart += 1
      this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
    },
    removeFromCart () {
      // console.log('x')
      this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId)
    },
    updateProduct (index) {
      this.selectedVariant = index
      // console.log(index)
    }
    // ,
    // addReview(productReview) {
    //   this.reviews.push(productReview)
    // }
  },
  mounted () {
    eventBus.$on('review-submitted', productReview => this.reviews.push(productReview))
  }
})


Vue.component('product-details', {
  props: {
    details: {
      type: Array,
      required: true
    }
  },
  template: `
    <div>
      <ul>
        <li v-for="detail in details">{{ detail }}</li>
      </ul>
    </div>
  `
})

Vue.component('product-tabs', {
  props:{
    reviews : {
      type: Array,
      required:true
    }
  },
  template: `
    <div>
      <span class="tab"
            :class="{ activeTab: selectedTab === tab }"
            v-for="(tab, index) in tabs"
            :key="index"
            @click="selectedTab = tab"
            >{{ tab }}
      </span>
      <div v-show="selectedTab === 'Reviews'">
        <p v-if="!reviews.length">There are no reviews yet.</p>
        <ul v-else>
          <li v-for="review in reviews">
          <p>{{ review.name }}</p>
          <p>Rating: {{ review.rating }}</p>
          <p>{{ review.review }}</p>
          <p>Would you recommend this product? {{ review.picked }}</p>
          </li>
        </ul>
        <hr>
      </div>
      <product-review v-show="selectedTab === 'Make a review'"></product-review>
    </div>
  `,
  data() {
    return {
      tabs: ['Reviews', 'Make a review'],
      selectedTab: 'Reviews'
    }
  }
})

var app = new Vue({
  el: '#app',
  data: {
    premium: true,
    cart: []
  },
  methods: {
    updateCart (id){
      // this.cart += 1 - whent cart is an number
      this.cart.push(id)
    },
    removeItem (id) {
      // this.cart.pop() remove one by one from the end
      // console.log('index')
      for( var i = this.cart.length - 1; i >= 0; i--){
        if(this.cart[i] === id) {
          this.cart.splice(i, 1)
        }
      }
    }
  }
})
