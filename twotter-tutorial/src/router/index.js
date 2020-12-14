import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import UserProfile from "../views/UserProfile.vue";
import Admin from "../views/Admin.vue";

import store from "../store";
import { users } from "../assets/users";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/user/:userId",
    name: "UserProfile",
    component: UserProfile,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    meta: {
      requiresAdmin: true,
    },
  },
  // {
  //   path: '/about',
  //   name: 'About',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

//Router Guards to limit the access of the regular user and let the admin user
//sees the admin dashboard page
router.beforeEach(async (to, from, next) => {
  console.log(store);
  const user = store.state.User.user;

  if (!user) {
    await store.dispatch("User/setUser", users[0]);
  }
  const isAdmin = false;
  const requiresAdmin = to.matched.some((record) => record.meta.requiresAdmin);

  if (requiresAdmin && !isAdmin) next({ name: "Home" });
  else next();
});

export default router;
