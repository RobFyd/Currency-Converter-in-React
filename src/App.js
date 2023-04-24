import FormContainer from "./Form Container";

function App() {
  return (
    <form className="form">
        <fieldset className="form__fieldset">
            <p className="form__paragraph">Currency Converter</p>
            <FormContainer />
            <p>
                <button className="form__button">Convert</button>
            </p>
            <p className="form__result">Result: <strong className="js-result">N/A</strong></p>
        </fieldset>
    </form>
  );
}

export default App;
