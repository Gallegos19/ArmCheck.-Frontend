// assets
import { IconHome } from '@tabler/icons';

// constant
const icons = { IconHome };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  title: 'Inicio',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Inicio',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.IconHome,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
