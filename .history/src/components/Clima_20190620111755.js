import React from 'react';

function Clima ({resultado}) {
    console.log(resultado);
    return(
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>Current weather</h2>
            </div>
        </div>
    );
}

export default Clima;