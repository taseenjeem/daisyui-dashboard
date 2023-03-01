/** Icons are imported separatly to reduce build time */
import { MdDashboardCustomize, MdManageAccounts, MdPeopleAlt, MdLocalOffer } from 'react-icons/md';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';
import { TfiWrite } from 'react-icons/tfi';
import { RiContactsBookFill, RiDraftFill, RiLuggageDepositFill } from 'react-icons/ri';
import { GrTransaction } from 'react-icons/gr';

const iconClasses = `h-6 w-6`
const submenuIconClasses = `h-5 w-5`

const routes = [

  {
    path: '/app/dashboard',
    icon: <MdDashboardCustomize className={iconClasses} />,
    name: 'Dashboard',
  },
  {
    path: '', //no url needed as this has submenu
    icon: <MdManageAccounts className={`${iconClasses} inline`} />, // icon component
    name: 'Manage Assistants', // name that appear in Sidebar
    submenu: [
      {
        path: '/app/manage-assistant/view-all',
        icon: <TbGridDots className={submenuIconClasses} />,
        name: 'View All',
      },
      {
        path: '/app/manage-assistant/add-new-assistant', //url
        icon: <TbGridDots className={submenuIconClasses} />, // icon component
        name: 'Add New Assistant', // name that appear in Sidebar
      },
    ]
  },
  {
    path: '', //no url needed as this has submenu
    icon: <MdPeopleAlt className={`${iconClasses} inline`} />, // icon component
    name: 'Manage Clients', // name that appear in Sidebar
    submenu: [
      {
        path: '/app/manage-clients/view-all',
        icon: <TbGridDots className={submenuIconClasses} />,
        name: 'View All',
      },
      {
        path: '/app/manage-clients/add-new-client', //url
        icon: <TbGridDots className={submenuIconClasses} />, // icon component
        name: 'Add New Clients', // name that appear in Sidebar
      },
    ]
  },
  {
    path: '', //no url needed as this has submenu
    icon: <AiOutlineFundProjectionScreen className={`${iconClasses} inline`} />, // icon component
    name: 'View Projects', // name that appear in Sidebar
    submenu: [
      {
        path: '/app/view-projects/ordered-projects',
        icon: <TbGridDots className={submenuIconClasses} />,
        name: 'Ordered Projects',
      },
      {
        path: '/app/view-projects/Recurring Services', //url
        icon: <TbGridDots className={submenuIconClasses} />, // icon component
        name: 'Recurring Services', // name that appear in Sidebar
      },
      {
        path: '/app/view-projects/scheduled-services', //url
        icon: <TbGridDots className={submenuIconClasses} />, // icon component
        name: 'Scheduled Services', // name that appear in Sidebar
      },
    ]
  },
  {
    path: '/app/order-services',
    icon: <TfiWrite className={iconClasses} />,
    name: 'Order Services',
  },
  {
    path: '/app/draft-services',
    icon: <RiDraftFill className={iconClasses} />,
    name: 'Draft Services',
  },
  {
    path: '', //no url needed as this has submenu
    icon: <MdLocalOffer className={`${iconClasses} inline`} />, // icon component
    name: 'Services Offered', // name that appear in Sidebar
    submenu: [
      {
        path: '/app/services-offered/view-all',
        icon: <TbGridDots className={submenuIconClasses} />,
        name: 'View All',
      },
      {
        path: '/app/services-offered/download-price-list', //url
        icon: <TbGridDots className={submenuIconClasses} />, // icon component
        name: 'Download Price List', // name that appear in Sidebar
      },
    ]
  },
  {
    path: '/app/deposit-funds',
    icon: <RiLuggageDepositFill className={iconClasses} />,
    name: 'Deposit Funds',
  },
  {
    path: '/app/transaction-logs',
    icon: <GrTransaction className={iconClasses} />,
    name: 'Transaction Logs',
  },
  {
    path: '/app/contacts',
    icon: <RiContactsBookFill className={iconClasses} />,
    name: 'Contact',
  },

]

export default routes


