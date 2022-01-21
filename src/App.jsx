import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Homepage from "./homepage";
import About from "./about";
import Articles from "./articles";
import NavBar from "./navbar";
import NotFound from "./notFound";

function App() {
  return (
    <div id="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/home" exact>
            <Homepage />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/articles" component={Articles} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
