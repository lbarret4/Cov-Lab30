import React, { Fragment } from 'react';
import { ChirpCard } from '../View';


const Chirps = (props) => {


    let items = [];

    ((chirps = props.chirps) => {
        for (let index in chirps) {
            if (index !== "nextid") {
                let chirp = JSON.parse(JSON.stringify(chirps[index]));
                chirp.time = new Date(chirp.time);
                chirp.index = index;
                items.push(<ChirpCard chirp={chirp} isFeed={true} key={chirp.time} />);

            }

        };
    })();

    return (

        <Fragment>
            <ul className="list-group list-group-flush d-flex flex-column-reverse">
                {items}
            </ul>

        </Fragment>

    );
}


export default Chirps;