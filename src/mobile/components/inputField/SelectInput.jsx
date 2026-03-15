

export default function SelectInput({
  label,
  name,
  value,
  onChange,
  options,
  optionLabel,
  optionValue = "id",
  placeholder,
}) {
  return (
    <div className="flex flex-col gap-1 w-full mt-5">
      <label htmlFor={name} className="text-sm font-bold">
        {label}
      </label>

      <div className="relative">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="
            w-full h-11 px-4 pr-10
            text-sm text-gray-600
            bg-white
            border border-gray-300
            rounded-lg
            appearance-none
            focus:outline-none
            focus:border-teal-500
            focus:ring-2 focus:ring-teal-200
            transition
          "
        >
          <option>
            {placeholder}
          </option>

          {options.map((item) => (
            <option key={item[optionValue]} value={item[optionValue]}>
              {item[optionLabel]}
            </option>
          ))}
        </select>

        {/* Custom dropdown arrow */}
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
          ▾
        </span>
      </div>
    </div>
  );
}