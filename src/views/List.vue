<template>
  <div>
    <input type="text" v-model="newContact" />
    <button @click="addContact">Add contact</button>
    <button @click="sortContacts">Sort contacts</button>
    <transition-group tag="ul" name="slide-up" appear>
      <li v-for="contact in contacts" :key="contact">{{ contact }}</li>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contacts: [
        'Denis Bergkamp',
        'Zinedin Zedan',
        'Wane Rooney',
        'Zlatan Ibrahimovich'
      ],
      newContact: null
    }
  },
  methods: {
    addContact() {
      if (this.newContact) {
        this.contacts.push(this.newContact)
        this.newContact = null
      } else {
        alert('Empty name')
      }
    },
    sortContacts() {
      this.contacts.sort()
    }
  }
}
</script>

<style></style>
