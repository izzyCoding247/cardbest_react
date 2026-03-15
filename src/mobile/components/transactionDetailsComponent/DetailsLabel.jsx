import React from 'react'

export default function DetailsLabel({ transaction }) {
  return (
    <p className="flex flex-col text-gray-600 ">
      <span>Date</span>
      <span>Time</span>
      <span>Transaction Type</span>

      {transaction.transactionType === "Withdrawal" && (
        <>
          <span>Withdrawal Acct</span>
        </>
      )}

      {transaction.transactionType === "Sell Gift Card" && (
        <>
          <span>Card Type</span>
          <span>Rate</span>
          <span>Trade Type</span>
        </>
      )}
      <span>Amount</span>
      <span>Status</span>
      <span>Reference</span>
    </p>
  );
}
