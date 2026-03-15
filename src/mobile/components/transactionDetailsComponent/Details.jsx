import React from "react";

export default function Details({ transaction }) {
  function getStatusStyle(status, amount) {
    switch ((status, amount)) {
      case "Completed":
      case "Approved":
        return "text-green-700";
      case "Pending":
        return " text-yellow-700";
      case "Rejected":
        return " text-red-700";
      default:
        return " text-green-700";
    }
  }
  return (
    <p className="flex flex-col">
      <span>{transaction.date}</span>
      <span>{transaction.time}</span>
      <span>{transaction.transactionType}</span>
      {transaction.transactionType === "Withdrawal" && (
        <>
          <span>{transaction.withdrawalAcct}</span>
        </>
      )}

      {transaction.transactionType === "Sell Gift Card" && (
        <>
          <span>{transaction.cardType}</span>
          <span>{transaction.rate}</span>
          <span>
            {transaction.tradeCurrency} {transaction.tradeAmt}
          </span>
        </>
      )}
      <span className={`${getStatusStyle(transaction.amount)}`}>
        {transaction.NGN} {transaction.amount}
      </span>

      <span className={`${getStatusStyle(transaction.status)}`}>
        {transaction.status}
      </span>

      <span>{transaction.Reference}</span>
    </p>
  );
}
