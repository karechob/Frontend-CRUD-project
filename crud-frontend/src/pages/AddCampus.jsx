import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import { addCampusThunk } from "../redux/campuses/campuses.actions";

function AddCampus() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [newCampus, setNewCampus] = useState({
    name: "",
    imageUrl: "https://s28151.pcdn.co/wp-content/uploads/2020/08/our-campus-location-banner.jpg",
    address: "",
    description: "",
  });

  const handleSubmit = async(event) => {
    event.preventDefault();
    const campusData = await dispatch(addCampusThunk(newCampus));
    navigate(`/campuses/${campusData.id}`);
  };


  const handleNewCampusInput = (event) => {
      event.preventDefault();
    setNewCampus({
      ...newCampus,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <Navigation />
      <div className="add-form-style">
        <h1 className="campus-title">Add New Campus</h1>
        <form onSubmit={handleSubmit} className='add-form-container'>
          <label className="add-form-label">Campus Name:</label>
          <input className="add-input-form"
            type="text"
            name="name"
            defaultValue={newCampus.name}
            onChange={handleNewCampusInput}
            required
            pattern="[A-Za-z ]+"
          />
          <label className="add-form-label">Address:</label>
          <input className="add-input-form"
            type="text"
            name="address"
            defaultValue={newCampus.address}
            onChange={handleNewCampusInput}
            required
            pattern="[A-Za-z0-9\- ]+"
          />
          <label className="add-form-label">Description:</label>
          <input className="add-input-form"
            type="text"
            name="description"
            value={newCampus.description}
            onChange={handleNewCampusInput}
            required
          />
          <button className="add-btn-submit" type="submit">
            Add Campus
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCampus;