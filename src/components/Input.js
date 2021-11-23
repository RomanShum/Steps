function Input({ title, name, value, onHandelChange }) {
  const inputChange = (e) => {
    onHandelChange(e.target.value, e.target.name);
  };

  return (
    <div className="input">
      <p>{title}</p>
      <input type="text" name={name} value={value} onChange={inputChange} />
    </div>
  );
}

export default Input;
