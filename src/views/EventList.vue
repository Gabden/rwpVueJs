<template>
  <div>
    <h1>Events list</h1>
    <card v-for="event in events" :key="event.id" :event="event"></card>
    <BaseIcon />
    <template v-if="page != 1">
      <router-link
        :to="{ name: 'event-list', query: { page: page - 1 } }"
        rel="prev"
        >previous</router-link
      >
      |
    </template>

    <template v-if="page * 3 < totalEvents">
      <router-link
        :to="{ name: 'event-list', query: { page: page + 1 } }"
        rel="next"
        >next</router-link
      >
    </template>
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
    this.$store.dispatch('FETCH_EVENTS', {
      perPage: 3,
      page: this.page
    })
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1
    },
    ...mapState(['events', 'totalEvents'])
  }
}
</script>

<style></style>
