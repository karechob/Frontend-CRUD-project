import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateCampusThunk } from '../redux/campuses/campuses.actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditCampus(props) {

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
        description: formData.description,
        campusId: formData.campusId,
      };
      dispatch(updateCampusThunk(updatedCampus))
        .then(() => {
          navigate(`/campuses/${campusId}`);
          toast.success('Campus updated successfully');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const exitEditMode = () => {
    window.location.reload();
  }

  return (
    <div>
    <ToastContainer />
    <div className="form-wrapper">
      <h2 className="campus-title">Edit Campus</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <div>
          <label className='labels-form'>Name:</label>
          <input className='input-form'
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            pattern="[A-Za-z ]+"
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label className='labels-form'>Address:</label>
          <input className='input-form'
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
            pattern="[A-Za-z0-9\- ]+"
          />
          {errors.address && <p>{errors.address}</p>}
        </div>
        <div>
          <label className='labels-form'>Description:</label>
          <input className='input-form'
            type="text"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
          {errors.description && <p>{errors.description}</p>}
        </div>
        <div className='btn-container'>
        <button className='save-btn' type="submit">SAVE</button>
        <button className='save-btn' onClick={exitEditMode}>EXIT</button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default EditCampus;