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

Input.defaultProps = {
  title: "input",
  name: "input",
  value: "1",
};

export default Input;
