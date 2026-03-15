import { useState } from 'react'
import BackNav from './components/BackNav'
import Crypto from './components/withdrawalComponent/Crypto';
import Bank from './components/withdrawalComponent/Bank';

export default function AddAccount() {
    const [withdrawalType, setWithdrawalType] = useState("");

    const [cryptoData, setCryptoData] = useState({
      platform: "",
      walletAddress: "",
      email: "",
      password: "",
    });

    const [bankData, setBankData] = useState({
      bankName: "",
      accountName: "",
      accountNumber: "",
      password: "",
    });

    function handleSubmit(e) {
      e.preventDefault();

      if (withdrawalType === "crypto") {
        // Validate crypto fields
        if (
          !cryptoData.platform ||
          !cryptoData.walletAddress ||
          !cryptoData.email ||
          !cryptoData.password
        ) {
          alert("Please complete crypto withdrawal details");
          return;
        }

        const payload = {
          type: "crypto",
          ...cryptoData,
        };

        console.log("Submitting crypto withdrawal:", payload);
      }

      if (withdrawalType === "bank") {
        // Validate bank fields
        if (
          !bankData.bankName ||
          !bankData.accountName ||
          !bankData.accountNumber ||
          !bankData.password
        ) {
          alert("Please complete bank withdrawal details");
          return;
        }

        const payload = {
          type: "bank",
          ...bankData,
        };

        console.log("Submitting bank withdrawal:", payload);
      }
    }



  return (
    <div>
      <BackNav to="/wallet">Add New Account</BackNav>
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col pt-20 bg-gray-50 min-h-dvh px-5 gap-4"
      >
        <div className="relative">
          <select
            value={withdrawalType}
            onChange={(e) => setWithdrawalType(e.target.value)}
            className="w-full h-11 px-4 pr-10
            text-sm text-gray-600
            bg-white
            
            rounded-lg
            appearance-none
            focus:outline-none
            transition"
          >
            <option>Select withdrawal method</option>
            <option value="crypto">Crypto Account</option>
            <option value="bank">Bank Account</option>
          </select>
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            ▾
          </span>
        </div>

        <Crypto
          withdrawalType={withdrawalType}
          cryptoData={cryptoData}
          setCryptoData={setCryptoData}
        />

        <Bank
          withdrawalType={withdrawalType}
          bankData={bankData}
          setBankData={setBankData}
        />
        <button type="submit" className='bg-green-500 text-white text-lg rounded-full py-3'>Submit</button>
      </form>
    </div>
  );
}
