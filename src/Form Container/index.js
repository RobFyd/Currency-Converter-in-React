import { useState } from 'react';
import "./style.css"

const FormContainer = () => (
    <div className="form__container">
        <div className="form__container--item">
            <label className="form__label">
                Currency From
                <select className="form__field" name="currencyFrom">
                    <option value="gbp" selected>GBP</option>
                    <option value="pln">PLN</option>
                    <option value="eur">EUR</option>
                </select>
            </label>
        </div>
        <div className="form__container--item">
            <label className="form__label">
                Currency To
                <select className="form__field" name="currencyTo">
                    <option value="gbp">GBP</option>
                    <option value="pln" selected>PLN</option>
                    <option value="eur">EUR</option>
                </select>
            </label>
        </div>
        <div className="form__container--item">
            <label className="form__label">Amount* <input type="number" min="1" step="any"
                className="form__field--amount" required />
            </label>
        </div>
    </div>
);





export default FormContainer;