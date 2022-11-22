import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import BuildPage from "./components/build-page/build-page.component";

import SavedPage from "./components/saved-page/saved-page.component";

import NavBar from "./components/nav-bar.component/nav-bar.component";
import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

// FULL ARRAY OF ORGANIZED WORKOUTS

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route path="/build" element={<BuildPage />} />
        <Route index path="/saved" element={<SavedPage />} />
      </Route>
    </Routes>
  );
};

export default App;
