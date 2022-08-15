import React, { useState } from "react";
import './app.scss';


import Header from "./components/header/header";
import Form from "./components/form/form";
import Results from "./components/results/results"
import Footer from "./components/footer/footer"


function App() {

  const [state, setState] = useState({ requestParams: {} });
  const [data, setData] = useState(`I'm waiting for the data`);

  const callApi = (requestParams) => {

    setState({ ...state, requestParams });
  }
  return (
    <>
      <Header />
      <div>Request Method: {state.requestParams.method}</div>
      <div>URL: {state.requestParams.url}</div>
      <Form callApi={callApi} setData={setData} />
      <Results data={data} />
      <Footer />

    </>
  );
}

export default App;
