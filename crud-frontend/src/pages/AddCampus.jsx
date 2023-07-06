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
      <div className="form-style">
        <h1>Add New Campus</h1>
        <form onSubmit={handleSubmit}>
          <label className="from-label">Campus Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={newCampus.name}
            onChange={handleNewCampusInput}
            required
            pattern="[A-Za-z ]+"
          />
          <label className="from-label">Address:</label>
          <input
            type="text"
            name="address"
            defaultValue={newCampus.address}
            onChange={handleNewCampusInput}
            required
            pattern="[A-Za-z0-9\- ]+"
          />
          <label className="from-label">Description:</label>
          <input
            type="text"
            name="description"
            value={newCampus.description}
            onChange={handleNewCampusInput}
            required
          />
          <button className="btn-submit" type="submit">
            Add Campus
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCampus;