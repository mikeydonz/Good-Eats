import React from 'react';
import GoHome from '../components/GoHome';
import UpdateRestaurant from '../components/UpdateRestaurant';

const UpdatePage = () => {
  return (
    <div>
        <br></br>
        <div className="text-center">
          <GoHome />
        </div>
        <br></br>
        <h1 className="font-weight-light display-1 text-center">Update Restaurant</h1>
        <br></br>
        <UpdateRestaurant />
    </div>
  )
};

export default UpdatePage;
