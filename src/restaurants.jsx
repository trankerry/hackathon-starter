import React, { Component } from 'react';

class Sample extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
					<main>
						<div className='container py-2'>
							<article className='postcard blue'>
								<a href='#' className='postcard_img_link'>
									<img
										src='https://picsum.photos/1000/1000'
										alt=''
										className='postcard_img'
									/>
								</a>
								<div className='postcard_text'>
									<h1 className=''='postcard__title blue'>
										<a href='#'>Las Panchitas Fresh Mexican Grill</a>
									</h1>
								</div>
							</article>
						</div>
					</main>
				);
    }
}
 
export default Sample;