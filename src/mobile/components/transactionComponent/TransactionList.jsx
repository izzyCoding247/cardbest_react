import { Link } from "react-router-dom";
import { TRANSACTIONDATA } from "../../../data/TransactionData";

export default function TransactionList() {
  function getStatusStyle(status) {
    switch (status) {
      case "Completed":
      case "Approved":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Rejected":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  }

  return (
    <div className="pt-8 px-3 mb-10 space-y-3 ">
      {TRANSACTIONDATA.map((transaction) => (
        <Link
          to={`/transaction/${transaction.tId}`}
          className="block"
          key={transaction.tId}
        >
          <div
            className="
          flex items-center justify-between
          bg-white
          rounded-xl shadow-2xs
          px-4 py-3
          border border-gray-100
          active:scale-[0.98]
          transition 
        "
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                <img
                  src={transaction.tradeLogo}
                  alt="card"
                  className="w-6 h-6 object-contain"
                />
              </div>

              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-800">
                  {transaction.transactionName}
                </span>
                <span className="text-xs text-gray-400">
                  {transaction.date}
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <span className="text-sm font-semibold text-gray-800">
                {transaction.NGN} {transaction.amount}
              </span>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                  transaction.status
                )}`}
              >
                {transaction.status}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
