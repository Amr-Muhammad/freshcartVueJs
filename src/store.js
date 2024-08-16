import service from "./../public/Mixins/service";
import { createStore } from "vuex";

let store = createStore({
    state() {
        return {
            userData: {},
            noOfCartItems: 0
        }
    },
    mutations: {
        SETUSERDATA(state, userData) {
            state.userData = userData
        },
        SYNCNOOFCARTITEMS(state, cartLength) {
            state.noOfCartItems = cartLength
        },
        LOGOUT(state) {
            state.userData = {}
        }
    },
    actions: {
        setUserData({ commit }, userData) {
            commit('SETUSERDATA', userData)
        },
        syncNoOfCartItems({ commit }, cartLength) {
            commit('SYNCNOOFCARTITEMS', cartLength)
        },
        logout({ commit }) {
            commit('LOGOUT')
        },
        DeleteProduct({ commit, state }, id) {
            let index = state.userData.cart.findIndex(obj => obj.id == id)
            state.userData.cart.splice(index, 1)
            service.methods.addToCart(JSON.parse(localStorage.getItem('loggedUserId')), state.userData.cart)
            commit('SYNCNOOFCARTITEMS', state.userData.cart.length)
        },
        DeleteAllCart({ commit, state }) {
            state.userData.cart = []
            service.methods.addToCart(JSON.parse(localStorage.getItem('loggedUserId')), state.userData.cart)
            commit('SYNCNOOFCARTITEMS', state.userData.cart.length)
        }
    }
})

export default store;