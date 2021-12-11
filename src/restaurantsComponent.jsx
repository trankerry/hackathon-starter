import React, { Component } from 'react';

export default class Restaurant extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
					<div className='container'>
						<div className='row row-cols-1 row-cols-md-3 g-4 pb-3'>
							<div className='col m-3 p-3'>
								<div className='card'>
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
							{/* <div className='col'>
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
							</div> */}
						</div>
					</div>
				);
    }
}
 
