import React from "react";

export default function ListingCampuses(props) {
  console.log("LIST CAMPUSES COMPONENT");
  return props.list ? (
    props.list.map((item) => {
      return (
        <div key={item.id}>
          <h1>{item.name}</h1>
        </div>
      );
    })
  ) : (
    <h1>Loading...</h1>
  );
}