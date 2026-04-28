// assets
import { IconBuildingWarehouse, IconCalendar, IconClipboardList, IconDashboard, IconFileAnalytics, IconFileText, IconHistory, IconKey, IconListCheck, IconLock, IconMapPin, IconPackage, IconQrcode, IconReportAnalytics, IconSettings, IconTruck, IconUserCheck, IconUserCircle, IconUserCog, IconUserDown, IconUserEdit, IconUserPlus, IconUsers, IconUserSearch, IconUserShield, IconUserStar, IconUserUp, IconUserX } from '@tabler/icons-react';

const icons = {
  IconDashboard,
  IconUsers,
  IconUserPlus,
  IconUserCheck,
  IconUserX,
  IconTruck,
  IconSettings,
  IconReportAnalytics,
  IconCalendar,
  IconKey,
  IconBuildingWarehouse,
  IconListCheck,
  IconLock,
  IconMapPin,
  IconPackage,
  IconHistory,
  IconQrcode,
  IconClipboardList,
  IconFileAnalytics,
  IconFileText,
  IconUserCog,
  IconUserShield,
  IconUserCircle,
  IconUserEdit,
  IconUserSearch,
  IconUserStar,
  IconUserUp,
  IconUserDown
};

const orderManagement = {
  id: 'order-management',
  title: 'ORDER MANAGEMENT',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard',
      icon: icons.IconDashboard
    },
    {
      id: 'user-management',
      title: 'User Management',
      type: 'collapse',
      icon: icons.IconUsers,
      children: [
        { id: 'view-users', title: 'View Users', type: 'item', url: '/users', icon: icons.IconUserSearch },
        { id: 'add-user', title: 'Add User', type: 'item', url: '/users/add', icon: icons.IconUserPlus }
      ]
    },
    {
      id: 'customers',
      title: 'Customers',
      type: 'collapse',
      icon: icons.IconUserStar,
      children: [
        { id: 'view-customers', title: 'View Customers', type: 'item', url: '/customers', icon: icons.IconUserSearch },
        { id: 'add-customer', title: 'Add Customer', type: 'item', url: '/customers/add', icon: icons.IconUserPlus },
        { id: 'reset-customer-password', title: 'Reset Customer Password', type: 'item', url: '/customers/reset-password', icon: icons.IconLock }
      ]
    },
    {
      id: 'orders',
      title: 'Orders',
      type: 'collapse',
      icon: icons.IconClipboardList,
      children: [
        { id: 'view-pending-orders', title: 'View Pending Orders', type: 'item', url: '/orders/pending', icon: icons.IconListCheck },
        { id: 'view-accepted-orders', title: 'View Accepted Orders', type: 'item', url: '/orders/accepted', icon: icons.IconUserCheck },
        { id: 'view-declined-orders', title: 'View Declined Orders', type: 'item', url: '/orders/declined', icon: icons.IconUserX },
        { id: 'add-order', title: 'Add Order', type: 'item', url: '/orders/add', icon: icons.IconUserPlus }
      ]
    },
    {
      id: 'logistics',
      title: 'Logistics',
      type: 'collapse',
      icon: icons.IconTruck,
      children: [
        { id: 'view-accepted-orders-logistics', title: 'View Accepted Orders', type: 'item', url: '/logistics/accepted-orders', icon: icons.IconUserCheck },
        { id: 'view-completed-orders-logistics', title: 'View Completed Orders', type: 'item', url: '/logistics/completed-orders', icon: icons.IconUserCheck }
      ]
    },
    { id: 'export-report', title: 'Export Report Page', type: 'item', url: '/export-report', icon: icons.IconReportAnalytics },
    {
      id: 'settings',
      title: 'Settings',
      type: 'collapse',
      icon: icons.IconSettings,
      children: [
        {
          id: 'public-holidays',
          title: 'Public Holidays',
          type: 'collapse',
          icon: icons.IconCalendar,
          children: [
            { id: 'view-public-holidays', title: 'View Public Holidays', type: 'item', url: '/settings/public-holidays', icon: icons.IconCalendar },
            { id: 'add-public-holiday', title: 'Add Public Holiday', type: 'item', url: '/settings/public-holidays/add', icon: icons.IconCalendar }
          ]
        },
        {
          id: 'grades',
          title: 'Grades',
          type: 'collapse',
          icon: icons.IconKey,
          children: [
            { id: 'view-grades', title: 'View Grades', type: 'item', url: '/settings/grades', icon: icons.IconKey },
            { id: 'add-grade', title: 'Add Grade', type: 'item', url: '/settings/grades/add', icon: icons.IconKey }
          ]
        },
        {
          id: 'transporter',
          title: 'Transporter',
          type: 'collapse',
          icon: icons.IconTruck,
          children: [
            { id: 'view-transporters', title: 'View Transporters', type: 'item', url: '/settings/transporters', icon: icons.IconTruck },
            { id: 'add-transporter', title: 'Add Transporter', type: 'item', url: '/settings/transporters/add', icon: icons.IconTruck }
          ]
        },
        {
          id: 'locations',
          title: 'Locations',
          type: 'collapse',
          icon: icons.IconMapPin,
          children: [
            { id: 'view-locations', title: 'View Locations', type: 'item', url: '/settings/locations', icon: icons.IconMapPin },
            { id: 'add-locations', title: 'Add Locations', type: 'item', url: '/settings/locations/add', icon: icons.IconMapPin }
          ]
        },
        { id: 'change-password', title: 'Change Password', type: 'item', url: '/settings/change-password', icon: icons.IconLock }
      ]
    }
  ]
};

export default orderManagement;