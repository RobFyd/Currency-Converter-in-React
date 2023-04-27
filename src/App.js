import React, { useState } from 'react';
import Form from "./Form";

function App() {
  const [result, setResult] = useState("");

  return (
    <Form setResult={setResult} />
  );
}

export default App;
