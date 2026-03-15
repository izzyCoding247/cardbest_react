import React from "react";

export default function Crypto({ withdrawalType, cryptoData, setCryptoData }) {
  return (
    <>
      {withdrawalType === "crypto" && (
        <div className="flex flex-col gap-4">
          <div className="relative">
            <select
              value={cryptoData.platform}
              onChange={(e) =>
                setCryptoData({ ...cryptoData, platform: e.target.value })
              }
              className="w-full h-11 px-4 pr-10
            text-sm text-gray-600
            bg-white
            
            rounded-lg
            appearance-none
            focus:outline-none
            transition"
            >
              <option value="">Select Crypto Platform</option>
              <option value="binance">Binance</option>
              <option value="bybit">Bybit</option>
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              ▾
            </span>
          </div>

          <div className="">
            <input
              placeholder="Wallet Address"
              value={cryptoData.walletAddress}
              onChange={(e) =>
                setCryptoData({ ...cryptoData, walletAddress: e.target.value })
              }
              className="w-full h-11 px-4 pr-10
            text-sm text-gray-600
            bg-white
            
            rounded-lg
            appearance-none
            focus:outline-none
            transition"
            />
          </div>

          <div className="">
            <input
              placeholder="Email used on platform"
              value={cryptoData.email}
              onChange={(e) =>
                setCryptoData({ ...cryptoData, email: e.target.value })
              }
              className="w-full h-11 px-4 pr-10
            text-sm text-gray-600
            bg-white
            
            rounded-lg
            appearance-none
            focus:outline-none
            transition"
            />
          </div>

          <div className="">
            <input
              type="password"
              placeholder="Login Password"
              value={cryptoData.password}
              onChange={(e) =>
                setCryptoData({ ...cryptoData, password: e.target.value })
              }
              className="w-full h-11 px-4 pr-10
            text-sm text-gray-600
            bg-white
            
            rounded-lg
            appearance-none
            focus:outline-none
            transition"
            />
          </div>
        </div>
      )}
    </>
  );
}
