import React from "react";
import "../App.css";

const TrainInput = () => {
  return (
    <form>
      <div className="form-group">
        <label for="trainName">Train Name</label>
        <input
          type="text"
          class="form-control"
          id="trainName"
          placeholder="Enter train name"
        ></input>
      </div>
      <div className="form-group">
        <label for="destination"> Destination</label>
        <input
          type="text"
          class="form-control"
          id="destination"
          placeholder="Boston"
        ></input>
      </div>
      <div className="form-group">
        <label for="time"> First Train Time (HH:mm military time)</label>
        <input
          type="text"
          class="form-control"
          id="time"
          placeholder="20:20"
        ></input>
      </div>
      <div className="form-group">
        <label for="frequency"> Frequency (minutes)</label>
        <input
          type="number"
          class="form-control"
          id="frequency"
          placeholder="10"
        ></input>
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
export default TrainInput;
