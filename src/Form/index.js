import React, { useState } from 'react';
import Fieldset from "../Fieldset";
import { currencies } from './currencies';
import "./style.css"

const Form =
    ({ setResult, result, currencyToName, }) => {
        const [currencyFrom, currencyFromValue] = useState(currencies[0]);
        const [currencyTo, currencyToValue] = useState(currencies[0]);
        const [addAmount, setAmount] = useState(0);

        const onFormSubmit = (event) => {
            event.preventDefault();
            const result = (+addAmount * +currencyFrom / +currencyTo);
            const currencyToName = currencies.find(currency => currency.value === +currencyTo);
        }

        setResult({
            calculatedResult: result,
            currencyToName: currencyToName.name  //currencyTo
        });

        return (
            <form className="form" onSubmit={onFormSubmit}>
                <Fieldset result={result} />
            </form>
        );
    }

export default Form;