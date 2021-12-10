import React, { Component } from 'react';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	getLocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function (pos) {
				//You have your locaton here
				console.log(
					'Latitude: ' +
						pos.coords.latitude +
						'Longitude: ' +
						pos.coords.longitude
				);
			});
		} else {
			console.log('Geolocation is not supported by this browser.');
		}
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
									src='https://img.icons8.com/office/40/000000/pancake.png'
									className='mx-3'
								/>
								<span className='fs-4'>Flip Foods</span>
							</a>
						</header>

						<div className='p-5 mb-2 rounded-3'>
							<div className='container-fluid py-5 row'>
								<h1 className='display-5 fw-bold'>Flip Foods</h1>

								<div className='col-md-7'>
									<p className='fs-3'>
										Solving the world's most toughest problem… what do you want
										to eat? With "Flip" simply just select two kinds of foods
										and we will find you the perfect place to eat.
									</p>
									<div className='input-group mb-3'>
										<button className='btn border-bottom' type='button'>
											<img src='https://img.icons8.com/ios-glyphs/30/000000/marker--v1.png' />
										</button>
										<input
											type='text'
											className='form-control mt-2 border-0 fs-4 border-bottom bg-transparent'
											placeholder='Current Location'
										/>
									</div>
								</div>
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
											className='bg-transparent text-white mt-2 border-0 border border-3 border-bottom form-control'
										/>
									</div>
								</div>
							</div>
							<div className='col-md-6'>
								<div className='h-100 p-5 rounded'>
									<div className='form-group'>
										<label htmlFor='uWant' className='font-weight-bold'>
											<h2>You want to eat...</h2>
										</label>
										<input
											name='uWant'
											className='mt-2 bg-transparent border-0 border border-3 border-bottom border-dark form-control'
										/>
									</div>
								</div>
							</div>
							<div className='offset-md-3 col-md-6 my-3 p-5'>
								<button
									type='button'
									id='flipBtn'
									className='form-control btn btn-primary btn-lg p-3 fs-3 fw-bold'>
									<img src='https://img.icons8.com/office/40/000000/pancake.png' className='mx-3'/>
									Flip
								</button>
							</div>
						</div>

						{/* <div className='row row-cols-1 row-cols-md-3 g-4 pb-3'>
							<div className='col'>
								<div className='card h-100'>
									<img
										src='https://s3-media0.fl.yelpcdn.com/bphoto/pDVaupHHtX6-HB9X6RXnpQ/348s.jpg'
										className='card-img-top'
										alt='...'
									/>
									<div className='card-body'>
										<h5 className='card-title text-center fs-3'>
											Las Panchitas Fresh Mexican Grill
										</h5>
										<div className='mb-3 row'>
											<label
												for='staticEmail'
												className='col-sm-3 col-form-label'>
												Rating:
											</label>
											<div className='col-sm-9'>
												<input
													type='text'
													readonly
													className='form-control-plaintext'
													id='staticEmail'
													value='4.5/5.0 223 reviews'
												/>
											</div>
										</div>
										<div className='mb-3 row'>
											<label
												for='staticEmail'
												className='col-sm-3 col-form-label'>
												Price:
											</label>
											<div className='col-sm-9'>
												<input
													type='text'
													readonly
													className='form-control-plaintext'
													id='staticEmail'
													value='$$'
												/>
											</div>
										</div>
										<div className='mb-3 row'>
											<label
												for='staticEmail'
												className='col-sm-3 col-form-label'>
												Phone:
											</label>
											<div className='col-sm-9'>
												<input
													type='text'
													readonly
													className='form-control-plaintext'
													id='staticEmail'
													value='(123) 456-7890'
												/>
											</div>
										</div>
										<div className='mb-3 row'>
											<label
												for='staticEmail'
												className='col-sm-3 col-form-label'>
												Address:
											</label>
											<div className='col-sm-9'>
												<input
													type='text'
													readonly
													className='form-control-plaintext'
													id='staticEmail'
													value='123 Maple Lane San Diego, CA 92104'
												/>
											</div>
										</div>
									</div>
									<div className='card-footer'>
										<button
											type='button'
											className='form-control btn btn-danger fs-5 py-2'>
											View more Details on
											<img src='https://img.icons8.com/ios-filled/30/000000/yelp.png' />
											Yelp
										</button>
									</div>
								</div>
							</div>
							<div className='col'>
								<div className='card h-100'>
									<img
										src='https://s3-media0.fl.yelpcdn.com/bphoto/1p5RxMaXo8nI6TyQi1jiWQ/348s.jpg'
										className='card-img-top'
										alt='...'
									/>
									<div className='card-body'>
										<h5 className='card-title text-center fs-3'>
											El Viejon Seafood
										</h5>
										<div className='mb-3 row'>
											<label
												for='staticEmail'
												className='col-sm-3 col-form-label'>
												Rating:
											</label>
											<div className='col-sm-9'>
												<input
													type='text'
													readonly
													className='form-control-plaintext'
													id='staticEmail'
													value='4.5/5.0 223 reviews'
												/>
											</div>
										</div>
										<div className='mb-3 row'>
											<label
												for='staticEmail'
												className='col-sm-3 col-form-label'>
												Price:
											</label>
											<div className='col-sm-9'>
												<input
													type='text'
													readonly
													className='form-control-plaintext'
													id='staticEmail'
													value='$$'
												/>
											</div>
										</div>
										<div className='mb-3 row'>
											<label
												for='staticEmail'
												className='col-sm-3 col-form-label'>
												Phone:
											</label>
											<div className='col-sm-9'>
												<input
													type='text'
													readonly
													className='form-control-plaintext'
													id='staticEmail'
													value='(123) 456-7890'
												/>
											</div>
										</div>
										<div className='mb-3 row'>
											<label
												for='staticEmail'
												className='col-sm-3 col-form-label'>
												Address:
											</label>
											<div className='col-sm-9'>
												<input
													type='text'
													readonly
													className='form-control-plaintext'
													id='staticEmail'
													value='123 Maple Lane San Diego, CA 92104'
												/>
											</div>
										</div>
									</div>
									<div className='card-footer'>
										<button
											type='button'
											className='form-control btn btn-danger fs-5 py-2'>
											View more Details on
											<img src='https://img.icons8.com/ios-filled/30/000000/yelp.png' />
											Yelp
										</button>
									</div>
								</div>
							</div>
							<div className='col'>
								<div className='card h-100'>
									<img
										src='https://s3-media0.fl.yelpcdn.com/bphoto/H9W5Tg14pPXXVMVNmmdIpA/348s.jpg'
										className='card-img-top'
										alt='...'
									/>
									<div className='card-body'>
										<h5 className='card-title text-center fs-3'>Cocina 35</h5>
										<div className='mb-3 row'>
											<label
												for='staticEmail'
												className='col-sm-3 col-form-label'>
												Rating:
											</label>
											<div className='col-sm-9'>
												<input
													type='text'
													readonly
													className='form-control-plaintext'
													id='staticEmail'
													value='4.5/5.0 223 reviews'
												/>
											</div>
										</div>
										<div className='mb-3 row'>
											<label
												for='staticEmail'
												className='col-sm-3 col-form-label'>
												Price:
											</label>
											<div className='col-sm-9'>
												<input
													type='text'
													readonly
													className='form-control-plaintext'
													id='staticEmail'
													value='$$'
												/>
											</div>
										</div>
										<div className='mb-3 row'>
											<label
												for='staticEmail'
												className='col-sm-3 col-form-label'>
												Phone:
											</label>
											<div className='col-sm-9'>
												<input
													type='text'
													readonly
													className='form-control-plaintext'
													id='staticEmail'
													value='(123) 456-7890'
												/>
											</div>
										</div>
										<div className='mb-3 row'>
											<label
												for='staticEmail'
												className='col-sm-3 col-form-label'>
												Address:
											</label>
											<div className='col-sm-9'>
												<input
													type='text'
													readonly
													className='form-control-plaintext'
													id='staticEmail'
													value='123 Maple Lane San Diego, CA 92104'
												/>
											</div>
										</div>
									</div>
									<div className='card-footer'>
										<button
											type='button'
											className='form-control btn btn-danger fs-5 py-2'>
											View more Details on
											<img src='https://img.icons8.com/ios-filled/30/000000/yelp.png' />
											Yelp
										</button>
									</div>
								</div>
							</div>
						</div> */}
					</div>
					<div className='img-div'>
						<img
							src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F2%2FHealthy-Meal-PNG.png&f=1&nofb=1'
							alt=''
							id='plate'
						/>
					</div>
				</div>
				<footer className='py-3 text-muted text-center'>
					<span>
						<img src='https://img.icons8.com/office/20/000000/pancake.png' />
						Flip Foods &copy; 2021
					</span>
				</footer>
			</main>
		);
	}
}
