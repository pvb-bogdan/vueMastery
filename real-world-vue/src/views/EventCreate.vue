<template>
  <div>
    <!-- <h1>Create an event, {{ userName }}</h1>
    <p>This event was created by {{ userName }}</p> -->
    <h1>Create an event {{ user.name }}</h1>
    <p>This event was created by {{ user.name }}</p>
    <ul>
      <li>There are | {{ catLenght }} | categories:</li>
      <li v-for="cat in categories" :key="cat">{{ cat }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  // computed: mapState({
  //   // that's one way to acces state from store

  //   // userName: state => state.user.name,
  //   // userId: state => state.user.id,
  //   // categories: state => state.categories
  //   //that's another way to acces state from store

  //   user: 'user',
  //   categories: 'categories'
  // })
  //  mapState take all computed obj so we use  ... (spread operators)
  // computed: mapState(['user', 'categories'])
  computed: {
    catLenght() {
      return this.$store.getters.catLength
    },
    ...mapState(['user', 'categories'])
  }
}
</script>
