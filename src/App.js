import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TrainInput from "./components/trainInput";

function App() {
  return (
    <div className="App">
      <div className="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">It's Time For Some TRAINS!!!!</h1>
          <p class="lead">chugga chugga choo choo</p>
        </div>
      </div>
      <div class="container">
        <table class="table">
          <thead class="thread-dark">
            <tr>
              <th scope="col">Train Name</th>
              <th scope="col">Destination</th>
              <th scope="col">Frequency</th>
              <th scope="col">Next Arrival</th>
              <th scope="col"> Minutes Away</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
      <div class="container">
        <TrainInput />
      </div>
    </div>
  );
}

export default App;
