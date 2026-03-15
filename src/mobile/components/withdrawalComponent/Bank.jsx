import React from 'react'

export default function Bank({withdrawalType, bankData, setBankData}) {
  return (
    <>
      {withdrawalType === "bank" && (
        <div className="flex flex-col gap-4">
          <div className="relative ">
            <select
              value={bankData.bankName}
              onChange={(e) =>
                setBankData({ ...bankData, bankName: e.target.value })
              }
              className="w-full h-11 px-4 pr-10
            text-sm text-gray-600
            bg-white
            
            rounded-lg
            appearance-none
            focus:outline-none
            transition"
            >
              <option value="">Select Bank</option>
              <option value="opay">Opay</option>
              <option value="gtb">GTBank</option>
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              ▾
            </span>
          </div>

          <div className="">
            <input
              placeholder="Account Holder Name"
              value={bankData.accountName}
              onChange={(e) =>
                setBankData({ ...bankData, accountName: e.target.value })
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

          <input
            placeholder="Account Number"
            value={bankData.accountNumber}
            onChange={(e) =>
              setBankData({ ...bankData, accountNumber: e.target.value })
            }
            className="w-full h-11 px-4 pr-10
            text-sm text-gray-600
            bg-white
            
            rounded-lg
            appearance-none
            focus:outline-none
            transition"
          />

          <input
            type="password"
            placeholder="Login Password"
            value={bankData.password}
            onChange={(e) =>
              setBankData({ ...bankData, password: e.target.value })
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
      )}
    </>
  );
}
