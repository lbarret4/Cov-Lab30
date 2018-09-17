import React, { Component, Fragment } from 'react';
import ChirpCard from './ChirpCard';
import Header from './Header';
import { Link } from 'react-router-dom';


class Chirp extends Component {
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
    }

    async componentDidMount() {
        let url = `http://localhost:3000/api${this.props.match.url}`;
        try {
            let results = await fetch(url);
            let data = await results.json();
            data.time=new Date(await data.time);
            data.index=this.props.match.params.id;
            this.setState({
                chirp: data

            });
        } catch (error) {
            console.log(error);
        }
    }

    


    render() {
        let chirp =this.state.chirp;
        let path =path = `/chirps/${chirp.index}/edit`;
        return (
            <Fragment>
                <Header />
                <div className="card mt-5" style={{ maxWidth: " 90vw" }} >

                    <div className="card-header d-flex justify-content-between">
                        <span> You can edit chirp or delete it.</span>
                       <Link className="btn btn-outline-primary" to={path} key={path}>Edit </ Link> 
                    </div>
                    <ChirpCard chirp={chirp} isFeed={false} key={chirp.time} />
                </div>
                
            </Fragment>
              );
                }
                  

}

export default Chirp