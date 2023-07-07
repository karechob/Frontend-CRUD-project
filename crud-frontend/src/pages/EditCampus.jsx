import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateCampusThunk } from '../redux/campuses/campuses.actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function EditCampus() {

  const { campusId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const singleCampus = useSelector((state) => state.campuses.singleCampus);

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    description: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
        if (singleCampus) {
          setFormData({
            name: singleCampus.name,
            address: singleCampus.address,
            description: singleCampus.description,
          });
        }
  }, [singleCampus, dispatch]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let formErrors = {};
    if (formData.name.trim() === '') {
      formErrors.firstName = 'Name is required.';
    }
    if (formData.address.trim() === '') {
      formErrors.address = 'Address is required.';
    }
    if (formData.description.trim() === '') {
      formErrors.description = 'Description is required.';
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      const updatedCampus = {
        id: campusId,
        name: formData.name,
        address: formData.address,
        campusId: formData.campusId,
      };
      dispatch(updateCampusThunk(updatedCampus))
        .then(() => {
          navigate(`/campuses/${campusId}`);
          toast.error('Campus updated successfully');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <h2>Edit Student</h2>
      
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
          {errors.address && <p>{errors.address}</p>}
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
          {errors.description && <p>{errors.description}</p>}
        </div>
        <button type="submit" >Save</button>
      </form>
    </div>
  )
}

export default EditCampus;