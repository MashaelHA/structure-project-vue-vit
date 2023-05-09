import { createRouter, createWebHistory } from "vue-router";
import example from "../components/example.vue"
import posts from "../components/posts.vue"
import post from "../components/post.vue"
import login from "../components/login.vue"

// export const routers = createRouter({
//     history: createWebHistory(),
//     routes: [
//         {
//             path: '/example',
//             name: 'example',
//             component: Example,
//         }
//     ]
// });

const routes = [
        {
            path: '/',
            name: 'home',
            component: () => import('../components/home.vue'),
        },
        {
            path: '/example',
            name: 'example',
            component: example,
            // component: (a) => import('src/components/example.vue'),
        },
        {
            path: '/posts',
            name: 'posts',
            component: posts,
            children: [
                {
                  path: ':id', //   '/posts/:id',
                  component: post,
                },
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: login,
        },
    ]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router