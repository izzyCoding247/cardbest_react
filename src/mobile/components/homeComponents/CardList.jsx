
import { Link } from "react-router-dom";
import { CARDLISTS } from "../../../data/CardLists";


export default function CardList() {
  
  return (
    <div className="px-3 pb-16 mb-10">
      <p className="text-xs font-semibold text-gray-500 my-3 uppercase tracking-wide">
        Gift Card List
      </p>

      <Link to="/sell" className="space-y-3">
        {CARDLISTS.map((cards) => (
          <div
            key={cards.id}
            className="
          flex items-center justify-between
          bg-white
          border border-gray-100 shadow-2xs
          rounded-xl
          px-4 py-3
          active:scale-[0.98]
          transition
        "
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                <img
                  src={cards.cardImg}
                  alt="card"
                  className="w-6 h-6 object-contain"
                />
              </div>

              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-800">
                  {cards.cardName}
                </span>
                <span className="text-xs text-gray-400">Available</span>
              </div>
            </div>

            <span className="text-sm font-semibold text-gray-800">₦ 10,000</span>
          </div>
        ))}
      </Link>
    </div>
  );
}
