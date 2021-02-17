import Dashboard from "./views/Dashboard.js";
import appliedbranchwise from './views/student/applied/appliedbranchwise';
import appliedcompanywise from './views/student/applied/appliedcompanywise';
import selectedbranchwise from './views/student/selected/selectedbranchwise';
import selectedcompanywise from './views/student/selected/selectedcompanywise';
import jobsbranchwise from './views/jobs/jobsbranchwise';
import jobscompanywise from './views/jobs/jobscompanywise';
import notifications from './views/notifications';
import profile from './views/profile';
import settings from './views/settings';


//different routes
const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/appliedbr",
    name: "Applied (Branchwise)",
    icon: "nc-icon nc-circle-09",
    component: appliedbranchwise,
    layout: "/admin",
  },
  {
    path: "/appliedcmp",
    name: "Applied (Companywise)",
    icon: "nc-icon nc-notes",
    component: appliedcompanywise,
    layout: "/admin",
  },
 
  {
    path: "/selectedbr",
    name: "Selected (Branchwise)",
    icon: "nc-icon nc-atom",
    component: selectedbranchwise,
    layout: "/admin",
  },
  {
    path: "/selectedcmp",
    name: "Selected (Companywise)",
    icon: "nc-icon nc-bell-55",
    component: selectedcompanywise,
    layout: "/admin",
  },
  {
    path: "/jobsbr",
    name: "Job Details (Branchwise)",
    icon: "nc-icon nc-bell-55",
    component: jobsbranchwise,
    layout: "/admin",
  },
  {
    path: "/jobscmp",
    name: "Job Details (Companywise)",
    icon: "nc-icon nc-bell-55",
    component: jobscompanywise,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: notifications,
    layout: "/admin",
  },
  {
    path: "/profile",
    name: "Profile",
    icon: "nc-icon nc-bell-55",
    component: profile,
    layout: "/admin",
  },
  {
    path: "/settings",
    name: "Settings",
    icon: "nc-icon nc-bell-55",
    component: settings,
    layout: "/admin",
  },
];

export default dashboardRoutes;
