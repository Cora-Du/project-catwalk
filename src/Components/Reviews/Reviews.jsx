import React, { useState, useContext, useEffect } from 'react';
import ReviewList from './ReviewList.jsx';
import ReviewBreakdown from './ReviewBreakdown.jsx';
import './styles.css';
import { ContextObj } from '../../ContextObj.jsx';

var Review = () => {
  const [reviews, setReviews] = useState([]);
  const [reviewsLimit, setLimit] = useState(2);
  const { getServer, productInfo } = useContext(ContextObj);
  const id = productInfo.id;

  useEffect(() => {
    getServer(`/reviews/?product_id=${40380}`, (result)=> setReviews(result.results));
  }, [productInfo]);


  return (
    <div>
      <h4>Ratings & Reviews</h4>
      <div className='reviews'>
        <ReviewBreakdown reviews={reviews} />
        <ReviewList reviews={reviews} setReviews={setReviews} setLimit={setLimit} reviewsLimit={reviewsLimit}/>
      </div>
    </div>
  );
};

export default Review;
