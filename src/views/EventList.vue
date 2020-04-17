<template>
  <div>
    <h1>Events list</h1>
    <card v-for="event in events" :key="event.id" :event="event"></card>
    <BaseIcon />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { mapState } from 'vuex'
export default {
  components: {
    card: EventCard
  },
  created() {
    this.$store.dispatch('FETCH_EVENTS')
  },
  computed: mapState(['events'])
}
</script>

<style></style>
