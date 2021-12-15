import React, { Component } from 'react';
import Restaurant from './restaurantsComponent';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};

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

								<div className='col-md-7 mb-5'>
									<p className='fs-4'>
										Solving the world's most toughest problem… what do you want
										to watch? With "Movie" simply just select two kinds of genre
										and we will find you the perfect movie to watch.
									</p>
								</div>
							</div>
						</div>

						<div className='row align-items-md-stretch'>
							<div className='offset-md-1 col-md-5'>
								<div className='h-100 p-4 rounded text-white bg-dark'>
									<div className='form-group'>
										<label htmlFor='iWant' className='font-weight-bold'>
											<h5>I want to watch something with...</h5>
										</label>
										<input
											name='iWant'
											className='bg-transparent text-white my-2 border-0 border border-3 border-bottom form-control'
										/>
									</div>
								</div>
							</div>
							<div className='col-md-5'>
								<div className='h-100 p-4 rounded'>
									<div className='form-group'>
										<label htmlFor='uWant' className='font-weight-bold'>
											<h5>You want to watch something with...</h5>
										</label>
										<input
											name='uWant'
											className='my-2 bg-transparent border-0 border border-3 border-bottom border-dark form-control'
										/>
									</div>
								</div>
							</div>
							<div className='offset-md-4 col-md-4 p-4'>
								<button
									type='button'
									id='flipBtn'
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
					<div className='img-div'>
						<img
							src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngpix.com%2Fwp-content%2Fuploads%2F2016%2F07%2FPNGPIX-COM-Popcorn-PNG-Transparent-Image.png&f=1&nofb=1'
							alt=''
							id='plate'
						/>
					</div>
				</div>
				<Restaurant/>
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
