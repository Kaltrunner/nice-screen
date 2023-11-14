import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { TimelineMax, Power0, gsap } from "gsap";
import "./splash.css";

function Splash() {
  const centerCircleRef = useRef(null);

  useEffect(() => {
    const splash = document.querySelector(".splash-header");
    const splashTitle = splash.querySelectorAll(".h1-div > h1, h2");
    const splashP = splash.querySelectorAll(".p-div > p");
    const splashCircle = centerCircleRef.current;
    const footer = document.querySelectorAll(".footer > div");

    const initHero = () => {
      gsap.set(splashTitle, { y: "-201%" });
      gsap.set(splashP, { y: "-601%" });
      gsap.set(splashCircle, { scale: 0, opacity: 0 });
      gsap.set(footer, { y: "201%" });
    };

    const showHero = () => {
      gsap
        .timeline({ defaults: { ease: "expo-out" } })
        .fromTo(
          splashTitle,
          {
            opacity: 0,
          },
          {
            duration: 1.5,
            opacity: 1,
            y: 0,
            stagger: 0.015,
          },
          0
        )
        .fromTo(
          splashP,
          {
            opacity: 0,
          },
          {
            duration: 1.5,
            opacity: 1,
            y: 0,
            stagger: 0.015,
          },
          0
        )
        .to(
          splashCircle,
          {
            duration: 1.5,
            scale: 1,
            opacity: 1,
            ease: "expo-out",
          },
          0
        )
        .fromTo(
          footer,
          {
            opacity: 0,
          },
          {
            duration: 1.5,
            opacity: 1,
            y: 0,
            stagger: 0.015,
          },
          0
        );
    };
    initHero();
    showHero();
  }, []);

  useEffect(() => {
    // const centerCircle = centerCircleRef.current;

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
      tl.to(centerCircleRef.current, 9, {
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
          <div className="splash-header">
            <div className="h1-div">
              <h1 className="splash-header-h1">NICE–SCREEN</h1>
            </div>
            <div className="p-div">
              <p className="splash-header-p">Product Design</p>
            </div>
            <div className="">
              <Link id="comp-link" to="about">
                <h2 className="splash-header-h2">About</h2>
              </Link>
            </div>
          </div>

          {/* <div className="design-div"> */}
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
          {/* </div> */}
        </div>

        {/* Correctly apply the ripple effect to the "ripple-container" element */}
        <div className="circle-container">
          <div className="center-circle" ref={centerCircleRef}></div>
        </div>

        <div className="footer">
          <div className="footer-divs">
            <Link id="comp-link" to="/work">
              <p id="footer-link">Work</p>
            </Link>

            {/* <p className="cordnates">
              See past and current
              <br /> projects.
            </p> */}
          </div>
          <div className="footer-divs">
            {/* <p className="exp" id="footer-link">Exp.</p> */}
            <p className="cordnates exp">linkedin</p>
            <p className="cordnates">joycettes@gmail.com</p>
            {/* <p className="cordnates">• 40.6782° N, 73.9442° W</p> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Splash;
