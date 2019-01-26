import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let mods = require.context("./vuex",true,/([\w]+)\.js/);
let modules = {};
mods.keys().forEach(val => {
  let name = /(\w|-)+/.exec(val);
  modules[name[0]] = mods(val).default;
});

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules
})
