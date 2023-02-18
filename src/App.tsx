import React from "react";
import { Route, Routes } from "react-router-dom";

import { Navigation } from "components";
import { SearchAppBar } from "components/header/mui-header";
import { MuiAside } from "components/aside/mui-aside";
import { Content, Form } from "screen";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="App--content">
        <SearchAppBar />
        <div className="App--content-wrapper">
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/form" element={<Form />} />
          </Routes>
          <MuiAside />
        </div>
      </div>
    </div>
  );
}

export default App;
