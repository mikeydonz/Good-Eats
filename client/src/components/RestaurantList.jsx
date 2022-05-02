import React, {useEffect, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantContext } from '../context/RestaurantContext';
import StarRating from './StarRating';

const RestaurantList = (props) => {

  const {restaurants, setRestaurants} = useContext(RestaurantContext);
  let history = useNavigate();
  useEffect( () => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get("/");
        setRestaurants(response.data.data.restaurants);
      } catch (err) {
        console.log(err)
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      const response = await RestaurantFinder.delete(`/${id}`);
      setRestaurants(restaurants.filter(restaurant => {
        return restaurant.id !== id
      }));
    } catch (err) {
      console.log(err)
    }
  };

  const handleUpdate = (e, id) => {
    e.stopPropagation();
    history(`/restaurants/${id}/update`);
  };

  const handleRestaurantSelect = (id) => {
    history(`/restaurants/${id}`);
  };

  const renderRating = (restaurant) => {
    
    if (!restaurant.count) {
      return <span className="text-warning">0 reviews</span>
    }
    
    return (
      <>
        <StarRating rating={restaurant.id} />
        <span className="text-warning ml-1">({restaurant.count})</span>
      </>
    )
  };

  return (
    <div className="list-group">
      <table className="table table-hover table-bordered">
          <thead>
              <tr className="table-primary">
                  <th className="col">Restaurant</th>
                  <th className="col">Location</th>
                  <th className="col">Price Range</th>
                  <th className="col">Rating</th>
                  <th className="col">Edit</th>
                  <th className="col">Delete</th>
              </tr>
          </thead>
          <tbody>
            {restaurants && restaurants.map(restaurant => {
              return (
              <tr style={{cursor: "pointer"}} onClick={() => handleRestaurantSelect(restaurant.id)} className="table-dark" key={restaurant.id}>
                <td>{restaurant.name}</td>
                <td>{restaurant.location}</td>
                <td>{"$".repeat(restaurant.price_range)}</td>
                <td>{renderRating(restaurant)}</td>
                <td>
                  <button onClick={(e) => handleUpdate(e, restaurant.id)} className="btn btn-warning">Update</button>
                </td>
                <td>
                  <button onClick={(e) => handleDelete(e, restaurant.id)} className="btn btn-danger">Delete</button>
                </td>
              </tr>
              );
            })}
                {/* <tr className="table-dark">
                    <td>McDonalds</td>
                    <td>New York</td>
                    <td>$$</td>
                    <td>Rating</td>
                    <td><button className="btn btn-warning">Update</button></td>
                    <td><button className="btn btn-danger">Delete</button></td>
                </tr>
                <tr className="table-dark">
                    <td>McDonalds</td>
                    <td>New York</td>
                    <td>$$</td>
                    <td>Rating</td>
                    <td><button className="btn btn-warning">Update</button></td>
                    <td><button className="btn btn-danger">Delete</button></td>
                </tr> */}
          </tbody>
      </table>
    </div>
  )
};

export default RestaurantList;
