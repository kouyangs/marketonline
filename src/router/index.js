import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

import signIn from '../views/Homepage/sign_in.vue';

import Middlewares from '../middlewares/index';

import Add from '../views/Homepage/Product/Form/Add.vue';
import Province from '../views/Homepage/Province/index';
import Country from '../views/Homepage/Country/index';
import City from '../views/Homepage/City/index';
import Category from '../views/Homepage/Category/index';
import Unit from '../views/Homepage/Unit/index';
import Color from '../views/Homepage/Color/index';
import Size from '../views/Homepage/Size/index';
import Rule from '../views/Homepage/Rule/index';


Vue.use(VueRouter)
const routes = [

  {
    path: '/sign-in',
    name: 'sign.in',
    component: signIn,
    meta: {
      middleware: [Middlewares.guest],
      hidden: true,
    }
  },

  
  {
    path: '/Add',
    name: 'Add',
    component: Add,
    meta: {
      middleware: [Middlewares.auth],

    }
  },

  {
    path: '/Province',
    name: 'Province',
    component: Province,
    meta: {
      middleware: [Middlewares.auth],

    }
  },
   {
     path: '/Country',
     name: 'Country',
     component: Country,
     meta: {
       middleware: [Middlewares.auth],

     }
  },
    {
      path: '/City',
      name: 'City',
      component: City,
      meta: {
        middleware: [Middlewares.auth],

      }
    },
  

      {
        path: '/Category',
        name: 'Category',
        component: Category,
        meta: {
          middleware: [Middlewares.auth],

        }
  },
      
       {
         path: '/Unit',
         name: 'Unit',
         component: Unit,
         meta: {
           middleware: [Middlewares.auth],

         }
  },
       
        {
          path: '/Color',
          name: 'Color',
          component: Color,
          meta: {
            middleware: [Middlewares.auth],

          }
  },
        
        {
          path: '/Size',
          name: 'Size',
          component: Size,
          meta: {
            middleware: [Middlewares.auth],

          }
  },
        
        {
          path: '/Rule',
          name: 'Rule',
          component: Rule,
          meta: {
            middleware: [Middlewares.auth],

          }
        },


  {
    path: '/:id',
    name: 'home',
    component: HomeView,

    meta: {
      middleware: [Middlewares.auth],

    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

function nextCheck(context, middleware, index) {
  const nextMiddleware = middleware[index];

  if (!nextMiddleware) return context.next;

  return (...parameters) => {
    context.next(...parameters);
    const nextMidd = nextCheck(context, middleware, index + 1);

    nextMiddleware({
      ...context,
      nextMidd
    });
  }
}

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware) ? to.meta.middleware : [to.meta.middleware];
    const ctx = {
      from,
      next,
      router,
      to
    }

    const nextMiddleware = nextCheck(ctx, middleware, 1);
    return middleware[0]({
      ...ctx,
      nextMiddleware
    });

  }
  return next();
});
export default router