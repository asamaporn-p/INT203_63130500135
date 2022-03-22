import {createRouter, createWebHistory} from 'vue-router'
import Profile from '../views/Profile.vue'

const history = createWebHistory()
const routes = [
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    }
]

const router = createRouter({history, routes})
export default router