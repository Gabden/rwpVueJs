<template>
  <div>
    <h1>Events list</h1>
    <card v-for="event in events" :key="event.id" :event="event"></card>
    <BaseIcon />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'
export default {
  data() {
    return {
      events: []
    }
  },
  components: {
    card: EventCard
  },
  created() {
    EventService.getEvents()
      .then(response => {
        this.events = response.data
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style></style>
