import logo from './logo.svg';
import './App.css';
// Import route and components
import {Route} from "react-router-dom";
import Stocks from "./pages/stocks";
import Main from "./pages/main";
import About from "./pages/about";

function App() {
  return (
    <div className="App">
      <Route path="/">
        <Main />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/stocks">
        <Stocks />
      </Route>
    </div>
  );
}

export default App;
