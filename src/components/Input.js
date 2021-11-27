import { PropTypes } from "prop-types";

function Input({ type, title, name, value, onHandelChange }) {
  const inputChange = (e) => {
    onHandelChange(e.target.value, e.target.name);
  };

  return (
    <div className="input">
      <p>{title}</p>
      <input type={type} name={name} value={value} onChange={inputChange} />
    </div>
  );
}

Input.defaultProps = {
  type: "text",
  title: "input",
  name: "input",
  value: "1",
};

Input.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Input;
