// import React, { useEffect } from "react";
import AnimatedCursor from "react-animated-cursor";
import Header from "./Components/splash/Splash";
import "./App.css";

function App() {
  // useEffect(() => {
  //   const backgroundClasses = [
  //     "bg-color1",
  //     "bg-color2",
  //     "bg-color3",
  //     "bg-color4",
  //     "bg-color5",
  //   ];

  //   const randomIndex = Math.floor(Math.random() * backgroundClasses.length);

  //   const selectedClass = backgroundClasses[randomIndex];

  //   document.body.classList.add(selectedClass);

  //   return () => {
  //     backgroundClasses.forEach((bgClass) => {
  //       document.body.classList.remove(bgClass);
  //     });
  //   };
  // }, []);

  return (
    <>
      <AnimatedCursor
        id="mouse"
        innerSize={0}
        outerSize={200}
        color="245, 216, 245"
        outerAlpha={1}
        innerScale={0.5}
        outerScale={0.8}
        trailingSpeed={8}
        hasBlendMode={true}
        filter={true}
        outerStyle={{
          // mixBlendMode: "hard-light",
          filter: "blur(75px)",
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
      <div id="body">
        <Header />
      </div>
    </>
  );
}

export default App;
