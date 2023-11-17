import React, { useState } from "react";
import "./Filter.css";

function Filter({ onFilterChange }) {
  const [filterData, setFilterData] = useState({
    petStatus: "",
    type: "",
    sex: "",
    address: "",
    date: "",
  });

  const handleChange = (e) => {
    setFilterData({
      ...filterData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterChange(filterData);
  };

  return (
    <div className="search-filter">
      <div className="search-filter__header">Filter & Sorting Pets</div>
      <form className="search-filter__form">
        <div>
          <h3 className="search-filter__label">Status</h3>
          <input
            type="radio"
            name="petStatus"
            id="Lost"
            value="Lost"
            className="search-filter__radio-input"
            onChange={handleChange}
          />
          <label className="search-filter__radio-label">Lost</label>
          <input
            type="radio"
            name="petStatus"
            id="Found"
            value="Found"
            className="search-filter__radio-input"
            onChange={handleChange}
          />
          <label className="search-filter__radio-label">Found</label>
        </div>
        <div>
          <h3 className="search-filter__label">Type</h3>
          <input
            type="radio"
            name="type"
            id="Dog"
            value="Dog"
            className="search-filter__radio-input"
            onChange={handleChange}
          />
          <label className="search-filter__radio-label">Dog</label>
          <input
            type="radio"
            name="type"
            id="Cat"
            value="Cat"
            className="search-filter__radio-input"
            onChange={handleChange}
          />
          <label className="search-filter__radio-label">Cat</label>
        </div>
        <div>
          <h3 className="search-filter__label">Sex</h3>
          <input
            type="radio"
            name="sex"
            id="Male"
            value="Male"
            className="search-filter__radio-input"
            onChange={handleChange}
          />
          <label className="search-filter__radio-label">Male</label>
          <input
            type="radio"
            name="sex"
            id="Female"
            value="Female"
            className="search-filter__radio-input"
            onChange={handleChange}
          />
          <label className="search-filter__radio-label">Female</label>
          <input
            type="radio"
            name="sex"
            id="Unknown"
            value="Unknown"
            className="search-filter__radio-input"
            onChange={handleChange}
          />
          <label className="search-filter__radio-label">Unknown</label>
        </div>
        <div>
          <h3 className="search-filter__label">Location</h3>
          <p className="search-filter__text">
            City or Address Keywords, e.g. Toronto
          </p>
          <input
            type="text"
            className="search-filter__input"
            name="address"
            onChange={handleChange}
          ></input>
        </div>
        <div className="serch-filter__sub-container">
          <h3 className="search-filter__label">Within Past</h3>
          <div>
            <input
              type="radio"
              name="date"
              id="30"
              value="30"
              className="search-filter__radio-input"
              onChange={handleChange}
            />
            <label className="search-filter__radio-label">1 Month</label>
            <input
              type="radio"
              name="date"
              id="90"
              value="90"
              className="search-filter__radio-input"
              onChange={handleChange}
            />
            <label className="search-filter__radio-label">3 Months</label>
          </div>
          <div>
            <input
              type="radio"
              name="date"
              id="180"
              value="180"
              className="search-filter__radio-input"
              onChange={handleChange}
            />
            <label className="search-filter__radio-label">6 Months</label>
            <input
              type="radio"
              name="date"
              id="365"
              value="365"
              className="search-filter__radio-input"
              onChange={handleChange}
            />
            <label className="search-filter__radio-label">1 Year</label>
            <input
              type="radio"
              name="date"
              id="366"
              value="366"
              className="search-filter__radio-input"
              onChange={handleChange}
            />
            <label className="search-filter__radio-label">over 1 Year</label>
          </div>
        </div>
        <div className="search-filter__button-container">
          <button
            type="submit"
            className="secondary-button"
            onClick={handleSubmit}
          >
            Find
          </button>
        </div>
      </form>
    </div>
  );
}

export default Filter;
