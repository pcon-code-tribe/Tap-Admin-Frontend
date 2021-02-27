
import Dashboard from "./views/Dashboard.js";
import Appliedbranchwise from './views/student/applied/appliedbranchwise';
import Appliedcompanywise from './views/student/applied/appliedcompanywise';
import Selectedbranchwise from './views/student/selected/selectedbranchwise';
import Selectedcompanywise from './views/student/selected/selectedcompanywise';
import Jobsbranchwise from './views/jobs/jobsbranchwise';
import Jobscompanywise from './views/jobs/jobscompanywise';
import Notifications from './views/notifications';
import Settings from './views/settings';
import Signin from './components/Singin';
import Addjobs from './views/addjobs';

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
    path: "/logout",
    name: "Logout",
    component: Signin,
    layout: "/admin",
  },
  
];

export default dashboardRoutes;
