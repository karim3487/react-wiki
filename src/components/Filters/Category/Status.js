import React from 'react';
import FilterBTN from "../FilterBTN";

const Status = ({setPageNumber, setStatus}) => {
  let status = ["Alive", "Dead", "unknown"]
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Статус
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
           data-bs-parent="#accordionExample">
        <div className="accordion-body d-grid gap-2">
          {status.map((items, index) => (
            <FilterBTN
              task={setStatus}
              setPageNumber={setPageNumber}
              key={index}
              index={index}
              name="status"
              items={items}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Status;
