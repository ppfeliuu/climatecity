import React from 'react';

function Clima ({resultado}) {

    const { name, weather} = resultado;

    if (!name) return null;

    

    return(
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>Current weather</h2>
            </div>
        </div>
    );
}

export default Clima;