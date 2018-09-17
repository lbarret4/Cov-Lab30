import React, { Fragment } from 'react';
import Chirp from './Chirps';


const ChirpList = (props) => {


    const chirps = props.chirps;

    const chirpItems = chirps.map((chirp) => {
        return (
            <Chirp chirp={chirp} key={chirp.time} />
        );
    });

    return (

        <Fragment>
            <ul className="list-group list-group-flush">
                {chirpItems}
            </ul>

        </Fragment>

    );
}


export default ChirpList;