import logo from './logo.svg';
import './App.css';
// Import route and components
import {Route} from "react-router-dom";
import Stocks from "./pages/stocks";
import Main from "./pages/main";
import About from "./pages/about";
import Nav from "./components/nav";

function App() {
  return (
    <div className="App">
      <Nav/>
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
