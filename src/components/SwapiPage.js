import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../assets/styles/general.scss';

class SwapiPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: {
                films : []
            },
            films: []
        };
    }

    componentDidMount(){
        axios.get('https://swapi.co/api/people/1')
        .then((response)=>{
            const posts = response.data;

            response.data.films.forEach(obj => {
                axios.get(obj)
                .then((response)=>{
                    this.setState({
                        films : this.state.films.concat(response.data)
                    })
                })

            })
            this.setState({
                posts
            })
        })
        .catch((error) =>{
            console.log(error);
        });

    }
    render() {
        return (
            <div className="swapi">
                <div className="wrapper__outer">
                    <div className="wrapper__content top">
                        <h1>{this.state.posts.name}</h1>
                        <div className="profile__detail">
                            <div className="detail__picture">
                                <img src="../assets/images/profile.svg" alt="Profile Icon"/>
                            </div>
                            <div className="detail__information">
                                <div className="row">
                                    <div className="detail__object">
                                        Height:
                                    </div>
                                    <div className="detail__property">
                                        {this.state.posts.height} cm
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="detail__object">
                                        Mass:
                                    </div>
                                    <div className="detail__property">
                                        {this.state.posts.mass}
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="detail__object">
                                        Hair Color:
                                    </div>
                                    <div className="detail__property">
                                        {this.state.posts.hair_color}
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="detail__object">
                                        Skin Color:
                                    </div>
                                    <div className="detail__property">
                                        {this.state.posts.skin_color}
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="detail__object">
                                        Birth Year:
                                    </div>
                                    <div className="detail__property">
                                        {this.state.posts.birth_year}
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="detail__object">
                                        Gender:
                                    </div>
                                    <div className="detail__property">
                                        {this.state.posts.gender}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="wrapper__content bottom">
                        <div className="profile__movie">
                            <h3>{this.state.posts.name} {"Movie's"}</h3>
                            <a href="#" className="card-sm-desktop">See More</a>
                            <div className="clear"></div>

                            {this.state.films.map(film =>
                            <div key={film.episode_id} className="card__container">
                                <div className="cont__video">
                                    <img src="../assets/images/play-button.svg" alt="Play Icon" />
                                </div>
                                <div className="cont__detail">
                                    <p>{film.title}</p>
                                    <div className="detail__director">
                                        <p>Director:</p>
                                        <p>{film.director}</p>
                                    </div>
                                    <div className="detail__release">
                                        <p>Release:</p>
                                        <p>{film.release_date}</p>
                                    </div>
                                </div>
                            </div>
                            )}

                        </div>
                        <a href="#" className="card-sm-mobile">See More</a>
                        <div className="related-movie">
                            <div className="related__movie">
                                <h3>{"Related Another Movie's"}</h3>

                                <div className="related__container">

                                    <div className="title__related">
                                        {this.state.films[4] ? this.state.films[4].title : null}
                                    </div>

                                    <div className="row">
                                        <div className="detail__object">
                                            Director:
                                        </div>
                                        <div className="detail__property">
                                            {this.state.films[4] ? this.state.films[4].director : null}
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="detail__object">
                                            Producer:
                                        </div>
                                        <div className="detail__property">
                                            {this.state.films[4] ? this.state.films[4].producer : null}
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="detail__object">
                                            {"Release Date"}:
                                        </div>
                                        <div className="detail__property">
                                            {this.state.films[4] ? this.state.films[4].release_date : null}
                                        </div>
                                    </div>

                                </div>
                                <div className="description__container">
                                    <div className="desc">
                                        {this.state.films[4] ? this.state.films[4].opening_crawl : null}
                                    </div>
                                    <a href="#" className="see__more">See More</a>
                                    <div className="clear"></div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
};

export default SwapiPage;
