import { LuWallet } from "react-icons/lu";
import { LiaUserEditSolid } from "react-icons/lia";
import { FaHandHoldingUsd } from "react-icons/fa";
import { IoMdPower } from "react-icons/io";

export const LINKPAGES = [
  {
    linkId: 1,
    pageName: "Wallet",
    icon: LuWallet,
    to: "/wallet",
  },
  {
    linkId: 2,
    pageName: "Account Settings",
    icon: LiaUserEditSolid,
    to: "/profile-update",
  },
  {
    linkId: 3,
    pageName: "Trade Guidelines",
    icon: FaHandHoldingUsd,
    to: "/",
  },
  {
    linkId: 4,
    pageName: "Logout",
    icon: IoMdPower,
    to: "/",
    style: "mt-20",
  },
];
