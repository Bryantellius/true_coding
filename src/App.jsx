/* eslint-disable eqeqeq */
import { Switch, Route, Redirect } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navbar from "./components/Navbar";
import QA from "./pages/QA";
import QEditor from "./pages/QEditor";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/coding-questions">
          <QA />
        </Route>
        <Route exact path="/code/:language">
          <QEditor />
        </Route>
        <Route exact path="/code/*">
          <Redirect to={"/code/javascript"} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
