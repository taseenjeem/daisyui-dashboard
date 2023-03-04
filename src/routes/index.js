// All components mapping with path for internal routes

import { lazy } from 'react'

const Dashboard = lazy(() => import('../pages/protected/Dashboard'))
const Blank = lazy(() => import('../pages/protected/Blank'))
const TransactionLogs = lazy(() => import('../pages/protected/TransactionLogs'))
const Contact = lazy(() => import('../pages/protected/Contact'))
const DraftServices = lazy(() => import('../pages/protected/DraftServices'))
const OrderService = lazy(() => import('../pages/protected/OrderService.js'))
const MAViewAll = lazy(() => import('../pages/protected/MAViewAll.js'))
const AddNewAssistant = lazy(() => import('../pages/protected/AddNewAssistant'))
const MCViewAll = lazy(() => import('../pages/protected/MCViewAll'))
const AddNewClient = lazy(() => import('../pages/protected/AddNewClient'))
const OrderedProjects = lazy(() => import('../pages/protected/OrderedProjects'))
const RecurringServices = lazy(() => import('../pages/protected/RecurringServices'))
const ScheduledServices = lazy(() => import('../pages/protected/ScheduledServices'))
const DepositFunds = lazy(() => import('../pages/protected/DepositFunds'))


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
    path: '/view-projects/ordered-projects',
    component: OrderedProjects,
  },
  {
    path: '/view-projects/recurring-services',
    component: RecurringServices,
  },
  {
    path: '/view-projects/scheduled-services',
    component: ScheduledServices,
  },
  {
    path: '/deposit-funds',
    component: DepositFunds,
  },
  {
    path: '/blank',
    component: Blank,
  },
]

export default routes
