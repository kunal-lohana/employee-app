import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'AddEmployee',
    component: () => import('@/components/AddEmployee.vue'),
    props: route => ({ query: route.query.empId})
  },
  {
    path: '/list-employee',
    name: 'EmployeeList',
    component: () => import('@/components/EmployeeList.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
