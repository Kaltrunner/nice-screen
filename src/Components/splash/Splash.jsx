// import React, { useEffect, useRef } from "react";
// import Orb from "../Orb/Orb";
// import "./splash.css";

// function Splash() {
//   const centerCircleRef = useRef(null);

//   useEffect(() => {
//     const backgroundClasses = [
//       "bg-color1",
//       "bg-color2",
//       "bg-color3",
//       "bg-color4",
//       "bg-color5",
//     ];

//     const randomIndex = Math.floor(Math.random() * backgroundClasses.length);

//     const selectedClass = backgroundClasses[randomIndex];

//     if (centerCircleRef.current) {
//       centerCircleRef.current.classList.add(selectedClass);
//     }

//     return () => {
//       backgroundClasses.forEach((bgClass) => {
//         if (centerCircleRef.current) {
//           centerCircleRef.current.classList.remove(bgClass);
//         }
//       });
//     };
//   }, []);

//   return (
//     <>
//       <div className="splash-div">
//         <div className="center-circle" ref={centerCircleRef}></div>
//         <div className="orb-container">
//           <Orb />
//         </div>
//         s
//         <div className="splash-txt-div">
//           <h1 className="splash-header">NICE - SCREEN</h1>
//         </div>
//         <div className="design-div">
//           <div className="hidden-a">
//             <ul className="splash-ul">
//               <li className="splash-li"></li>
//               <li className="splash-li">DESIGN - NYC</li>
//               <li className="splash-li"></li>
//             </ul>
//             <span className="hidden-span">
//               <img
//                 className="hidden-img"
//                 src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHQxcWNybWRpdG92djZobzdkeTQwNDgzdTl6dG5hbzViMjZvdDcwNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7btRkeE7RtAq8DnO/giphy.gif"
//                 alt=""
//               />
//             </span>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Splash;

import React, { useEffect, useRef } from "react";
import { TimelineMax, Power0, gsap } from "gsap";
import "./splash.css";

function Splash() {
  const centerCircleRef = useRef(null);

  useEffect(() => {
    const splash = document.querySelector(".splash-scroll-div");
    const splashTitle = splash.querySelectorAll(".splash-scroll-div > h1");

    const initHero = () => {
      gsap.set(splashTitle, { y: "201%" });
    };

    const showHero = () => {
      gsap.timeline({ defaults: { ease: "expo-out" } }).fromTo(
        splashTitle,
        {
          opacity: 0,
        },
        {
          duration: 1.25,
          opacity: 1,
          y: 0,
          stagger: 0.055,
        },
        0
      );
    };
    initHero();
    showHero();
  }, []);

  useEffect(() => {
    const centerCircle = centerCircleRef.current;

    // Define the gradients you want to use
    const gradients = [
      "radial-gradient(circle at center, #FF5733, #5733FF)",
      "radial-gradient(circle at center, #E4FF47, #1EFBFB)",
      "radial-gradient(circle at center, #E4FF47, #1700FF)",
      "radial-gradient(circle at center, #FAE5F5, #91535E)",
      "radial-gradient(circle at center, #33FF57, #FF5733",
      "radial-gradient(circle at center, #E12D2D, #1700FF)",
      "radial-gradient(circle at center, #11C74D, #F638D7)",
    ];

    // Create a timeline for the gradient animation
    const tl = new TimelineMax({ repeat: -1, yoyo: true });

    // Add gradient-changing animations to the timeline
    gradients.forEach((gradient) => {
      tl.to(centerCircle, 9, {
        backgroundImage: gradient,
        ease: Power0.easeNone,
      });
    });

    // Start the animation
    tl.play();
  }, []);

  return (
    <>
      <div className="splash-div">
        <div className="splash-txt-div">
          <div className="splash-scroll-div">
            <h1 className="splash-header">NICE - SCREEN</h1>
          </div>

          <div className="design-div">
            {/* <div className="hidden-a">
              <ul className="splash-ul">
                <li className="splash-li"></li>
                <li className="splash-li">DESIGN - NYC</li>
                <li className="splash-li"></li>
              </ul>
              <span className="hidden-span">
                <img
                  className="hidden-img"
                  src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHQxcWNybWRpdG92djZobzdkeTQwNDgzdTl6dG5hbzViMjZvdD70.gif"
                  alt=""
                />
              </span>
            </div> */}
          </div>
        </div>
        <div className="circle-container">
          <div className="center-circle" ref={centerCircleRef}></div>
        </div>
        <div className="footer">
          <div className="cordnates">• 40.6782° N, 73.9442° W</div>
        </div>
      </div>
    </>
  );
}

export default Splash;
