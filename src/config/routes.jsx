import { HomePage } from "../pages/HomePage/HomePage";
import { SignInPage } from "../pages/SignInPage/SignInPage";
import { SignUpPage } from "../pages/SignUpPage/SignUpPage";

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
];

export default routes;
