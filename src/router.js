import Vue from 'vue'
import Router from 'vue-router'
import Home from '../src/components/Home'
import Article_0 from '../src/components/mainContents/articles/Article_0'
import Article_1 from '../src/components/mainContents/articles/Article_1'
import About from '../src/components/mainContents/articles/Article_About'

Vue.use(Router);

let router = new Router({
        mode: 'history',

        routes: [
            {
                path: '*',
                redirect: '/home'
            },
            {
                path: '/home',
                name: 'Home',
                component: Home,
                meta: {
                    guest: true
                }
            },
            {
                path: '/about-me',
                name: 'about',
                component: About,
                meta: {
                    guest: true
                }
            },
            {
                path: '/everything-you-need-to-know-about-react-app-v00001',
                name: 'article_v00001',
                component: Article_0,
                meta: {
                    guest: true
                }
            },
            {
                path: '/everything-you-need-to-know-about-go-packages-v00002',
                name: 'article_v00002',
                component: Article_1,
                meta: {
                    guest: true
                }
            }
        ]

    },
);

export default router
