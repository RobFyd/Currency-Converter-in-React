
import "./style.css"

const FormContainer = () => (
    <div className="form__container">
        <div className="form__container--item">
            <label className="form__label">
                Currency From
                <select className="form__field">
                    
                </select>
            </label>
        </div>
        <div className="form__container--item">
            <label className="form__label">
                Currency To
                <select className="form__field">
                    
                        <option>
                        </option>
                    
                </select>
            </label>
        </div>
        <div className="form__container--item">
            <label className="form__label">Amount*
                <input className="form__field" />
            </label>
        </div>
    </div>
);

export default FormContainer;