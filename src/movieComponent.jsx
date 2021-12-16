import React, { Component } from 'react';

class MovieCards extends Component {
    constructor(props) {
        super(props);
    }
    
    render() { 
        return (
					<div className='row mx-5 justify-content-between'>
						<div className='card mb-3'>
							<div className='row no-gutters'>
								<div className='col-md-4'>
									<img
										src={this.props.movieOption1.image}
										alt='...'
										width='150px'
									/>
								</div>
								<div className='col-md-8'>
									<div className='card-body'>
										<h5 className='card-title'>
											{this.props.movieOption1.title}
										</h5>
										<p className='card-text'>
											Release Year: {this.props.movieOption1.year}
										</p>
										<p className='card-text'>
											Director and Cast: {this.props.movieOption1.crew}
										</p>
										<p className='card-text'>
											<small className='text-muted'>
												Current Rank: {this.props.movieOption1.rank}
											</small>
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className='card mb-3'>
							<div className='row no-gutters'>
								<div className='col-md-4'>
									<img
										src={this.props.movieOption2.image}
										alt='...'
										width='150px'
									/>
								</div>
								<div className='col-md-8'>
									<div className='card-body'>
										<h5 className='card-title'>
											{this.props.movieOption2.title}
										</h5>
										<p className='card-text'>
											Release Year: {this.props.movieOption2.year}
										</p>
										<p className='card-text'>
											Director and Cast: {this.props.movieOption2.crew}
										</p>
										<p className='card-text'>
											<small className='text-muted'>
												Current Rank: {this.props.movieOption2.rank}
											</small>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				);
    }
}
 
export default MovieCards;