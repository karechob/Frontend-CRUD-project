import React from "react";
import { Link } from "react-router-dom";

export default function ListingStudents(props) {
  console.log("LIST STUDENTS COMPONENT");
  return props.list.length > 0 ? (
    props.list.map((item) => {
      return (
        <div className="campus-grid">
          <div className="container-campus" key={item.id}>
            <div className="campus-pic">
            <img src={item.imageUrl} alt={item.firstName}/>
            </div>
            <h1>{item.lastName}, {item.firstName}</h1>
            <p>Currently attending {item.campus}</p>
            <Link to={`/student/${item.id}`}>View Student</Link>
            <button onClick={() => props.handleDeleteStudent(item.id)}>X</button>
          </div>
        </div>
      );
    })
  ) : (
    <h1 className="info-message">There are no students registered</h1>
  );
}



// {allStudents.map((student) => (
//   <div key={student.id}>
//     <h2>{student.firstName} {student.lastName}</h2>
//     <img src={student.imageUrl} alt={`${student.firstName} ${student.lastName}`}/>
//     <p>Address: {student.address}</p>
//     <p>Description: {student.description}</p>
//     <Link to={`/student/${student.id}`}>View Student</Link>
//   </div>
// ))}

// return (
//   <div>
//     <Navigation />
//     <h1>Students Page</h1>
//     {allStudents.map((student) => (
//       <div key={student.id}>
//         <h2>{student.firstName} {student.lastName}</h2>
//         <img src={student.imageUrl} alt={`${student.firstName} ${student.lastName}`} />
//         <Link to={`/student/${student.id}`}>View Student</Link>
//         <button onClick={() => handleDeleteStudent(student.id)}>X</button>
//       </div>
//     ))}
//   </div>
// );
