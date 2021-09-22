import React, { useState, useEffect, useContext } from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';
import { ContextObj } from '../../ContextObj.jsx';
import ReviewModal from './ReviewModal.jsx';

const ReviewList = ({ reviews, setReviews, setLimit, reviewsLimit, setsortStr, setCurReview, setReport}) => {
  const { reviewsTotal } = useContext(ContextObj);

  const [submitReview, setSubmitReview] = useState(false);

  var func = (array) => {
    var temp = array.slice();
    temp = temp.splice(0, reviewsLimit);
    return temp;
  };


  return (
    <div className='reviewList'>
      <div className='reviewsTotal'>{reviewsTotal} reviews, sorted by</div>
      <select className='dropDown' name="selectList" onChange={(e)=>setsortStr(e.target.value)}>
        <option value="relevance">relevance</option>
        <option value="helpful">helpfulness</option>
        <option value="newest">newest</option>
      </select>
      {func(reviews).map((review) =>
        <ReviewListEntry review={review} setReviews={setReviews} setCurReview={setCurReview} setReport={setReport} key={review.review_id} />
      )}
      <button className='moreReviews' onClick={() => setLimit(reviewsLimit + 2)}>MORE REVIEWS</button>
      <button className='addReview' onClick={()=> setSubmitReview(true)}>ADD REVIEW +</button>
      <ReviewModal submitReview={submitReview} setSubmitReview={setSubmitReview} setReviews={setReviews}/>
    </div>
  );
};

export default ReviewList;