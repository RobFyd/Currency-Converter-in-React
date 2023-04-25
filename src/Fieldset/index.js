import FormContainer from "../Form Container";
import "./style.css"

const Fieldset = () => (
    <fieldset className="form__fieldset">
        <p className="form__paragraph">Currency Converter</p>
        <FormContainer />
        <p>
            <button onClick={convert} className="form__button">Convert</button>
        </p>
        <p className="form__result">Result: <strong className="js-result">N/A</strong></p>
    </fieldset>
);

export default Fieldset;