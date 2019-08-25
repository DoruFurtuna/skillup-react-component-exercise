import React from "react";
import "./App.css";

function App() {
  const comment = {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "https://placekitten.com/g/64/64"
    }
  };

  return (
    <div className="App">
      {/* Remove this line and put here the Header */}
      <div className="App-content">
        {/* Remove this line and put here the Comment */}
      </div>
    </div>
  );
}

export default App;
