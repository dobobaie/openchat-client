import VueRouter from 'vue-router';

import Home from '@/views/Home.vue';
import NotFound from '@/views/NotFound.vue';

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      name: 'HOME',
      path: '/',
      component: Home,
      beforeEnter(to, from, next) {
        next(
          router.app.$sAuth.isConnected()
            ? '/dashboard'
            : undefined
        );
      }
    },
    {
      path: '*',
      component: NotFound
    }
  ]
});

export default router;
