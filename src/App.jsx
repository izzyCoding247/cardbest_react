import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./mobile/Home";
import Profile from "./mobile/Profile";
import Sell from "./mobile/Sell";
import RootLayout from "./layouts/RootLayout";
import ErrorPage from "./mobile/ErrorPage";
import Coupon from "./mobile/Coupon";
import Ranking from "./mobile/Ranking";
import Transactions from "./mobile/Transactions";
import Invite from "./mobile/Invite";
import HomeNavLayout from "./layouts/HomeNavLayout";
import Wallet from "./mobile/Wallet";
import TransactionDetails from "./mobile/TransactionDetails";
import ProfileUpdate from "./mobile/ProfileUpdate";
import AddAccount from "./mobile/AddAccount";
import Withdrawal from "./mobile/Withdrawal";
import Message from "./mobile/Message";
import Auth from "./mobile/Auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
  {
    path: "/",
    element: <HomeNavLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/coupon", element: <Coupon /> },
      { path: "/ranking", element: <Ranking /> },
      { path: "/transaction", element: <Transactions /> },
      { path: "/invite", element: <Invite /> },
      { path: "/sell", element: <Sell /> },
      { path: "/wallet", element: <Wallet /> },
      { path: "/transaction/:tId", element: <TransactionDetails /> },
      { path: "/profile-update/", element: <ProfileUpdate /> },
      { path: "/profile-update/:uId", element: <ProfileUpdate /> },
      { path: "/add-account/", element: <AddAccount /> },
      { path: "/withdrawal/", element: <Withdrawal /> },
      { path: "/message/", element: <Message /> },
      { path: "/authentication/", element: <Auth /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
