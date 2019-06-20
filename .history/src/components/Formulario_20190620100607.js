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
                name="pais"></select>
            </div>
        </form>
    );
}

export default Formulario;