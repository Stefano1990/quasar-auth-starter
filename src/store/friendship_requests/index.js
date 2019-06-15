import { axiosInstance } from 'boot/axios'

const FETCH_FRIENDSHIP_REQUESTS = '/friendship_requests'

// STATE
const state = {
  friendshipRequests: [],
  dataLoadingState: 'notloaded'
}

// GETTERS
const getters = {
  openRequests: (state) => {
    return state.friendshipRequests.filter(fr => fr.attributes.accepted_at === null).length
  }
}

// ACTIONS
const actions = {
  fetchFriendshipRequests ({ state }) {
    state.commit('setLoadingState', 'loading')
    return axiosInstance.get(FETCH_FRIENDSHIP_REQUESTS)
      .then(response => {
        state.commit('setFriendshipRequests', response.data.data)
      })
  }
}

// MUTATIONS
const mutations = {
  setFrienshipRequests (state, data) {
    state.friendshipRequests = data
  },
  setLoadingState (state, newState) {
    state.dataLoadingState = newState
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
