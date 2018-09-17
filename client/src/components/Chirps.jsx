import React, { Fragment } from 'react';
import Chirp from './Chirp';


const Chirps = (props) => {
    

    let items =[];

   ( (chirps = props.chirps) => {
        for (let index in chirps) {
            console.log(index);
            if(index !== "nextid" ){
                let chirp =JSON.parse(JSON.stringify(chirps[index]));
                chirp.time=new Date(chirp.time);
                console.log(chirp.time)
                items.push(<Chirp chirp={chirp} key={chirp.time} />);
                
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