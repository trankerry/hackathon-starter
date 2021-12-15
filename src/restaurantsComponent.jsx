import React, { useEffect, useState } from 'react';

const Restaurant = () => {
	const [movies, setMovies] = useState([])
  	const [searchValue, setSearchValue] = useState('');

	const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=9cc709f1`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if(responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() =>{
    getMovieRequest(searchValue);
  }, [searchValue]);
  
    render() { 
        return (
					<div className='container'>
						<div className='row row-cols-1 row-cols-md-3 g-4 pb-3'>
							<div className='col m-3 p-3'>
								<div className='card'>
									<img
										className='card-img-top'
										alt='...'
									/>
									<div className='card-body'>
										<h5 className='card-title text-center fs-3'>
											movie
										</h5>
										<div className='mb-3 row'>
											<label
												for='staticEmail'
												className='col-sm-3 col-form-label'>
												Rating: 5/5 200 reviews
											</label>
										</div>
										<div className='mb-3 row'>
											<label
												for='staticEmail'
												className='col-sm-3 col-form-label'>
												Price: Free
											</label>
										</div>
										<div className='mb-3 row'>
											<label
												for='staticEmail'
												className='col-sm-3 col-form-label'>
												Phone: 6193033433
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





export default Restaurant
    
