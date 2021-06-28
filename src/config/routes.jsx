import { HomePage } from "../pages/HomePage/HomePage";
import { SignInPage } from "../pages/SignInPage/SignInPage";
import { SignUpPage } from "../pages/SignUpPage/SignUpPage";
import { WelcomePage } from "../pages/WelcomePage/WelcomePage";
import { TopicPage } from "../pages/TopicPage/TopicPage";
import { RemindersPage } from "../pages/RemindersPage/RemindersPage";

const routes = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    path: "/sign-in",
    component: SignInPage,
    exact: false,
  },
  {
    path: "/sign-up",
    component: SignUpPage,
    exact: false,
  },
  {
    path: "/welcome",
    component: WelcomePage,
    exact: false,
  },
  {
    path: "/topic",
    component: TopicPage,
    exact: false,
  },
  {
    path: "/reminders",
    component: RemindersPage,
    exact: false,
  },
];

export default routes;
