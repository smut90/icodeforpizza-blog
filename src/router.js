import Vue from 'vue'
import Router from 'vue-router'
import Home from '../src/components/Home'
import Article_0 from '../src/components/mainContents/articles/Article_0'
import Article_1 from '../src/components/mainContents/articles/Article_1'
import Article_2 from '../src/components/mainContents/articles/Article_2'
import Article_3 from '../src/components/mainContents/articles/Article_3'
import Article_4 from '../src/components/mainContents/articles/Article_4'
import Article_5 from '../src/components/mainContents/articles/Article_5'
import Article_6 from '../src/components/mainContents/articles/Article_6'
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
            },
            {
                path: '/everything-you-need-to-know-about-go-internal-serve-v00003',
                name: 'article_v00003',
                component: Article_2,
                meta: {
                    guest: true
                }
            },
            {
                path: '/everything-you-need-to-know-about-go-restful-endpoints-v00004',
                name: 'article_v00004',
                component: Article_3,
                meta: {
                    guest: true
                }
            },
            {
                path: '/everything-you-need-to-know-about-integrate-swagger-to-go-rest-endpoints-v00005',
                name: 'article_v00005',
                component: Article_4,
                meta: {
                    guest: true
                }
            },
            {
                path: '/everything-you-need-to-know-about-integrate-postgres-sql-in-go-v00006',
                name: 'article_v00006',
                component: Article_5,
                meta: {
                    guest: true
                }
            },
            {
                path: '/everything-you-need-to-know-about-integrating-external-services-in-go-v00007',
                name: 'article_v00007',
                component: Article_6,
                meta: {
                    guest: true
                }
            }
        ]

    },
);

export default router
