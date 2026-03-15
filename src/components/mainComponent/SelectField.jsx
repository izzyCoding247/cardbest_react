export default function SelectField({
  label,
  id,
  name,
  options,
  value,
  onChange,
}) {
  return (
    <div className="mt-3 flex w-full flex-col gap-1">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </label>

      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="rounded-sm border border-gray-400 p-2 text-sm text-gray-700 focus:border-black focus:outline-none hover:border-black"
      >
        <option>Select {label}</option>

        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}
