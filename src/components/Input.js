import { PropTypes } from "prop-types";

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

Input.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Input;
