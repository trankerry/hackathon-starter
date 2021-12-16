import React, { Component } from 'react';
import axios from 'axios';

class MovieCards extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            movie: []
         };
    }

        axios
        .get(`https://imdb-api.com/en/API/MostPopularMovies/${process.env.API_KEY}`)
        .then(res => {
            const num = Math.floor(Math.random() * 100);
            const movie = res.data.items[num];
            this.setState({ movie: movie});
            console.log(movie);
        })
    
    render() { 
        return (
					<div>
						<div className='card'>
							<h3> {this.movies[0].title}</h3>
							<img src={this.movies[0].img}/>
						</div>
					</div>
				);
    }
}
 
export default MovieCards;