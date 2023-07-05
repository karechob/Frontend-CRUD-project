import React from "react";

export default function ListingStudents(props) {
  console.log("LIST STUDENTS COMPONENT");
  return props.list ? (
    props.list.map((item) => {
      return (
        <div className="campus-grid">
          <div className="container-campus" key={item.id}>
            <div className="campus-pic">
            <img src={item.imageUrl} alt={item.firstName}/>
            </div>
            <h1>{item.lastName}, {item.firstName}</h1>
            <p>Currently attending {item.campus}</p>
          </div>
        </div>
      );
    })
  ) : (
    <h1>Loading...</h1>
  );
}
