import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <div className="wrapper">
      <h2>What do you want to do?</h2>

      <form
        className="form-send-image"
        method="POST"
        action="http://172.20.0.2:5000/sendImage"
      >
        <label>
          Select image
          <input type="file" />
        </label>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default App;
