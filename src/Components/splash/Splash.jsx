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
      gsap.set(splashTitle, { opacity: 0 });
      gsap.set(splashP, { opacity: 0 });
      gsap.set(splashCircle, { scale: 0.9, opacity: 0 });
      gsap.set(footer, { opacity: 0 });
    };

    const showHero = () => {
      gsap
        .timeline({ defaults: { ease: "expo-out" } })
        .fromTo(
          splashTitle,
          {
            opacity: 0,
            webkitFilter: "blur(4px)",
          },
          {
            webkitFilter: "blur(0px)",
            delay: 0.25,
            duration: 0.5,
            opacity: 1,
          },
          0
        )
        .fromTo(
          splashP,
          {
            opacity: 0,
            webkitFilter: "blur(4px)",
          },
          {
            webkitFilter: "blur(0px)",
            delay: 0.25,
            duration: 0.5,
            opacity: 1,
          },
          0
        )
        .to(
          splashCircle,
          {
            delay: 1,
            duration: 1.5,
            scale: 1,
            opacity: 1,
            ease: "expo-in-out",
          },
          0
        )
        .fromTo(
          footer,
          {
            opacity: 0,
            webkitFilter: "blur(4px)",
          },
          {
            webkitFilter: "blur(0px)",
            delay: 0.25,
            duration: 0.5,
            opacity: 1,
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
        </div>

        <div className="circle-container">
          <div className="center-circle" ref={centerCircleRef}></div>
        </div>

        <div className="footer">
          <div className="footer-divs">
            <Link id="comp-link" to="/work">
              <p id="footer-link">Work</p>
            </Link>
          </div>
          <div className="footer-divs">
            {/* <p className="exp" id="footer-link">Exp</p> */}
            <p className="cordnates exp">linkedin</p>
            <p className="cordnates">joycettes@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Splash;
