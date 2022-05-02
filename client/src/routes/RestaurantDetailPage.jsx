import React, {useContext, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import RestaurantFinder from '../apis/RestaurantFinder';
import AddReview from '../components/AddReview';
import GoHome from '../components/GoHome';
import Reviews from '../components/Reviews';
import StarRating from '../components/StarRating';
import { RestaurantContext } from '../context/RestaurantContext';

const RestaurantDetailPage = () => {
  
  const {id} = useParams();
  const {selectedRestaurant, setSelectedRestaurant} = useContext(RestaurantContext);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`);

        setSelectedRestaurant(response.data.data)
         
      } catch (err) {
        console.log(err)
      }
    };

    fetchData();
  }, []);
  
  return (
    <div>
      {selectedRestaurant && (
        <>
          <br></br>
          <div className="text-center">
            <GoHome />
          </div>
          <h1 className="font-weight-light display-1 text-center">{selectedRestaurant.restaurant.name}</h1>
          <div className="text-center">
            <StarRating rating={selectedRestaurant.restaurant.average_rating} />
            <span className="text-warning ml-1">
              {selectedRestaurant.restaurant.count ? `(${selectedRestaurant.restaurant.count})` : "(0)"}
            </span>
          </div>
          <br></br>
          <div className="mt-3">
            <Reviews reviews={selectedRestaurant.reviews} />
          </div>
          <br></br>
          <AddReview />
          <br></br>
        </>
      )}
    </div>
  )
};

export default RestaurantDetailPage;
