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
        <div class="row">
          <div class="col-sm">Train Name</div>
          <div class="col-sm">Destination</div>
          <div class="col-sm">Frequency</div>
          <div class="col-sm">Next Arrival</div>
          <div class="col-sm">Minutes Away</div>
        </div>
      </div>
      <TrainInput />
    </div>
  );
}

export default App;
