import { Link } from "react-router-dom";
import { LuEye } from "react-icons/lu";
import { LuEyeClosed } from "react-icons/lu";
import { useState } from "react";

import { USERSDATA } from "../../../data/UsersData";

export default function Balance() {
    const [isBalanceVisible, setIsBalanceVisible] = useState(true);
    const [isCurrency, setIsCurrency] = useState(true);

    function toggleBalanceVisibility() {
      setIsBalanceVisible((prev) => !prev);
    }

    function toggleCurrency() {
      setIsCurrency((prev) => !prev);
    }
    const user = USERSDATA[0];
  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-sm text-gray-500">
          Total {isCurrency ? "Naira" : "Bitcoin"} Balance
        </h2>
        {isBalanceVisible ? (
          <LuEye
            onClick={toggleBalanceVisibility}
            className="cursor-pointer hover:text-gray-700"
          />
        ) : (
          <LuEyeClosed
            onClick={toggleBalanceVisibility}
            className="cursor-pointer hover:text-gray-700"
          />
        )}
      </div>

      <div className="flex justify-between items-center">
        {isCurrency ? (
          <Link
            to="/wallet"
            className="flex items-end gap-1 mt-2 text-3xl sm:text-3xl font-semibold"
          >
            <p className="text-lg font-semibold">{user.currencyNGN}</p>
            {isBalanceVisible ? (
              <p>
                {user.balanceNGN.toLocaleString("en-NG", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            ) : (
              <p>*****</p>
            )}
          </Link>
        ) : (
          // Divide the Naira Balance by BTC current rate
          <Link
            to="/wallet"
            className="flex items-end gap-1 mt-2 text-3xl sm:text-3xl font-semibold"
          >
            <p className="text-lg font-semibold">{user.currencyBTC}</p>
            {isBalanceVisible ? (
              <p>
                {user.balanceBTC.toLocaleString("en-NG", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            ) : (
              <p>*****</p>
            )}
          </Link>
        )}
        <button
          className=" flex justify-center items-center text-black text-xs font-semibold cursor-pointer"
          onClick={toggleCurrency}
        >
          {isCurrency ? "Bitcoin" : "Naira"}
        </button>
      </div>
    </>
  );
}
