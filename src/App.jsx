import React, { Component } from 'react';
import Axios from 'axios';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movieOption1: [],
			movieOption2: []
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		Axios
		.get(`https://imdb-api.com/en/API/MostPopularMovies/k_i5h79ogg`)
		.then(
			(res) => {
				const num = Math.floor(Math.random() * 100);
				const num2 = Math.floor(Math.random() * 100);
				const movie1 = res.data.items[num];
				const movie2 = res.data.items[num2];
				this.setState({ movieOption1: movie1 });
				this.setState({movieOption2: movie2});
				console.log(movie1);
				console.log(movie2);
			}
		)
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
									<button
										type='button'
										id='flipBtn'
										onClick={this.handleClick}
										className='form-control btn btn-primary btn-lg p-3 fs-3 fw-bold'>
										<img
											src='https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/40/000000/external-movie-cinema-icongeek26-linear-colour-icongeek26-7.png'
											className='mx-3'
										/>
										Search
									</button>
								</div>
							</div>
						</div>


						<div className='row mx-5 justify-content-between'>
  <div className="card mb-3">
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.nerdspan.com%2Fwp-content%2Fuploads%2F2013%2F12%2Felf-movie-poster.jpg&f=1&nofb=1' alt="..." width='150px'/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Elf</h5>
        <p className="card-text">Release Year: 2003</p>
        <p className="card-text">Director and Cast: Josh Gordon (dir.) Jason Bateman, Olivia Munn</p>
        <p className="card-text"><small className="text-muted">Current Rank: 91</small></p>
      </div>
    </div>
  </div>
</div>

<div className="card mb-3">
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.nerdspan.com%2Fwp-content%2Fuploads%2F2013%2F12%2Felf-movie-poster.jpg&f=1&nofb=1' alt="..." width='150px'/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Elf</h5>
        <p className="card-text">Release Year: 2003</p>
        <p className="card-text">Director and Cast: Josh Gordon (dir.) Jason Bateman, Olivia Munn</p>
        <p className="card-text"><small className="text-muted">Current Rank: 91</small></p>
      </div>
    </div>
  </div>
</div>
</div>
						{/* <div className='row align-items-md-stretch'>
							<div className='offset-md-1 col-md-5'>
								<div className='h-100 p-4 rounded text-white bg-dark'>
									<div className='card'>
										<img
											className='card-img-top'
											alt='...'
											src={this.state.movieOption1.image}
										/>
										<div className='card-body'>
											<h5 className='card-title text-center fs-3'>
												{this.state.movieOption1.title}
											</h5>
											<div className='mb-3 row'>
												<label
													for='staticEmail'
													className='col-sm-3 col-form-label'>
													Year: {this.state.movieOption1.year}
												</label>
											</div>
											<div className='mb-3 row'>
												<label
													for='staticEmail'
													className='col-sm-3 col-form-label'>
													Rank: {this.state.movieOption1.rank}
												</label>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='col-md-5'>
								<div className='h-100 p-4 rounded'>
									<div className='card'>
										<img
											className='card-img-top'
											alt='...'
											src={this.state.movieOption2.image}
										/>
										<div className='card-body'>
											<h5 className='card-title text-center fs-3'>
												{this.state.movieOption2.title}
											</h5>
											<div className='mb-3 row'>
												<label
													className='col-sm-3 col-form-label'>
													Year: {this.state.movieOption2.year}
												</label>
											</div>
											<div className='mb-3 row'>
												<label
													className='col-sm-3 col-form-label'>
													Rank: {this.state.movieOption2.rank}
												</label>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div> */}
					</div>
					<div className='img-div'>
						<img
							src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngpix.com%2Fwp-content%2Fuploads%2F2016%2F07%2FPNGPIX-COM-Popcorn-PNG-Transparent-Image.png&f=1&nofb=1'
							alt=''
							id='plate'
						/>
					</div>
				</div>
				{/* <div>
					<div className='card'>
						<h3> {this.state.movie.title[num]}</h3>
						<img src={this.state.movie.image[num]} />
					</div>
				</div> */}
				<footer className='py-3 text-muted text-center'>
					<span>
						<img src='https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/20/000000/external-movie-cinema-icongeek26-linear-colour-icongeek26-7.png' />
						Movie Something &copy; 2021
					</span>
				</footer>
			</main>
		);
	}
}
