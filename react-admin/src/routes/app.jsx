import Dashboard from 'views/Dashboard/Dashboard';
import UserProfile from 'views/UserProfile/UserProfile';
import UserManagement from 'views/User_Management/User_Management';
import Typography from 'views/Typography/Typography';
import Icons from 'views/Icons/Icons';
import Maps from 'views/Maps/Maps';
import Notifications from 'views/Notifications/Notifications';
// import Upgrade from 'views/Upgrade/Upgrade';

const appRoutes = [
    { path: "/dashboard", name: "Dashboard", icon: "pe-7s-graph", component: Dashboard },
    { path: "/user", name: "User Profile", icon: "pe-7s-user", component: UserProfile },
    { path: "/User_List", name: "User List", icon: "pe-7s-note2", component: UserManagement },
    { path: "/typography", name: "Typography", icon: "pe-7s-news-paper", component: Typography },
    { path: "/icons", name: "Icons", icon: "pe-7s-science", component: Icons },
    { path: "/maps", name: "Maps", icon: "pe-7s-map-marker", component: Maps },
    { path: "/notifications", name: "Notifications", icon: "pe-7s-bell", component: Notifications },
    // { upgrade: true, path: "/upgrade", name: "Upgrade to PRO", icon: "pe-7s-rocket", component: Upgrade },
    { redirect: true, path:"/", to:"/dashboard", name: "Dashboard" }
];

export default appRoutes;
