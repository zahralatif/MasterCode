import { useState } from "react";
import PropTypes from "prop-types";

const Button = ({ onClick, label }) => (
  <button onClick={onClick}>{label}</button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const getDateWithCount = () => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + count);
    return currentDate.toDateString();
  };

  return (
    <div>
      <div>
        <Button onClick={() => setStep((x) => x - 1)} label="-" />
        <span>Step: {step}</span>
        <Button onClick={() => setStep((x) => x + 1)} label="+" />
      </div>

      <div>
        <Button onClick={() => setCount((x) => x - step)} label="-" />
        <span>Count: {count}</span>
        <Button onClick={() => setCount((x) => x + step)} label="+" />
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{getDateWithCount()}</span>
      </p>
    </div>
  );
}

export default Counter;
