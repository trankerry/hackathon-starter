import React, { Component } from 'react';

export default class Restaurant extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
					<div className='container'>
						<div className='row row-cols-1 row-cols-md-3 g-4 pb-3'>
							<div className='col m-3 p-3'>
								<div className='card'>
									<img
										src={ this.props.imageURL }
										className='card-img-top'
										alt='...'
									/>
									<div className='card-body'>
										<h5 className='card-title text-center fs-3'>
											{ this.props.name }
										</h5>
										<div className='mb-3 row'>
											<label
												for='staticEmail'
												className='col-sm-3 col-form-label'>
												Rating: { this.props.rating } { this.props.review_count } reviews
											</label>
										</div>
										<div className='mb-3 row'>
											<label
												for='staticEmail'
												className='col-sm-3 col-form-label'>
												Price: { this.props.price }
											</label>
										</div>
										<div className='mb-3 row'>
											<label
												for='staticEmail'
												className='col-sm-3 col-form-label'>
												Phone: { this.props.phone }
											</label>
										</div>
										<div className='mb-3 row'>
											<label
												for='staticEmail'
												className='col-sm-3 col-form-label'>
												Address: { this.props.location }
											</label>
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
						</div>
					</div>
				);
    }
}
 
