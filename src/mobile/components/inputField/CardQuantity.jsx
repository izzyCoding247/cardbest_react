import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

export default function CardQuantity() {
  const [quantity, setQuantity] = useState(1);

  function increase() {
    setQuantity((prev) => prev + 1);
  }

  function decrease() {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  }

  return (
    <div className="pt-5">
      <label className="text-sm font-bold text-black">Quantity</label>

      <div
        className="
          mt-2
          flex items-center justify-between
          w-36 h-11
          rounded-lg
          border border-gray-300
          bg-white
        "
      >
        {/* Decrease */}
        <button
          type="button"
          onClick={decrease}
          className="
            w-10 h-full
            flex items-center justify-center
            text-gray-600
            hover:bg-gray-100
            active:bg-gray-200
            transition
            disabled:opacity-40
          "
          disabled={quantity === 1}
        >
          <FiMinus />
        </button>

        {/* Value */}
        <span className="text-sm font-semibold text-gray-800">{quantity}</span>

        {/* Increase */}
        <button
          type="button"
          onClick={increase}
          className="
            w-10 h-full
            flex items-center justify-center
            text-gray-600
            hover:bg-gray-100
            active:bg-gray-200
            transition
          "
        >
          <FiPlus />
        </button>
      </div>
    </div>
  );
}
