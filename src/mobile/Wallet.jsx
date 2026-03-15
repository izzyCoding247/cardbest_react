import { FaPlus } from "react-icons/fa6";
import BackNav from "./components/BackNav";
import Balance from "./components/homeComponents/Balance";
import Accounts from "./components/walletComponent/Accounts";
import { WALLETDATA } from "../data/WalletData";
import { Link } from "react-router-dom";

export default function Wallet() {
  const walletData = WALLETDATA;
  return (
    <div className="bg-gray-50 pt-13 h-dvh">
      <BackNav to="/">Wallet</BackNav>
      <div className="fixed w-dvw bg-gray-50 pb-2 pt-7">
        <div className=" mx-3 p-4 mb-3 rounded-2xl shadow-2xs bg-white ">
          <Balance />
        </div>
        <Link
          to="/add-account"
          className="flex justify-center items-center py-3 rounded-full bg-white shadow-sm hover:shadow-lg mx-5 text-gray-600 mb-3"
        >
          <span className="text-green-600 mr-1">
            <FaPlus />
          </span>{" "}
          Add New Account
        </Link>
        <p className="text-sm px-5">
          Withdrawal Accounts ({walletData?.length ?? 0})
        </p>
      </div>
      <Accounts walletData={walletData} />
      <p className="fixed bottom-0 bg-white w-full px-5 flex justify-center pb-3">
        <Link
          to="/withdrawal"
          className=" bg-black text-white text-sm py-2 w-full rounded-full text-center active:scale-[0.98]
                transition"
        >
          Withdraw
        </Link>
      </p>
    </div>
  );
}
