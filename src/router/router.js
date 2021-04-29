import Vue from "vue"
import VueRouter from "vue-router";
Vue.use(VueRouter);
//router
import index from "../views/index.vue";
import blog from "../views/blog.vue";
import post from "../views/post.vue";
import contact from "../views/contact.vue";
import survey from "../views/survey.vue";
import statistics from "../views/statistics.vue";
import login from "../views/login.vue";
import registration from "../views/registration.vue";
import profile from "../views/profile.vue";
import store from "../store/store";

function Authenticated(to, from, next) {
  if (store.getters.isLoggedIn) {
    next();
  } else {
    next({ name: "Login" });
  }
}
export default new VueRouter({
  mode: "history",
  routes: [
    {
      name: "Fooldal",
      path: "/",
      component: index,
    },
    {
      name: "Blog",
      path: "/blog",
      component: blog,
      beforeEnter: Authenticated,
    },
    {
      name: "blogCategory",
      path: "/blog/category/:categoryName",
      component: blog,
    },
    {
      name: "blogPost",
      path: "/blog/post/:postID",
      component: post,
      beforeEnter: Authenticated,
    },
    {
      name: "Kapcsolat",
      path: "/contact",
      component: contact,
    },
    {
      name: "Kerdoiv",
      path: "/survey",
      component: survey,
      beforeEnter: Authenticated,
    },
    {
      name: "Fizu terkep",
      path: "/statistics",
      component: statistics,
      beforeEnter: Authenticated,
    },
    {
      name: "Login",
      path: "/login",
      component: login,
    },
    {
      name: "Sign up",
      path: "/registration",
      component: registration,
    },
    {
      name: "Profile",
      path: "/profile",
      component: profile,
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
