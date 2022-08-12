import React, { Fragment, useState } from "react";
import './app.scss';


import Header from "./components/header/header";
import Form from "./components/form/form";
import Results from "./components/results/results"
import Footer from "./components/footer/footer"


function App() {
  let data = {
    data: null,
    requestParams: {},
  }
  const [state, setState] = useState(data);

  const callApi = (requestParams) => {
    const data = {
      count: 2,
      results: [
        { name: 'fake thing 1', url: 'http://fakethings.com/1' },
        { name: 'fake thing 2', url: 'http://fakethings.com/2' },
      ],
    };
    setState({ data, requestParams });
  }
  return (
    < >
      <Header />
      <div>Request Method: {state.requestParams.method}</div>
      <div>URL: {state.requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={state.data} />
      <Footer />

    </>
  );
}

export default App;
