<template>
  <div>
    <h1>This is event list</h1>
    <router-link :to="{ name: 'event-show', params: { id: '1' } }"
      >Show Event #1
    </router-link>
    <event-card></event-card>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
export default {
  components: {
    'event-card': EventCard
  }
}
</script>
