import "./styles/pages/home.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import ButtonPage from "./pages/ButtonPage";
import TabMenu from "./pages/TabMenu";
import SegmentPage from "./pages/SegmentPage";
import ToastPage from "./pages/ToastPage/ToastPage";
import InputPage from "./pages/inputPage/InputPage";
import DrawerPage from "./pages/DrawerPage/DrawerPage";
import SelectBoxPage from "./pages/selectBox/SelectBoxPage";
import TablePage from "./pages/TablePage";
import ItemCardPage from "./pages/ItemCardPage";
import CurrentNewsPage from "./pages/CurrentNewsPage";
import SolutionCenterPage from "./pages/SolutionCenterPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <Switch>
          <Route path="/buttons" component={ButtonPage} />
          <Route path="/tab-menu" component={TabMenu} />
          <Route path="/segments" component={SegmentPage} />
          <Route path="/toasts" component={ToastPage} />
          <Route path="/inputs" component={InputPage} />
          <Route path="/drawer" component={DrawerPage} />
          <Route path="/selectbox" component={SelectBoxPage} />
          <Route path="/table" component={TablePage} />
          <Route path="/itemcard" component={ItemCardPage} />
          <Route path="/currentnews" component={CurrentNewsPage} />
          <Route path="/solutioncenter" component={SolutionCenterPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
