import Vue from 'vue'
import Vuex from 'vuex'
import EventService from '@/services/EventService.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 'abc123', name: ' Adam Jahr' },
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ],
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false },
      { id: 3, text: '...', done: true },
      { id: 4, text: '...', done: false }
    ]
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.event.push(event)
    }
  },
  actions: {
    createEvent({ commit }, event) {
      EventService.postEvent(event)
      commit('ADD_EVENT', event)
    }
    // createEvent({ commit }, event) {
    //   EventService.postEvent(event)
    //   commit('ADD_EVENT', event)
    // }
  },
  getters: {
    catLength: state => {
      return state.categories.length
    },
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    // that's the way to pass getters
    // activeTodosCount: (state, getters) => {
    //   return state.todos.length - getters.doneTodos.length
    // }
    activeTodosCount: state => {
      return state.todos.filter(todo => !todo.done).length
    }
  }
})
