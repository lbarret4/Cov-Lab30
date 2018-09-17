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
            console.log(chirps);
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
            let oddList = this.state.chirpList;
            oddList.unshift(
                {
                    time: new Date(Date.now()),
                    user: this.state.chirpUser,
                    content: this.state.chirpContent
                }
            );
            this.setState({
                chirpList: oddList,
                chirpContent: ""
            })


        } else {
            return alert("\t\t\tEmpty Chirp:\n\nAdd a message before posting Chirps!")
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
                    <form className="" action="" method="POST">
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