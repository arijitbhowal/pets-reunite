import React, { useState } from 'react';
import './Form.css';
import { AiOutlineFileAdd } from 'react-icons/ai'; // Import the AiOutlineFileAdd icon

function LostPetForm() {
  const [petName, setPetName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [status, setStatus] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [errors, setErrors] = useState({});
  const [modalShow, setModalShow] = useState(false);
  const [reportImage, setReportImage] = useState(null);
  const pathname = window.location.pathname;

  // Define your handleSelect and renderSuggestions functions here

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can use the form data here for further processing
    console.log('Submitted Data:', {
      petName,
      ownerName,
      date,
      city,
      email,
      description,
    });

    // You can add your logic to handle the form submission, like sending it to a server, etc.
  };

  const handleSubmitReport = async (e) => {
    e.preventDefault();
    // This function can be updated with your server logic, for now, it's empty.
  };

  const renderError = () => {
    // Your renderError function here
  };

  return (
    <div className="report-pet">
      <div className="report-form__container" style={{ backgroundImage: 'url("../assets/background-paws-orange-min.jpg")', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <h2 className="report-form__header">
          <AiOutlineFileAdd size={40} className="report-form__header-icon" />
          Report A Pet
        </h2>
        <form className="report-form" onSubmit={handleSubmitReport} id="report-form">
          <div className="report-form__status">
            <p className="report-form__label">Pet Status</p>
            <input
              type="radio"
              name="status"
              id="Lost"
              value="Lost"
              className="report-form__radio-input"
              defaultChecked={false}
              checked={pathname.includes("lost")}
            />
            <label className="report-form__radio-label report-form__radio-label-tag">
              Lost
            </label>
            <input
              type="radio"
              name="status"
              id="Found"
              value="Found"
              className="report-form__radio-input"
              defaultChecked={false}
              checked={pathname.includes("found")}
            />
            <label className="report-form__radio-label report-form__radio-label-tag">
              Found
            </label>
          </div>
          <div className="report-form__sub-container">
            <div className="report-form__label-set">
              <p className="report-form__label">Type of Pet </p>
              <input
                type="radio"
                name="type"
                id="Dog"
                value="Dog"
                className="report-form__radio-input"
                defaultChecked
              />
              <label className="report-form__radio-label">Dog</label>

              <input
                type="radio"
                name="type"
                id="Cat"
                value="Cat"
                className="report-form__radio-input"
              />
              <label className="report-form__radio-label">Cat</label>
            </div>
            <div className="report-form__label-set">
              <p className="report-form__label">Sex </p>
              <input
                type="radio"
                name="sex"
                id="Male"
                value="Male"
                className="report-form__radio-input"
                defaultChecked
              />
              <label className="report-form__radio-label">Male</label>

              <input
                type
                ="radio"
                name="sex"
                id="Female"
                value="Female"
                className="report-form__radio-input"
              />
              <label className="report-form__radio-label">Female</label>
            </div>
          </div>
          <div className="report-form__sub-container">
            <label className="report-form__label report-form__label-set">
              Pet Name
              <input
                type="text"
                name="name"
                className={
                  !errors.name
                    ? "report-form__input"
                    : "report-form__input report-form__input--error"
                }
                placeholder="Enter Unknown If You Don't Know the Name"
                onBlur={(e) => {
                  setErrors({ ...errors, name: e.target.value === "" });
                }}
              />
              {errors.name && renderError()}
            </label>
            <label className="report-form__label report-form__label-set">
              Last Seen Address
              <input
                name="address"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Enter the Nearest Address Last Seen"
                className={
                  !errors.address
                    ? "report-form__input"
                    : "report-form__input report-form__input--error"
                }
                onBlur={(e) => {
                  setErrors({ ...errors, address: e.target.value === "" });
                }}
              />
              {errors.address && renderError()}
              {status === "OK" && (
                <ul className="report-form__address-list">
                  {/* Replace with your address suggestions */}
                </ul>
              )}
            </label>
          </div>
          <div className="report-form__sub-container">
            <label className="report-form__label report-form__label-set">
              Contact Email
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className={
                  !errors.email
                    ? "report-form__input"
                    : "report-form__input report-form__input--error"
                }
                onBlur={(e) => {
                  setErrors({ ...errors, email: e.target.value === "" });
                }}
              />
              {errors.email && renderError()}
            </label>
            <label className="report-form__label report-form__label-set">
              Last Seen Date
              <input
                type="date"
                name="date"
                min="2021-01-01"
                className={
                  !errors.date
                    ? "report-form__input"
                    : "report-form__input report-form__input--error"
                }
                onBlur={(e) => {
                  setErrors({ ...errors, date: e.target.value === "" });
                }}
              />
              {errors.date && renderError()}
            </label>
          </div>
          <div className="report-form__sub-container">
            <label className="report-form__label report-form__label-set">
              Description
              <textarea
                type="text"
                name="description"
                className="report-form__textarea"
                placeholder="Enter detailed descriptions will boost the reunite chances, e.g. breed, age, color, collar/chip/tattoo..."
              />
            </label>
          </div>
          <div className="report-form__sub-container">
            <label className="report-form__label report-form__label-set">
              Image
              <p className="report-form__note">
                Please upload the pet image here
              </p>
              <input
                type="file"
                name="image"
                id="reportImage"
                onChange={(e) => {
                  setReportImage(e.target.files[0]);
                }}
              />
            </label>
          </div>
          <div className="report-form__button">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LostPetForm;
