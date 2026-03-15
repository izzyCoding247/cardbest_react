import { useState } from "react";
import BackNav from "./components/BackNav";
import { WALLETDATA } from "../data/WalletData";

export default function Withdrawal() {
  const [selected, setSelected] = useState("");
  const walletData = WALLETDATA;
  return (
    <div className="bg-gray-50 h-dvh">
      <BackNav to="/wallet">Withdraw</BackNav>
      <form action="" className="pt-20 pb-10 flex flex-col px-4">
        <div className="">
          <input
            type="text"
            placeholder="Enter Amount"
            className="bg-white mb-6 rounded-lg focus:outline-none w-full p-3 text-sm shadow-sm"
          />
        </div>
        <p className="text-semibold mb-3 font-semibold">Which Account?</p>
        <div className="flex gap-4 overflow-x-auto">
          {walletData.map((bankSelect) => (
            <label
              key={bankSelect.wId}
              className={`p-5 rounded-lg  ${
                selected === bankSelect.bankName
                  ? "bg-teal-100"
                  : "bg-white text-gray-700 border-gray-300"
              }
                transition-colors min-w-50 shrink-0 shadow-md mb-10`}
            >
              <div className="flex items-center gap-2 mb-5">
                <div className="flex justify-center items-center w-14 h-14 p-2 bg-gray-50 rounded-full object-cover">
                  <img src={bankSelect.bankImg} alt="" className="" />
                </div>

                <p className="text-gray-500">{bankSelect.bankName} {bankSelect.withdrawalType}</p>
              </div>
              <p className="max-w-40 truncate text-sm text-black font-semibold">
                {bankSelect.acctNumber}
              </p>
              <p className="max-w-40 truncate text-xs text-gray-700 font-semibold">
                {bankSelect.acctName}
              </p>
              <input
                type="radio"
                name="bankType"
                id="bankType"
                value={bankSelect.acctNumber}
                checked={selected === bankSelect.bankName}
                className="hidden"
                onChange={() => setSelected(bankSelect.bankName)}
              />
            </label>
          ))}
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white text-lg font-semibold rounded-full py-3"
        >
          Withdraw Funds
        </button>
      </form>
    </div>
  );
}
