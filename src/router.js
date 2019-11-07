import Vue from 'vue';
import Router from 'vue-router';

import Work from './views/Work.vue';
import Home from './views/Home.vue';
import IBMQ from './views/IBMQ.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            component: Home
        },
        {
            path: '/work',
            component: Work
        },
        {
            path: '/ibmq',
            component: IBMQ
        }

    ]
})