import React, { Component } from "react";

class form extends Component {
  render() {
    return (
      <div>
        <h1>Employee Feedback Form</h1>
        <form>
          <div>
            <label>Name :-</label>
            <input type="text"></input>
          </div>
          <div>
            <label>Department :-</label>
            <input type="text"></input>
          </div>
          <div>
            <label>Rating :-</label>
            <input type="number"></input>
          </div>
          <div className="submit">
            {/* <input type="submit" /> */}
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
export default form;
