import React from "react";
import Slides from "./Slides";

const slides = [
  { title: "Slide 1", text: "This is the first slide" },
  { title: "Slide 2", text: "This is the second slide" },
  { title: "Slide 3", text: "This is the third slide" },
];

function App() {
  return (
    <div>
      <Slides slides={slides} />
    </div>
  );
}
export default App;
