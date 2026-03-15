import { CARDLISTS } from "../data/CardLists";
import { COUNTRYLIST } from "../data/CountryList";
import SelectInput from "./components/inputField/SelectInput";
import { useState } from "react";
import RadioGroup from "./components/inputField/RadioGroup";
import MultiImageUpload from "./components/inputField/MultiImageUpload";
import CardQuantity from "./components/inputField/CardQuantity";
import BackNav from "./components/BackNav";

export default function Sell() {
  const [cardType, setCardType] = useState("");

  return (
    <div className="relative">
      <BackNav to="/">Sell Card</BackNav>
      <div className="px-5 pt-2 ">
        <h2 className="text-sm text-gray-500 mt-20">Settlement Amount:</h2>

        <div className="flex items-end gap-1 mt-2 text-3xl sm:text-3xl font-bold">
          <p className="text-lg font-semibold">₦</p>
          <p>123,456,789</p>
        </div>
      </div>
      <form action="" className="p-5 relative mb-20">
        <div className="flex gap-4 pb-5">
          <SelectInput
            label="Category"
            name="category"
            placeholder="Select category"
            options={CARDLISTS}
            optionLabel="cardName"
          />

          <SelectInput
            label="Country"
            name="country"
            placeholder="Select country"
            options={COUNTRYLIST}
            optionLabel="countryName"
          />
        </div>
        <div className="flex flex-col gap-1 mt-3">
          <label htmlFor="amount" className="text-sm font-bold">
            Amount
          </label>
          <input
            type="text"
            id="amount"
            className="w-full h-11 px-4 pr-10
            text-sm text-gray-800
            bg-white
            border border-gray-300
            rounded-lg
            appearance-none
            focus:outline-none
            focus:border-teal-500
            focus:ring-2 focus:ring-teal-200
            transition"
            placeholder="Please enter the card amount"
          />
        </div>
        <CardQuantity />
        <RadioGroup
          label="Card Type"
          name="cardType"
          value={cardType}
          onChange={(e) => setCardType(e.target.value)}
          options={[
            { label: "Physical", value: "physical" },
            { label: "Code", value: "code" },
          ]}
        />

        <div className="flex flex-col gap-1 mt-3">
          <label htmlFor="code" className="text-sm font-bold">
            Code
          </label>
          <input
            type="text"
            id="code"
            className="w-full h-11 px-4 pr-10
            text-sm text-gray-800
            bg-white
            border border-gray-300
            rounded-lg
            appearance-none
            focus:outline-none
            focus:border-teal-500
            focus:ring-2 focus:ring-teal-200
            transition"
            placeholder="Please enter the code"
          />
        </div>
        <div>
          <MultiImageUpload />
        </div>
        
        <div className="fixed inset-x-0 bottom-0 p-4 bg-white border-t border-gray-200">
          <button
            type="submit"
            className="
      w-full h-12
      rounded-full
      bg-green-600
      text-white text-lg font-semibold
      shadow-md
      active:scale-95
      transition cursor-pointer
    "
          >
            Sell
          </button>
        </div>
      </form>
    </div>
  );
}
