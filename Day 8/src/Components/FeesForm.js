import React, { useState } from 'react';
import './FeesForm.css';
import { useNavigate } from 'react-router-dom';

function FeesForm() {
  const nav=useNavigate();
  const [formData, setFormData] = useState({
    studentID: '',
    name: '',
    quota: '',
    feePaid: '',
    totalFees: '',
    paymentStatus: '',
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   alert("Fees Structure Added Successfully!!")
   nav("/fees")
    console.log('Form submitted:', formData);
  };

  return (
    <div class="whole">
    <h3 id="addfee">ADD FEES STRUCTURE</h3>
    <div className="fees-form-container">
   
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="StudentID">Academic Year</label>
          <input
            type="text"
            name="studentID"
            id="studentID"
            value={formData.studentID}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Fees Category</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="quota">Payment Method</label>
          <input
            type="text"
            name="quota"
            id="quota"
            value={formData.quota}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="feePaid">Payment Due Date</label>
          <input
            type="text"
            name="feePaid"
            id="feePaid"
            value={formData.feePaid}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="totalFees">Total Fees:</label>
          <input
            type="text"
            name="totalFees"
            id="totalFees"
            value={formData.totalFees}
            onChange={handleInputChange}
            required
          />
        </div>
        <button  type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
    </div>
  );
}

export default FeesForm;
