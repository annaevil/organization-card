import { createRouter, createWebHistory } from 'vue-router'
import AddOrganization from '../components/AddOrganization.vue'
import OrganizationInfo from '../components/OrganizationInfo.vue'
import EditOrganization from '../components/EditOrganization.vue'

const routes = [
  // { path: '/', redirect: '/edit' },
  { path: '/', redirect: '/add'},
  { path: '/edit', component: EditOrganization },
  { path: '/info', component: OrganizationInfo },
  { path: '/add', component: AddOrganization },
  {
    path: '/info/:organizationSelect/:organizationName/:organizationTextAria/:organizationLogo',
    name: 'info',
    component: OrganizationInfo,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
