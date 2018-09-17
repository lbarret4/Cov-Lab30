import React, { Component, Fragment } from 'react';
import Header from './Header';
import {Redirect} from 'react-router-dom';

class ChirpEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chirp:{
                index:"",
                time:"",
                user:"",
                content:""
            },
            redirect:false
        }
        this.handlesEditChirp =this.handlesEditChirp.bind(this);
        this.handlesSave = this.handlesSave.bind(this);
        this.handlesClose = this.handlesClose.bind(this)
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

    handlesSave(e){        
        e.preventDefault();
        if (this.state.chirp.content.length > 0) {
            let url = `http://localhost:3000/api/chirps/${this.state.chirp.index}`;
            let chirp = {};
            chirp.time = this.state.chirp.time;
            chirp.user = this.state.chirp.user;
            chirp.content = this.state.chirp.content;
            let options = {
                method: 'PUT',
                body: JSON.stringify(chirp),
                headers: {
                    'Content-Type':'application/json'
                },
            };
            (async (chirp) => {
                try {
                    let results = await fetch(url,options);
                    this.setState({
                        redirect:true
                    })
                    

                } catch (error) {
                    console.log(error);
                }
            })();



        } else {
            return alert("\t\t\tEmpty Chirp:\n\nAdd a message before posting Chirps!");
        }


    }

    handlesClose(e){
        e.preventDefault();
        this.setState({
            redirect:true
        })
    }


    render() {
        let redirect = <Redirect to='/'/>;
        let chirp = this.state.chirp;
        return (
            <Fragment>
                {this.state.redirect ? redirect: <Header /> }
                
                <div className='model-open'>
                    <div className="modal" role="dialog" aria-labelledby="chirpsModalLabel" style={{ display: 'block' }}>
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Edit Chirp</h5>
                                    <button type="button" className="close" onClick={this.handlesClose}>
                                        <span ariaHidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <textarea className="form-control" onChange={this.handlesEditChirp} value={chirp.content}></textarea>
                                </div>
                                <div className="modal-footer">

                                    <button type="button" className="btn btn-primary" onClick={this.handlesSave} >Save changes</button>
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