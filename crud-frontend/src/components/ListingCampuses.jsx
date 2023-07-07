import React from "react";
import { Link } from "react-router-dom";

export default function ListingCampuses(props) {
  console.log("LIST CAMPUSES COMPONENT");

  return props.list.length > 0 ? (
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

            <button onClick={() => props.handleRemoveCampus(item.id)}>X</button>
          </div>
        </div>
      );
    })
  ) : (
    <h1 className="info-message">There are no campuses registered</h1>
  );
}
