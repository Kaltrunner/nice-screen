import React from "react";
import AnimatedCursor from "react-animated-cursor";
import Header from "./Components/splash/Splash";
import "./App.css";

function App() {
  return (
    <>
      <AnimatedCursor
        id="mouse"
        innerSize={0}
        outerSize={700}
        color="250,0,255"
        outerAlpha={1}
        innerScale={0.5}
        outerScale={0.5}
        trailingSpeed={25}
        hasBlendMode={true}
        filter={true}
        outerStyle={{
          mixBlendMode: "hard-light",
          filter: "blur(200px)",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <div className="body">
        <Header />
      </div>
    </>
  );
}

export default App;
