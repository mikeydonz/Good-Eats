import React, {useState, useContext} from 'react';
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantContext } from '../context/RestaurantContext';


const AddRestaurant = () => {

    const {addRestaurant} = useContext(RestaurantContext);
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [priceRange, setPriceRange] = useState("Price Range");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await RestaurantFinder.post("/", {
                name: name,
                location: location,
                price_range: priceRange
            });
            addRestaurant(response.data.data.restaurant);
            console.log(response);
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <div className='container'>
            <form action="">
                <div className="row align-items-start">
                    <div className="col">
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" className='form-control' placeholder='Name' />
                    </div>
                    <div className="col">
                        <input value={location} onChange={(e) => setLocation(e.target.value)} type="text" className='form-control' placeholder='Location' />
                    </div>
                    <div className="col">
                        <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)} className='form-select'>
                            <option disabled>Price Range</option>
                            <option value="1">$</option>
                            <option value="2">$$</option>
                            <option value="3">$$$</option>
                            <option value="4">$$$$</option>
                            <option value="5">$$$$$</option>
                        </select>
                    </div>
                    <div className="d-grid col-1 mx-auto">
                        <button onClick={handleSubmit} type="button" className="btn btn-primary">Add</button>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default AddRestaurant;
