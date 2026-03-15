export default function RadioGroup({ label, name, value, onChange, options }) {
  return (
    <div className="flex flex-col gap-2 mt-7">
      {/* Group label */}
      <p className="text-sm font-bold">{label}</p>

      <div className="flex gap-3">
        {options.map((option) => (
          <label
            key={option.value}
            className={`
              flex items-center gap-2
              px-4 py-2
              rounded-lg
              border
              cursor-pointer
              transition
              ${
                value === option.value
                  ? "border-teal-500 bg-teal-50 text-teal-600"
                  : "border-gray-300 text-gray-700"
              }
            `}
          >
            {/* Hidden native radio */}
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
              className="hidden"
            />

            {/* Custom radio */}
            <span
              className={`
                w-4 h-4
                rounded-full
                border-2
                flex items-center justify-center
                ${
                  value === option.value ? "border-teal-500" : "border-gray-400"
                }
              `}
            >
              {value === option.value && (
                <span className="w-2 h-2 bg-teal-500 rounded-full" />
              )}
            </span>

            <span className="text-sm">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
