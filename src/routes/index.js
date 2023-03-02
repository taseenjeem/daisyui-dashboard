// All components mapping with path for internal routes

import { lazy } from 'react'

const Dashboard = lazy(() => import('../pages/protected/Dashboard'))
const Page404 = lazy(() => import('../pages/protected/404'))
const Blank = lazy(() => import('../pages/protected/Blank'))
const Charts = lazy(() => import('../pages/protected/Charts'))
const Integration = lazy(() => import('../pages/protected/Integration'))
const Bills = lazy(() => import('../pages/protected/Bills'))
const ProfileSettings = lazy(() => import('../pages/protected/ProfileSettings'))
const GettingStarted = lazy(() => import('../pages/GettingStarted'))
const DocFeatures = lazy(() => import('../pages/DocFeatures'))
const DocComponents = lazy(() => import('../pages/DocComponents'))
const TransactionLogs = lazy(() => import('../pages/protected/TransactionLogs'))
const Contact = lazy(() => import('../pages/protected/Contact'))
const DraftServices = lazy(() => import('../pages/protected/DraftServices'))
const OrderService = lazy(() => import('../pages/protected/OrderService.js'))
const MAViewAll = lazy(() => import('../pages/protected/MAViewAll.js'))
const AddNewAssistant = lazy(() => import('../pages/protected/AddNewAssistant'))
const MCViewAll = lazy(() => import('../pages/protected/MCViewAll'))
const AddNewClient = lazy(() => import('../pages/protected/AddNewClient'))


const routes = [
  {
    path: '/dashboard', // the url
    component: Dashboard, // view rendered
  },
  {
    path: '/transaction-logs', // the url
    component: TransactionLogs, // view rendered
  },
  {
    path: '/contacts',
    component: Contact,
  },
  {
    path: '/draft-services',
    component: DraftServices,
  },
  {
    path: '/order-services',
    component: OrderService,
  },
  {
    path: '/manage-assistant/view-all',
    component: MAViewAll,
  },
  {
    path: '/manage-assistant/add-new-assistant',
    component: AddNewAssistant,
  },
  {
    path: '/manage-clients/view-all',
    component: MCViewAll,
  },
  {
    path: '/manage-clients/add-new-client',
    component: AddNewClient,
  },
  {
    path: '/integration',
    component: Integration,
  },
  {
    path: '/charts',
    component: Charts,
  },
  {
    path: '/404',
    component: Page404,
  },
  {
    path: '/blank',
    component: Blank,
  },
]

export default routes
