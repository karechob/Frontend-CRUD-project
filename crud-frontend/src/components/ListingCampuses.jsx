import React from "react";
import { Link } from "react-router-dom";

export default function ListingCampuses(props) {
  console.log("LIST CAMPUSES COMPONENT");
  return props.list ? (
    props.list.map((item) => {
      return (
        <div className="campus-grid">
          <div className="container-campus" key={item.id}>
            <div className="campus-pic">
              <img src={item.imageUrl} alt={item.name} />
            </div>
            <h1>{item.name}</h1>
            <Link to={`/campuses/${item.id}`}>View Campus</Link>
            {/* <button onClick={() => handleRemoveCampus(campus.id)}>
              Remove Campus
            </button> */}
          </div>
        </div>
      );
    })
  ) : (
    <h1>Loading...</h1>
  );
}