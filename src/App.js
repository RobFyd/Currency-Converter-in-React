import React, { useState } from 'react';
import Form from "./Form";

//const currencyFrom = [eur, gbp, pln];

//const currencyTo = [eur, gbp, pln];

function App() {

const [result, setResult] = useState("");

  return (
    <Form setResult={setResult} />
  );
}

export default App;
