import React from "react";
import { Link } from "react-router-dom";

export default function ListingCampuses(props) {
  console.log("LIST CAMPUSES COMPONENT");
  
  const handleRemoveCampus = (campusId) => {
    props.handleRemoveCampus(campusId);
    window.location.reload();
  };

  return props.list ? (
    props.list.map((item) => {
      return (
        <div className="campus-grid">
          <div className="container-campus" key={item.id}>
            <div className="campus-pic">
              <img src={item.imageUrl} alt={item.name} />
            </div>
            {/* <h1>{item.name}</h1> */}
            <Link className="card-link" to={`/campuses/${item.id}`}>
              {" "}
              <h1>{item.name}</h1>{" "}
            </Link>
            <button onClick={() => handleRemoveCampus(item.id)}>
              Remove Campus
            </button>
          </div>
        </div>
      );
    })
  ) : (
    <h1>There are no campuses registered</h1>
  );
}
