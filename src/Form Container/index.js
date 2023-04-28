
import "./style.css"

const FormContainer = ({ addAmount, setAmount, currencyFrom, currencyTo, currencies, currencyFromValue, currencyToValue, }) => (
    <div className="form__container">
        <div className="form__container--item">
            <label className="form__label">
                Currency From
                <select className="form__field" value={currencyFrom}
                    onChange={({ target }) => {
                        currencyFromValue(target.value);
                    }}>
                    {currencies.map((currency) => (
                        <option key={currency.id} value={currency.value}>
                            {currency.name}
                        </option>
                    ))}
                </select>
            </label>
        </div>
        <div className="form__container--item">
            <label className="form__label">
                Currency To
                <select className="form__field" value={currencyTo}
                    onChange={({ target }) => {
                        currencyToValue(target.value);
                    }}>
                    {currencies.map((currency) => (
                        <option key={currency.id} value={currency.value}>
                            {currency.name}
                        </option>
                    ))}
                </select>
            </label>
        </div>
        <div className="form__container--item">
            <label className="form__label">Amount*
                <input
                    value={addAmount}
                    onChange={({ target }) => setAmount(target.value)}
                    type="number"
                    min="1"
                    step="any"
                    className="form__field--amount"
                    required
                    autoFocus />
            </label>
        </div>
    </div>
);

export default FormContainer;