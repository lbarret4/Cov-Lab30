import React, { Component, Fragment } from 'react';
import Header from './Header';

class ChirpEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chirp:{
                index:"",
                time:"",
                user:"",
                content:""
            }
        }
        this.handlesEditChirp =this.handlesEditChirp.bind(this);
    }
    async componentDidMount() {
        let id =this.props.match.params.id;
        let url = `http://localhost:3000/api/chirps/${id}`;
        try {
            let results = await fetch(url);
            let data = await results.json();
            data.time=new Date(await data.time);
            data.index= id;
            this.setState({
                chirp: data

            });
        } catch (error) {
            console.log(error);
        }
    }

    handlesEditChirp(e) {
        let newChirp = this.state.chirp;
        newChirp.content= e.target.value;
        this.setState({
            chirp:newChirp
                

        });

    }


    render() {
        let chirp = this.state.chirp;
        return (
            <Fragment>
                <Header />
                <div className='model-open'>
                    <div className="modal" role="dialog" aria-labelledby="chirpsModalLabel" style={{ display: 'block' }}>
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Edit Chirp</h5>
                                    <button type="button" className="close">
                                        <span ariaHidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <textarea className="form-control" onChange={this.handlesEditChirp} value={chirp.content}></textarea>
                                </div>
                                <div className="modal-footer">

                                    <button type="button" className="btn btn-primary" >Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}


export default ChirpEdit;