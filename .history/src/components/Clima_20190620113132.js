import React from 'react';

function Clima ({resultado}) {

    const { name, main} = resultado;

    if (!name) return null;

    const kelvin = 273.15;

    

    return(
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>Current weather - {name}</h2>
                <p className="temperatura"></p>
                <p>Min. Temp: { parseInt(main.temp_min - kelvin, 10)} &#x2103;</p>
                <p>Max. Temp: { parseInt(main.temp_max - kelvin, 10)} &#x2103;</p>
            </div>
        </div>
    );
}

export default Clima;