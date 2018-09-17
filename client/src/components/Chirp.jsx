import React, { Component, Fragment } from 'react';
import ChirpCard from './ChirpCard';
import Header from './Header';

class Chirp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chirp:{
                time:"",
                user:"",
                content:""
            }
        }
    }

    async componentDidMount() {
        let url = `http://localhost:3000/api${this.props.match.url}`;
        try {
            let results = await fetch(url);
            let data = await results.json();
            data.time=new Date(await data.time);
            this.setState({
                chirp: data

            });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        let chirp =this.state.chirp;
        console.log(chirp);
        return (
            <Fragment>
                <Header />
                <div className="card mt-5" style={{ maxWidth: " 90vw" }} >

                    <div className="card-header d-flex justify-content-between">
                        <span> You can edit chirp or delete it.</span>
                        <button type="button" className=" btn btn-primary" aria-label="Edit">Edit</button>
                    </div>
                    <ChirpCard chirp={chirp} isFeed={false} key={chirp.time} />
                </div>
                
            </Fragment>
              );
                }
                  

}

export default Chirp