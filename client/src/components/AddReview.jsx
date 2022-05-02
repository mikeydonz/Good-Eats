;import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import RestaurantFinder from '../apis/RestaurantFinder';

const AddReview = () => {

    const {id} = useParams();
    const location = useLocation();
    const history = useNavigate();
    const [name, setName] = useState("");
    const [reviewText, setReviewText] = useState("");
    const [rating, setRating] = useState("Rating");

    const handleSubmitReview = async (e) => {
        e.preventDefault();
        try {
            const response = await RestaurantFinder.post(`/${id}/addReview`, {
                name: name,
                review: reviewText,
                rating: rating
            });
            history("/");
            history(location.pathname);
        } catch (err) {
            console.log(err)
        }
        console.log(response);
    };

    return (
        <div className="mb-2">
            <form action="">
                <div className="row align-items-start">
                    <div className="form-group col">
                        <label className="mb-2" htmlFor="name">Name</label>
                        <input 
                            id="name" 
                            placeholder="Name" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            type="text" 
                            className="form-control" 
                        />
                    </div>
                    <div className="form-group col">
                        <label className="mb-2" htmlFor="rating">Rating</label>
                        <select 
                            value={rating}
                            onChange={(e)=> setRating(e.target.value)}
                            id="rating" 
                            className="form-select"
                        >
                            <option disabled>Rating</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>
                <br></br>
                <div className="form-group">
                    <label className="mb-2" htmlFor="Review">Review</label>
                    <textarea
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)} 
                        id="review"
                        placeholder='Leave a review' 
                        className="form-control"
                    ></textarea>
                </div>
                <br></br>
                <button type="submit" onClick={handleSubmitReview} className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
};

export default AddReview;