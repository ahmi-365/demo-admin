// assets
import { IconBuildingWarehouse, IconClipboardList, IconFileAnalytics, IconFileText, IconHistory, IconListCheck, IconPackage, IconQrcode, IconReportAnalytics, IconSettings, IconUserCircle, IconUserCog, IconUserDown, IconUserEdit, IconUserSearch, IconUserShield, IconUserStar, IconUserUp } from '@tabler/icons-react';

const icons = {
  IconBuildingWarehouse,
  IconReportAnalytics,
  IconSettings,
  IconListCheck,
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

const inventoryManagement = {
  id: 'inventory-management',
  title: 'INVENTORY MANAGEMENT',
  type: 'group',
  children: [
    { id: 'total-stock-summary', title: 'Total Stock Summary', type: 'item', url: '/inventory/total-stock-summary', icon: icons.IconBuildingWarehouse },
    { id: 'reports', title: 'Reports', type: 'item', url: '/inventory/reports', icon: icons.IconReportAnalytics },
    {
      id: 'warehouse-settings',
      title: 'Warehouse Settings',
      type: 'collapse',
      icon: icons.IconSettings,
      children: [
        { id: 'floor-plan', title: 'Floor Plan', type: 'item', url: '/inventory/warehouse-settings/floor-plan', icon: icons.IconListCheck },
        { id: 'production-lines', title: 'Production Lines', type: 'item', url: '/inventory/warehouse-settings/production-lines', icon: icons.IconPackage },
        { id: 'grades', title: 'Grades', type: 'item', url: '/inventory/warehouse-settings/grades', icon: icons.IconClipboardList },
        { id: 'packagings', title: 'Packagings', type: 'item', url: '/inventory/warehouse-settings/packagings', icon: icons.IconPackage }
      ]
    },
    { id: 'inventory', title: 'Inventory', type: 'item', url: '/inventory', icon: icons.IconClipboardList },
    { id: 'history', title: 'History', type: 'item', url: '/inventory/history', icon: icons.IconHistory },
    { id: 'qr-code-scanner', title: 'QR Code Scanner', type: 'item', url: '/inventory/qr-code-scanner', icon: icons.IconQrcode },
    { id: 'audit-trail', title: 'Audit Trail', type: 'item', url: '/inventory/audit-trail', icon: icons.IconFileAnalytics },
    { id: 'audit-trail-report', title: 'Audit Trail Report', type: 'item', url: '/inventory/audit-trail-report', icon: icons.IconFileText },
    { id: 'system-logs', title: 'System Logs', type: 'item', url: '/inventory/system-logs', icon: icons.IconHistory },
    {
      id: 'users',
      title: 'Users',
      type: 'collapse',
      icon: icons.IconUserCog,
      children: [
        { id: 'user-listing', title: 'User Listing', type: 'item', url: '/inventory/users', icon: icons.IconUserSearch },
        { id: 'add-user', title: 'Add User', type: 'item', url: '/inventory/users/add', icon: icons.IconUserPlus }
      ]
    },
    {
      id: 'roles',
      title: 'Roles',
      type: 'collapse',
      icon: icons.IconUserShield,
      children: [
        { id: 'role-listing', title: 'Role Listing', type: 'item', url: '/inventory/roles', icon: icons.IconUserSearch },
        { id: 'add-role', title: 'Add Role', type: 'item', url: '/inventory/roles/add', icon: icons.IconUserPlus }
      ]
    }
  ]
};

export default inventoryManagement;