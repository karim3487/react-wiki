import React from 'react';
import FilterBTN from "../FilterBTN";

const Gender = ({setGender, setPageNumber}) => {
  let gender = ["Female", "Male", "Genderless", "unknown"]

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          Пол
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
           data-bs-parent="#accordionExample">
        <div className="accordion-body d-flex flex-wrap gap-3">
          {gender.map((items, index) => (
            <FilterBTN
              task={setGender}
              setPageNumber={setPageNumber}
              key={index}
              index={index}
              name="gender"
              items={items}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gender;
