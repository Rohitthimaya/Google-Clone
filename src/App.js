import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import SearchPage from "./pages/SearchPage";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            {/* SearchPage: The Result Page */}     
            <SearchPage />
          </Route>

          <Route path="/">
            {/* Home: The One With The Search On */}
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
