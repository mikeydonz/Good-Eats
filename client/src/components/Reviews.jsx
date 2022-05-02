import React from 'react';
import StarRating from './StarRating';

const Reviews = ({reviews}) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
        {reviews.map((review) => {
            return (
                <div 
                    key={review.id}
                    className="col"
                >
                    <div className="card bg-primary text-white">
                        <div className="card-header d-flex justify-content-between">
                            <span>{review.name}</span>
                            <span><StarRating rating={review.rating} /></span>
                        </div>
                        <div className="card-body">
                            <p className="card-text">{review.review}</p>
                        </div>
                    </div>
                </div>
            );
        })}
        {/* <div className="col">
            <div className="card bg-primary text-white" style={{maxWidth: "30%"}}>
                <div className="card-header d-flex justify-content-between">
                    <span>Mike</span>
                    <span><StarRating rating={3} /></span>
                </div>
                <div className="card-body">
                    <p className="card-text">This place was great.</p>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card bg-primary text-white" style={{maxWidth: "30%"}}>
                <div className="card-header d-flex justify-content-between">
                    <span>Mike</span>
                    <span><StarRating rating={3} /></span>
                </div>
                <div className="card-body">
                    <p className="card-text">This place was great.</p>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card bg-primary text-white" style={{maxWidth: "30%"}}>
                <div className="card-header d-flex justify-content-between">
                    <span>Mike</span>
                    <span><StarRating rating={3} /></span>
                </div>
                <div className="card-body">
                    <p className="card-text">This place was great.</p>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card bg-primary text-white" style={{maxWidth: "30%"}}>
                <div className="card-header d-flex justify-content-between">
                    <span>Mike</span>
                    <span><StarRating rating={3} /></span>
                </div>
                <div className="card-body">
                    <p className="card-text">This place was great.</p>
                </div>
            </div>
        </div> */}
    </div>
  )
};

export default Reviews;