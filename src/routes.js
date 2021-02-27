
import Dashboard from "./views/Dashboard.js";
import Appliedbranchwise from './views/student/applied/appliedbranchwise';
import Appliedcompanywise from './views/student/applied/appliedcompanywise';
import Selectedbranchwise from './views/student/selected/selectedbranchwise';
import Selectedcompanywise from './views/student/selected/selectedcompanywise';
import Jobsbranchwise from './views/jobs/jobsbranchwise';
import Jobscompanywise from './views/jobs/jobscompanywise';
import Notifications from './views/notifications';
import Settings from './views/settings';
import Signin from './components/Signin';
import Addjobs from './views/addjobs';
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
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/student/appliedbranch",
    name: "Applied (Branchwise)",
    component: Appliedbranchwise,
    layout: "/admin",
  },
  {
    path: "/student/appliedcompany",
    name: "Applied (Companywise)",
    component: Appliedcompanywise,
    layout: "/admin",
  },
 
  {
    path: "/student/selectedbranch",
    name: "Selected (Branchwise)",
    component: Selectedbranchwise,
    layout: "/admin",
  },
  {
    path: "/student/selectedcompany",
    name: "Selected (Companywise)",
    component: Selectedcompanywise,
    layout: "/admin",
  },
  {
    path: "/jobs/branch",
    name: "Job Details (Branchwise)",
    component: Jobsbranchwise,
    layout: "/admin",
  },
  {
    path: "/jobs/company",
    name: "Job Details (Companywise)",
    component: Jobscompanywise,
    layout: "/admin",
  },
  {
    path: "/addjobs",
    name: "Add Jobs",
    component: Addjobs,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
    layout: "/admin",
  },
  {
    path: "/",
    name: "Logout",
    component: Signin,
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
