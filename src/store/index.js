import Vue from 'vue'
import Vuex from 'vuex'
import EventService from '@/services/EventService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      id: 'id123',
      name: 'Denis Gab'
    },
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ],
    events: [{ id: 1, name: 'Portvain' }],
    event: {},
    totalEvents: 0
  },
  mutations: {
    ADD_EVENT({ state }, event) {
      state.events.push(event)
    },
    SET_EVENTS(state, events) {
      state.events = events
    },
    UPDATE_TOTAL_PAGES(state, total) {
      state.totalEvents = total
    },
    SET_EVENT(state, event) {
      state.event = event
    }
  },
  actions: {
    CREATE_EVENT({ commit }, event) {
      return EventService.postEvent(event)
        .then(() => {
          commit('ADD_EVENT', event)
        })
        .catch(err => {
          console.log(err)
        })
    },
    FETCH_EVENTS({ commit }, { perPage, page }) {
      EventService.getEvents(perPage, page)
        .then(response => {
          console.log(response.headers['x-total-count'])
          let totalEvents = parseInt(response.headers['x-total-count'])
          commit('UPDATE_TOTAL_PAGES', totalEvents)
          commit('SET_EVENTS', response.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    FETCH_EVENT({ commit, getters }, id) {
      let event = getters.getEventById(id)
      if (event) {
        commit('SET_EVENT', event)
      } else {
        EventService.getEvent(id)
          .then(response => {
            commit('SET_EVENT', response.data)
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  },
  modules: {},
  getters: {
    catLength: state => {
      return state.categories.length
    },
    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
  }
})
