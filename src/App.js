import "./styles/pages/home.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import ButtonPage from "./pages/ButtonPage";
import TabMenu from "./pages/TabMenu";
import SegmentPage from "./pages/SegmentPage";
import ToastPage from "./pages/ToastPage/ToastPage";
import InputPage from "./pages/inputPage/InputPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/buttons" component={ButtonPage} />
          <Route path="/tab-menu" component={TabMenu} />
          <Route path="/segments" component={SegmentPage} />
          <Route path="/toasts" component={ToastPage} />
          <Route path="/inputs" component={InputPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
