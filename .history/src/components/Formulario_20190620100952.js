import React from 'react';

function Formulario() {

    const handleChange = e => {

    }

    return (
        <form>
            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad:</label>
            </div>

            <div className="input-field col s12">
                <select onChange={handleChange}
                name="pais">
                    <option value="">Select a country</option>
                    <option value="US">USA</option>
                    <option value="ES">Spain</option>
                    <option value="MX">Mexico</option>
                    <option value="CO">Colombia</option>
                    <option value="AR">Argentina</option>
                </select>
            </div>

            <div className="input-field col s12">
                <input type="submit" className="waves-effect waves-light btn-large btn-block yellow accent-4"
                value="Search weather" />
            </div>
        </form>
    );
}

export default Formulario;