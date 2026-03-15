import TransactionList from './components/transactionComponent/TransactionList';
import TransactionNav from './components/transactionComponent/TransactionNav';

export default function Transactions() {
  return (
    <div className="bg-gray-50 mb-20">
      <TransactionNav />
      <TransactionList />
    </div>
  );
}
