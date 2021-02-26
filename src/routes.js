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

import Microsoft from "./views/dashboard/company/microsoft"
import Facebook from "./views/dashboard/company/facebook"
import Paypal from "./views/dashboard/company/paypal"
import Spotify from "./views/dashboard/company/spotify"

import MicrosoftStudent from "./views/dashboard/student/microsoft"
import FacebookStudent from "./views/dashboard/student/facebook"
import PaypalStudent from "./views/dashboard/student/paypal"
import SpotifyStudent from "./views/dashboard/student/spotify"

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
  {
    path: "/try-dashboard/microsoft-appliedStudents",
    name: "Microsoft-Applied-Students",
    icon: "nc-icon nc-chart-pie-35",
    component: MicrosoftStudent,
    layout: "/admin",
  },
  {
    path: "/try-dashboard/facebook-appliedStudents",
    name: "Microsoft-Applied-Students",
    icon: "nc-icon nc-chart-pie-35",
    component: FacebookStudent,
    layout: "/admin",
  },
  {
    path: "/try-dashboard/paypal-appliedStudents",
    name: "Microsoft-Applied-Students",
    icon: "nc-icon nc-chart-pie-35",
    component: PaypalStudent,
    layout: "/admin",
  },
  {
    path: "/try-dashboard/spotify-appliedStudents",
    name: "Microsoft-Applied-Students",
    icon: "nc-icon nc-chart-pie-35",
    component: SpotifyStudent,
    layout: "/admin",
  },

  {
    path: "/try-dashboard/microsoft",
    name: "Microsoft",
    icon: "nc-icon nc-chart-pie-35",
    component: Microsoft,
    layout: "/admin",
  },
  {
    path: "/try-dashboard/facebook",
    name: "Facebook",
    icon: "nc-icon nc-chart-pie-35",
    component: Facebook,
    layout: "/admin",
  },
  {
    path: "/try-dashboard/paypal",
    name: "Paypal",
    icon: "nc-icon nc-chart-pie-35",
    component: Paypal,
    layout: "/admin",
  },
  {
    path: "/try-dashboard/spotify",
    name: "Spotify",
    icon: "nc-icon nc-chart-pie-35",
    component: Spotify,
    layout: "/admin",
  },
];

export default dashboardRoutes;
