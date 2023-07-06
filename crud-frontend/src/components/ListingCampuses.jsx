import React from "react";
import { Link } from "react-router-dom";

export default function ListingCampuses(props) {
  console.log("LIST CAMPUSES COMPONENT");
  return props.list ? (
    props.list.map((item) => {
      return (
        <div className="campus-grid">
          <Link className="card-link" to={`/campuses/${item.id}`}>
          <div className="container-campus" key={item.id}>
            <div className="campus-pic">
              <img src={item.imageUrl} alt={item.name} />
            </div>
            <h1>{item.name}</h1>
              <button onClick={() => props.handleRemoveCampus(item.id)}>
              Remove Campus
            </button>
            </div>
          </Link>
        </div>
      );
    })
  ) : (
    <h1>There are no campuses registered</h1>
  );
}
