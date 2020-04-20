<template>
  <div>
    <button @click="toggleModal">On modal</button>
    <transition name="fade">
      <div class="modal" v-if="showModal">
        <button @click="showModal">Off modal</button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    }
  }
}
</script>

<style scoped>
.modal {
  width: 250px;
  height: 200px;
  padding: 25px;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 2%;
  background-color: #e0e0e0;
}
button {
  width: 5em;
  height: 2em;
  margin: 0.5em;
  border-radius: 5px;
  background: linear-gradient(to right, #16c0b0, #84cf6a);
  font-size: 1em;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
}
</style>
