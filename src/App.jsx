import React, { Component } from 'react';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<main>
				<div className='container py-4'>
					<header className='pb-3 mb-4 border-bottom'>
						<a
							href='/'
							className='d-flex align-items-center text-dark text-decoration-none'>
							<img
								src='https://img.icons8.com/office/40/000000/pancake.png'
								className='mx-3'
							/>
							<span className='fs-4'>Flip Foods</span>
						</a>
					</header>

					<div className='p-5 mb-2 bg-light rounded-3'>
						<div className='container-fluid py-5'>
							<h1 className='display-5 fw-bold'>Flip Foods</h1>
							<p className='col-md-8 fs-4'>
								Cant decide what to eat..... Lorem ipsum, dolor sit amet
								consectetur adipisicing elit. Voluptatem sed neque odit iste non
								cum ex deleniti enim dolores mollitia nam provident dicta
								repellendus eum, vero repudiandae omnis magnam aliquid?
							</p>
						</div>
					</div>

					<div className='row align-items-md-stretch mb-3'>
						<div className='col-md-6'>
							<div className='h-100 p-5 rounded text-white bg-dark'>
								<div className='form-group'>
									<label htmlFor='iWant' className='font-weight-bold'>
										<h2>I want to eat...</h2>
									</label>
									<input
										name='iWant'
										className='bg-dark text-white mt-2 border-0 border-bottom form-control'
									/>
								</div>
							</div>
						</div>
						<div className='col-md-6'>
							<div className='h-100 p-5 rounded bg-light'>
								<div className='form-group'>
									<label htmlFor='uWant' className='font-weight-bold'>
										<h2>You want to eat...</h2>
									</label>
									<input
										name='uWant'
										className='mt-2 border-0 border-bottom border-dark form-control'
									/>
								</div>
							</div>
						</div>
						<div className='offset-md-3 col-md-6 my-3'>
							<button
								type='button'
								className='form-control btn btn-primary btn-lg p-3'>
								Lets flip
							</button>
						</div>
					</div>

					{/* <div className='row mb-3'>
						<div className='col-sm-6'>
							<div className='card'>
								<div className='card-body'>
									<h5 className='card-title'>OPTION 1</h5>
									<p className='card-text'>address, phone, hours</p>
									<a href='#' className='btn btn-primary'>
										open in google maps
									</a>
								</div>
							</div>
						</div>
						<div className='col-sm-6'>
							<div className='card'>
								<div className='card-body'>
									<h5 className='card-title'>OPTION 2</h5>
									<p className='card-text'>address, phone, hours</p>
									<a href='#' className='btn btn-primary'>
										open in google maps
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='row mb-3'>
						<div className='col-sm-6'>
							<div className='card'>
								<div className='card-body'>
									<h5 className='card-title'>OPTION 3</h5>
									<p className='card-text'>address, phone, hours</p>
									<a href='#' className='btn btn-primary'>
										open in google maps
									</a>
								</div>
							</div>
						</div>
						<div className='col-sm-6'>
							<div className='card'>
								<div className='card-body'>
									<h5 className='card-title'>OPTION 4</h5>
									<p className='card-text'>address, phone, hours</p>
									<a href='#' className='btn btn-primary'>
										open in google maps
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='row mb-3'>
						<div className='col-sm-6'>
							<div className='card'>
								<div className='card-body'>
									<h5 className='card-title'>OPTION 5</h5>
									<p className='card-text'>address, phone, hours</p>
									<a href='#' className='btn btn-primary'>
										open in google maps
									</a>
								</div>
							</div>
						</div>
						<div className='col-sm-6'>
							<div className='card'>
								<div className='card-body'>
									<h5 className='card-title'>OPTION 6</h5>
									<p className='card-text'>address, phone, hours</p>
									<a href='#' className='btn btn-primary'>
										open in google maps
									</a>
								</div>
							</div>
						</div>
					</div> */}

					<footer className='p-3 text-muted text-center fixed-bottom'>
						&copy;Flip Foods 2021
					</footer>
				</div>
			</main>
		);
	}
}
