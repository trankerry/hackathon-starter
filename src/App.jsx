import React, { Component } from 'react';
import Axios from 'axios';
import MovieCards from './movieComponent';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { 
            movieOption1: [],
			movieOption2: [],
			clicked: false
         };
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		Axios.get(
			`https://imdb-api.com/en/API/MostPopularMovies/${process.env.API_KEY}`
		).then((res) => {
			const num = Math.floor(Math.random() * 100);
			const num2 = Math.floor(Math.random() * 100);
			const movie1 = res.data.items[num];
			const movie2 = res.data.items[num2];
			this.setState({ movieOption1: movie1 });
			this.setState({ movieOption2: movie2 });
			console.log(movie1);
			console.log(movie2);
		});
		this.setState({clicked: true})
	}

	render() {
		return (
			<main>
				<div className='diagonal-box'>
					<div className='content container py-4'>
						<header className='pb-3 mb-4 border-bottom'>
							<a
								href='/'
								className='d-flex align-items-center text-dark text-decoration-none'>
								<img
									src='https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/40/000000/external-movie-cinema-icongeek26-linear-colour-icongeek26-7.png'
									className='mx-3'
								/>
								<span className='fs-4'>Movie Something</span>
							</a>
						</header>

						<div className='px-5 py-2 mb-2 rounded-3'>
							<div className='container-fluid pt-2 pb-2 row'>
								<h1 className='display-5 fw-bold'>Movie Something</h1>

								<div className='col-md-7 mb-3'>
									<p className='fs-4'>
										Solving the world's most toughest problem… what do you want
										to watch? With "Movie" simply just select two kinds of genre
										and we will find you the perfect movie to watch.
									</p>
									<div className='col-md-6'> 
										<button
											type='button'
											id='flipBtn'
											onClick={this.handleClick}
											className='form-control btn btn-primary btn-lg p-3 fs-3 fw-bold'>
											Search
										</button>
									</div>
								</div>
							</div>
						</div>
						{(this.state.clicked) ? <MovieCards movieOption1={this.state.movieOption1} movieOption2={this.state.movieOption2}/> : <div className='my-5 py-5'> </div>}
					</div>
					<div className='img-div'>
						<img
							src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngpix.com%2Fwp-content%2Fuploads%2F2016%2F07%2FPNGPIX-COM-Popcorn-PNG-Transparent-Image.png&f=1&nofb=1'
							alt=''
							id='plate'
						/>
					</div>
				</div>
			</main>
		);
	}
}
