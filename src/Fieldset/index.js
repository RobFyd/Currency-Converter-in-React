import FormContainer from "../Form Container";
import "./style.css"

const Fieldset = ({ result, title }) => (
    <fieldset className="form__fieldset">
        <p className="form__paragraph">Currency Converter</p>
        <FormContainer />
        <p>
            <button className="form__button">Convert</button>
        </p>
        <p className="form__result">
        <h2>{title}
      {result.calculatedResult != null ? result.calculatedResult.toFixed(2) : ''}
      <b>&nbsp;{result.currencyToName}</b></h2>
        </p>
    </fieldset>
);

export default Fieldset;