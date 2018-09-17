import React, { Component, Fragment } from 'react';
import Chirps from './Chirps';
import Header from './Header';



class ChirpsFeed extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chirpList: [],
            chirpUser: "Charles",
            chirpContent: ""

        }
        this.handlesNewChirp = this.handlesNewChirp.bind(this);
        this.handlesPost = this.handlesPost.bind(this);
    }

    async componentDidMount() {
        let url = `http://localhost:3000/api/chirps`;
        try {
            let results = await fetch(url);
            let chirps = await results.json();
         
            this.setState({
                chirpList: chirps

            });
        } catch (error) {
            console.log(error);
        }
    }




    handlesNewChirp(e) {
        this.setState({
            chirpContent: e.target.value

        });

    }

    handlesPost(e) {
        e.preventDefault();
        if (this.state.chirpContent.length > 0) {
            let url = `http://localhost:3000/api/chirps`;
            let chirp = {};
            chirp.time = new Date(Date.now());
            chirp.user = this.state.chirpUser;
            chirp.content = this.state.chirpContent;
            let options = {
                method: 'POST',
                body: JSON.stringify(chirp),
                headers: {
                    'Content-Type':'application/json'
                },
            };
            (async (chirp) => {
                try {
                    let results = await fetch(url,options);
                    results = await results.json();
                    this.setState({
                        chirpList: await results,
                        chirpContent: ""
                    });

                } catch (error) {
                    console.log(error);
                }
            })();



        } else {
            return alert("\t\t\tEmpty Chirp:\n\nAdd a message before posting Chirps!");
        }

    }

    render() {

        return (
            <Fragment>
                <Header />
                <div className="card mt-5" style={{ maxWidth: " 90vw" }} >

                    <div className="card-header">
                        To get started, type a message and post a chirp.
                    </div>
                    <form>
                        <div className="input-group">
                            <textarea className="form-control" required onChange={this.handlesNewChirp} value={this.state.chirpContent} />
                            <div className="input-group-append">
                                <button type="button" className=" btn btn-primary" onClick={this.handlesPost} >Post</button>
                            </div>
                        </div>
                    </form>


                    <Chirps chirps={this.state.chirpList} />

                </div>
            </Fragment>

        );
    }


}

export default ChirpsFeed;