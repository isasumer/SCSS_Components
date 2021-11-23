import checkForm from "../../assets/inputsIcons/check-form@3x.png";

const Checkbox = ({ checked = false, onToggle }) => {
  const handleOnChange = (item) => {
    onToggle?.(item);
  };
  return (
    <input
      className="table-content-campaignId-input"
      style={{ backgroundImage: `url(${checkForm})` }}
      type="checkbox"
      checked={checked}
      onChange={() => handleOnChange(!checked)}
    />
  );
};

export default Checkbox;
