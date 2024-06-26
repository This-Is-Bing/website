import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue';
import ProfileView from '../views/ProfileView.vue';
import OverviewView from '../views/OverviewView.vue';
import ProductCustomizationView from '../views/ProductCustomizationView.vue';
import ProductDetailsView from '../views/ProductDetailsView.vue';
import InstallationView from '../views/InstallationView.vue';
import InstallationDetailsView from '../views/InstallationDetailsView.vue';
import StockView from '../views/StockView.vue';
import StoreView from '../views/StoreView.vue';
import MeterView from '../views/MeterView.vue';
import RefundView from '../views/RefundView.vue';
import NotFoundView from '../views/NotFoundView.vue'
import MeterDetailsView from '../views/MeterDetailsView.vue'
import LabTestDetailsView from '../views/LabTestDetailsView.vue'
import RefundDetailsView from '../views/RefundDetailsView.vue'
import LabTestView from '../views/LabTestView.vue';
import StockDetailsView from '../views/StockDetailsView.vue';

const routes = [
  {
    path: '/:pathMatch(.*)*',
    name: 'not_found',
    component: NotFoundView  
  },
  {
    path: '/',
    name: 'dashboard',
    component: DashboardView  
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView  
  },
  {
    path: '/inventory/overview',
    name: 'overview',
    component: OverviewView  
  },
  {
    path: '/inventory/customization',
    name: 'customization',
    component: ProductCustomizationView  
  },
  {
    path: '/inventory/installation',
    name: 'installation',
    component: InstallationView  
  },
  {
    path: '/inventory/installation/installation_details',
    name: 'installationDetails',
    component: InstallationDetailsView,
    props: (route) => ({ id: route.query.id }) 
  },
  {
    path: '/inventory/labtest',
    name: 'labtest',
    component: LabTestView  
  },
  {
    path: '/inventory/labtest/labtest_details',
    name: 'LabTestDetails',
    component: LabTestDetailsView,
    props: (route) => ({ id: route.query.id }) 
  },
  {
    path: '/inventory/stock',
    name: 'stock',
    component: StockView  
  },
  {
    path: '/inventory/store',
    name: 'store',
    component: StoreView  
  },
  {
    path: '/inventory/stock/stock_details',
    name: 'stockDetails',
    component: StockDetailsView,
    props: (route) => ({ id: route.query.id }) 
  },
  {
    path: '/meter',
    name: 'meter',
    component: MeterView  
  },
  {
    path: '/meter/meter_details',
    name: 'meterDetails',
    component: MeterDetailsView,
    props: (route) => ({ id: route.query.id }) 
  },
  {
    path: '/refund',
    name: 'refund',
    component: RefundView  
  },
  {
    path: '/refund/refund_details',
    name: 'refundDetails',
    component: RefundDetailsView,
    props: (route) => ({ id: route.query.id })
  },
  {
    path: '/inventory/product_details',
    name: 'productDetails',
    component: ProductDetailsView,
    props: (route) => ({ id: route.query.id })
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
