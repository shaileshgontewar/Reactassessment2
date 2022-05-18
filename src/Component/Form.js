import React, { useState } from "react";
// import "./MyStyle.css";

function Form() {
  let [userName, setUserName] = useState("");
  let [userRating, setUserRating] = useState("");
  let [userDept, setUserDept] = useState("");
  let [data, setData] = useState([]);

  const submitHandler = (e) => {
    console.log("submit");
    e.preventDefault();
    data.push({
      name: userName,
      dept: userDept,
      rating: userRating,
    });
    setData(data);
    setUserName("");
    setUserDept("");
    setUserRating("");
    console.log(data);
  };
  return (
    <>
      <div>
        <h1>Employee Feedback Form</h1>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="name">Name :-</label>
            <input
              type="text"
              id="name"
              name="name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Name"
              autoComplete="off"
            ></input>
          </div>
          <div>
            <label htmlFor="department">Department :-</label>
            <input
              type="text"
              id="department"
              name="department"
              value={userDept}
              onChange={(e) => setUserDept(e.target.value)}
              placeholder="Department Name"
              autoComplete="off"
            ></input>
          </div>
          <div>
            <label htmlFor="rating">Rating :-</label>
            <input
              type="number"
              name="rating"
              id="rating"
              value={userRating}
              onChange={(e) => setUserRating(e.target.value)}
              placeholder="Rating"
              autoComplete="off"
            ></input>
          </div>
          <div className="submit">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div className="datacontainer">
        <div className="data">
          {data.map((value, index) => {
            return (
              <div key={index} className="info">
                Name :{value.name} | Department :{value.dept} | Rating :{" "}
                {value.rating}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Form;
