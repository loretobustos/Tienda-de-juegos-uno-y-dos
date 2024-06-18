import Vue from 'vue'
import Vuex from 'vuex'
import juegos from "./juegos.json"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    juegos,
  },
  mutations: {
    setJuegos(state, juegos) {
      state.juegos = juegos
    }
  },
  actions: {
    incrementar({ commit, state }, i) {
      const { juegos } = state
      juegos[i].stock++
      commit("setJuegos", juegos)
    },
    decrementar({ commit, state }, i) {
      const { juegos } = state
      juegos[i].stock--
      commit("setJuegos", juegos)
    }
  },
  getters: {
    totalJuegos(state) {
      const total = state.juegos.reduce((acc, juego) => {
        return +juego.stock + acc
      }, 0)
      return total
    }
  }
})
