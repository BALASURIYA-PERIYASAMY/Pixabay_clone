function Input({
  name,
  value,
  onChange,
  placeholder,
  className,
  type = "text"
}) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={className}
    />
  );
}

export default Input;