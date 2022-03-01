import { createRouter, createWebHistory } from 'vue-router'

import UploadView from '../views/UploadView.vue'
import PresentationView from "../views/PresentationView.vue";

const routes = [
  {
    path: '/',
    name: 'upload-file',
    component: UploadView,
  },
  {
    path: '/presentation',
    name: 'presentation',
    component: PresentationView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
