import React, { useState } from 'react';

function Formulario() {


    // state del component con Hooks
    // busqueda = state, guardarBusqueda = this.setState({})
    const[busqueda, guardarBusqueda] = useState({
        ciudad: '',
        pais: ''
    })

    const handleChange = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
            
        }); 
        
        
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