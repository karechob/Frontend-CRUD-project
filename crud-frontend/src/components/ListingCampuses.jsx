import React from "react";

export default function ListingCampuses(props) {
  console.log("LIST CAMPUSES COMPONENT");
  return props.list ? (
    props.list.map((item) => {
      return (
        <div className="container-campus" key={item.id}>
          <img src={item.imageUrl} alt={item.name}/>
          <h1>{item.name}</h1>
        </div>
      );
    })
  ) : (
    <h1>Loading...</h1>
  );
}