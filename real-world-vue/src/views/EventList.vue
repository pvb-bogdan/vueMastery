<template>
  <div>
    <h1>This is event list</h1>
    <event-card
      v-for="event in events"
      :key="event.id"
      :event="event"
    ></event-card>
    <template v-if="page != 1">
      <router-link :to="{ name: 'event-list', query: { page: page - 1 } }">
        Prev page
      </router-link>
      |
    </template>
    <router-link :to="{ name: 'event-list', query: { page: page + 1 } }"
      >Next page
    </router-link>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { mapState } from 'vuex'
export default {
  components: {
    'event-card': EventCard
  },
  created() {
    this.$store.dispatch('fetchEvents', {
      perPage: 3,
      page: this.page
    })
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1
    },
    ...mapState(['events'])
  }
}
</script>
