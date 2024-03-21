export default function FormSelect({
  name,
  value,
  handleChange,
  jobTypeOptions,
}) {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        status
      </label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        className="form-select"
      >
        {jobTypeOptions.map((option, index) => {
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
