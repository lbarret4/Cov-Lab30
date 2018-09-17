import React, { Fragment } from 'react';



const Chirp = (props) => {

    let chirp = props.chirp;
    let timeStyle = {
        position: "relative",
        bottom: "1em"
    }
    return (
        <Fragment>
            <div className="d-inline-flex flex-row flex-nowrap">
                <li className="list-group-item flex-grow-1">

                    <small className="d-block" style={timeStyle}>
                        {chirp.user} on {chirp.time.toLocaleString()}
                    </small>
                    <span className="ml-5">{chirp.content}</span>


                </li>
                <div className="  list-group-item d-flex align-items-center">
                    <button type="button" className="close deleteChirp " aria-label="Close"><span aria-hidden="true">&times;</span></button>
                </div>

            </div>

        </Fragment>
    );



}

export default Chirp;