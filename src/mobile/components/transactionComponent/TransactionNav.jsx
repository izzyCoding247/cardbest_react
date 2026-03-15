import { TfiFilter } from "react-icons/tfi";
import { HiBars3BottomLeft } from "react-icons/hi2";
import BackNav from "../BackNav";

export default function TransactionNav() {
  return (
    <div className="relative bg-gray-50">
      <BackNav to="/">Transactions</BackNav>
      <div className="bg-gray-50 pt-16 px-4">
        <div className="flex items-center gap-3 bg-white w-[11em] shadow-xs rounded-full px-3 py-2">
          <label
            htmlFor="transaction"
            className="flex items-baseline text-gray-500 cursor-pointer"
          >
            <TfiFilter className="text-lg" />
            <HiBars3BottomLeft className="text-lg" />
          </label>

          <select
            name="transaction"
            id="transaction"
            className="flex-1 bg-transparent text-sm font-medium text-gray-700 outline-none appearance-none cursor-pointer"
          >
            <option value="all">All Transactions</option>
            <option value="pending">Pending</option>
            <option value="rejected">Rejected</option>
            <option value="approved">Approved</option>
            <option value="completed">Completed</option>
            <option value="withdrawn">Withdrawn</option>
          </select>
        </div>
      </div>
    </div>
  );
}
