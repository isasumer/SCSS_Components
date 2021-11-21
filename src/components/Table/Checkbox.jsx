import React, { useEffect, useState } from "react";
import checkForm from "../../assets/inputsIcons/check-form@3x.png";

const Checkbox = ({ checked = false, onToggle }) => {
  const [value, setValue] = useState(false);

  useEffect(() => {
    setValue(checked);
  }, [checked]);

  function handleOnChange() {
    onToggle?.(value);
    setValue(value);
  }
  return (
    <input
      className="table-content-campaignId-input"
      style={{ backgroundImage: `url(${checkForm})` }}
      type="checkbox"
      checked={value}
      onChange={() => handleOnChange(!value)}
    />
  );
};

export default Checkbox;
