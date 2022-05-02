import React from 'react';
import AddRestaurant from '../components/AddRestaurant';
import Header from '../components/Header';
import RestaurantList from '../components/RestaurantList';

const Home = () => {
  return (
    <div>
        <br></br>
        <Header />
        <br></br>
        <AddRestaurant />
        <br></br>
        <RestaurantList />
    </div>
  )
};

export default Home;
