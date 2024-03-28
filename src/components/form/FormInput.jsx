export default function FormInput({ name, label, type, value, onChange }) {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        className="form-input"
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
}
