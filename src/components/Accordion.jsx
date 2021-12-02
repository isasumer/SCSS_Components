import "../styles/components/Accordion.scss";
import left from "../assets/Solution Center/01-1-cm-home-non-login@2x.png";
import clearText from "../assets/Solution Center/clear-text@2x.png";
const Accordion = ({ faq, active, onToggle, answer }) => {
  return (
    <li className={`accordion-item ${active ? "accordion-item-active" : ""}`}>
      <div className="accordion-item-faq" onClick={onToggle}>
        <span>{faq}</span>
        <img src={active ? clearText : left} alt="faq" />
      </div>
      <div
        className={`accordion-item-answer-wrapper ${
          active ? "accordion-item-answer-wrapper-active" : ""
        }`}
      >
        <div className="accordion-item-answer">{answer}</div>
      </div>
    </li>
  );
};

export default Accordion;
