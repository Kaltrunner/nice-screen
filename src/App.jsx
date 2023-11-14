// import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
import Header from "./Components/splash/Splash";
import About from "./Components/about/About";
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
        outerSize={150}
        color="245, 216, 245"
        outerAlpha={1}
        innerScale={0.5}
        outerScale={0.8}
        trailingSpeed={2}
        hasBlendMode={true}
        filter={true}
        outerStyle={{
          mixBlendMode: "difference",
          filter: "blur(50px)",
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
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
