import Inputs from "../../components/Inputs";
import "../../styles/pages/inputPage.scss";
import data from "./inputData";
const InputsPage = () => {
  //validation and error props
  return (
    <div className="input-page">
      <Inputs data={data} />
    </div>
  );
};

export default InputsPage;
