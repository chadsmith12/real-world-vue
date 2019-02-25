import Vue from "vue";
import Router from "vue-router";
import EventList from "./views/EventList.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "event-list",
      component: EventList
    },
    {
      path: "/event/:id",
      name: "event-show",
      props: true,
      // route level code-splitting
      // this generates a separate chunk (event.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "event" */ "./views/EventShow.vue")
    },
    {
      path: "/event/create",
      name: "event-create",
      // route level code-splitting
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "eventcreate" */ "./views/EventCreate.vue")
    }
  ]
});
