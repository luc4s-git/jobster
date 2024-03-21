export default function FormSelect({ name, value, label, onChange, list }) {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="form-select"
      >
        {list.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
}
