import Booking from "../pages/Booking/Booking";
import Cart from "../pages/Cart/Cart";
import Detail from "../pages/Detail/Detail";
import Error from "../pages/Error/Error";
import Forgot from "../pages/Forgot/Forgot";
import Products from "../pages/Products/Products";
import Signin from "../pages/Signin/Signin";
import Signup from "../pages/Signup/Signup";
import Submit from "../pages/Submit/Submit";
import Success from "../pages/Success/Success";

const WebRoutes = [
  { path: "/san-pham", component: Products },
  { path: "/chi-tiet-san-pham", component: Detail },
  { path: "/dang-nhap", component: Signin },
  { path: "/dang-ky-tai-khoan", component: Signup },
  { path: "/quen-mat-khau", component: Forgot },
  { path: "/thanh-cong", component: Success },
  { path: "/dat-lich", component: Booking },
  { path: "/gio-hang", component: Cart },
  { path: "/chi-tiet-don-hang", component: Submit },
  { path: "*", component: Error },
];

export { WebRoutes };
