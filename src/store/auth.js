
import axios from 'axios';
import qs from 'qs';

export default {
  namespaced :true,
  state: {
      token : null,
      user : null
  },
  getters : {
    authenticated (state) {
        return state.token && state.user;
    },
    user (state) {
        return state.user;
    }
  },
  mutations: {
      SET_TOKEN (state, token) {
          state.token = token
      },
      SET_USER (state, data) {
          state.user = data
      }
  },
  actions: {
    async signIn( { dispatch }, credentials) {
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        let response = await axios.post('token', qs.stringify(credentials) , config)
        console.log(response.data);
        return dispatch('attempt',response.data.access_token)
    },
    async attempt({ commit }, token) {
        commit ('SET_TOKEN', token);
        try {
            let response = await axios.get('api/values'/*, {
                headers : {
                    'Authorization' : `Bearer ${token}`
                }
            }*/);
            commit('SET_USER', response.data);
        } catch  (e) {
            //if token expire
            commit('SET_TOKEN', null);
            commit('SET_USER', null);

        }
    }
  }
}
