import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout/index.vue'
import Login from '@/views/login/login.vue'
const Product = () => import('@/views/product/index.vue')
const List = () => import('@/views/product/list/index.vue')
const Category = () => import('@/views/product/category/index.vue')
const Case = () => import('@/views/product/case/index.vue')
const Registration = () => import('@/views/product/registration/index.vue')
const RegistrationForm = () => import('@/views/product/registrationForm/index.vue')

const Order = () => import('@/views/order/index.vue')
const OrderList = () => import('@/views/order/list/index.vue')
const OrderCollect = () => import('@/views/order/collect/index.vue')

const Advent = () => import('@/views/advent/index.vue')
const AdventList = () => import('@/views/advent/list/index.vue')

const Update = () => import('@/views/update/index.vue')
const UpdateError = () => import('@/views/update/error/index.vue')
const UpdatePriority = () => import('@/views/update/update-priority/index.vue')

const CoverSheets = () => import('@/views/cover/index.vue')
const LcoCase = () => import('@/views/cover/lco-case/index.vue')
const LfTest = () => import('@/views/cover/lf-test/index.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'layout', // 父组件无语name属性 去除，否则会警告
    component: Layout,
    children: [
      {
        path: '/',
        redirect: 'product/list',
      },
      {
        path: '/product',
        name: 'home',
        component: Product,
        children: [
          {
            path: 'list',
            name: 'list',
            component: List,
          },
          {
            path: 'category',
            name: 'category',
            component: Category,
          },
          {
            path: 'case',
            name: 'case',
            component: Case,
          },
          {
            path: 'registration',
            name: 'registration',
            component: Registration,
          },
          {
            path: 'registrationForm',
            name: 'registrationForm',
            component: RegistrationForm,
          },
          ,
        ],
      },
      {
        path: '/order',
        name: 'order',
        component: Order,
        children: [
          {
            path: 'orderlist',
            name: 'orderlist',
            component: OrderList,
          },
          {
            path: 'collect',
            name: 'collect',
            component: OrderCollect,
          },
        ],
      },
      {
        path: '/advent',
        name: 'advent',
        component: Advent,
        children: [
          {
            path: 'adventlist',
            name: 'adventlist',
            component: AdventList,
          },
        ],
      },
      {
        path: '/update',
        name: 'update',
        component: Update,
        children: [
          {
            path: 'error',
            name: 'error',
            component: UpdateError,
          },
          {
            path: 'update-priority',
            name: 'update-priority',
            component: UpdatePriority,
          },
        ],
      },
      {
        path: '/cover-sheets',
        name: 'cover-sheets',
        component: CoverSheets,
        children: [
          {
            path: 'lco-case',
            name: 'lco-case',
            component: LcoCase,
          },
          {
            path: 'lf-test',
            name: 'lf-test',
            component: LfTest,
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
