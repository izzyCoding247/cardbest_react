import { RiDeleteBin6Fill } from "react-icons/ri";

export default function Accounts({ walletData }) {
  return (
    <div className="p-5 pt-60 pb-30">
      {walletData.map((wallet) => (
        <div
          className="flex justify-between items-center bg-white rounded-xl shadow-sm hover:shadow-lg px-4 py-6 mb-2"
          key={wallet.wId}
        >
          <div className="flex justify-center items-center w-14 h-14 p-2 bg-gray-50 rounded-full object-cover">
            <img src={wallet.bankImg} alt="" className="" />
          </div>
          <div className="flex">
            <div className="flex flex-col items-end mr-2">
              {wallet.withdrawalType === "Bank" ? (
                <>
                  <p className="text-lg font-bold truncate w-35 text-right">
                    {wallet.acctNumber}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {wallet.bankName} {wallet.withdrawalType}
                  </p>
                  <p className="text-xs">{wallet.acctName}</p>
                </>
              ) : (
                <>
                  <p className="text-lg font-bold truncate w-35 text-right">
                    {wallet.acctNumber}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {wallet.bankName} {wallet.withdrawalType}
                  </p>
                  <p className="text-xs">{wallet.acctName}</p>
                </>
              )}
            </div>
            <button className="text-red-600 text-2xl">
              <RiDeleteBin6Fill />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
