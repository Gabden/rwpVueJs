<template>
  <div>
    <h1>Create event</h1>
    <p>This event was created by {{ user.name }}</p>
    <p>There are {{ catLength }} categories</p>
    <ul>
      <li v-for="(category, index) in categories" :key="index">
        {{ category }}
      </li>
    </ul>
    <p>1111 + {{ getEventById(1) }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['catLength', 'getEventById']),
    ...mapState(['user', 'categories'])
  }
}
</script>

<style></style>
