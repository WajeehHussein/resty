import React, { useState } from "react";
import './app.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/header";
import Form from "./components/form/form";
import Results from "./components/results/results"
import Footer from "./components/footer/footer"
import History from "./components/history/History";

function App() {

  const [state, setState] = useState({ requestParams: {} });
  const [data, setData] = useState(`I'm waiting for the data`);

  const callApi = (requestParams) => {

    setState({ ...state, requestParams });
  }
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="history" element={<History />} />
      </Routes>
      <div>Request Method: {state.requestParams.method}</div>
      <div>URL: {state.requestParams.url}</div>
      <Form callApi={callApi} setData={setData} />
      <Results data={data} />
      <Footer />
    </Router>
  );
}

export default App;