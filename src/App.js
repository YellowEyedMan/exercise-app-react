import logo from "/Users/devonfennell/exercise-app-react/src/Images/png images/anvil-fixed.png";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import BuildPage from "./routes/build-page/build-page.component";

import SavedPage from "./routes/saved-page/saved-page.component";

import NavBar from "./components/nav-bar.component/nav-bar.component";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        The
        <img src={logo} className="App-logo" alt="logo" />
        Forge
      </header>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<BuildPage />}></Route>
          <Route path="/saved" element={<SavedPage />}></Route>
        </Route>
      </Routes>

      <footer></footer>
    </div>
  );
};

export default App;
