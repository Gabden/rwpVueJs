<template>
  <div>
    <h1>Events list</h1>
    <card></card>
    <BaseIcon />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
export default {
  components: {
    card: EventCard
  }
}
</script>

<style></style>
