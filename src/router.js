import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

let mods = require.context("./router", true, /\.js$/);
let router_modules = [];
mods.keys().forEach((val) => {
  console.log(mods(val));
  router_modules = [...router_modules,...mods(val).default];
});

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      ...router_modules,
    {
      path: '/',
      redirect:"/home"
    },
  ]
});

router.beforeEach(function(to, from, next){
  next(true);
});

export default router;
