import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./about.css";

function About() {
  useEffect(() => {
    const about = document.querySelector(".about-text-div");
    const marquee = document.querySelectorAll(".marquee-div");

    const initHero = () => {
      gsap.set(about, { x: "-10%" });
      gsap.set(marquee, { y: "50%" });
    };

    const showHero = () => {
      gsap
        .timeline({ defaults: { ease: "expo-out" } })
        .fromTo(
          about,
          {
            opacity: 0,
            webkitFilter: "blur(6px)",
          },
          {
            duration: 1.25,
            opacity: 1,
            x: 0,
            webkitFilter: "blur(0px)",
            stagger: 0.015,
          },
          0
        )
        .fromTo(
          marquee,
          {
            opacity: 0,
            delay: 1.25,
            webkitFilter: "blur(6px)",
          },
          {
            duration: 1.25,
            opacity: 1,
            webkitFilter: "blur(0px)",
            y: 0,
            stagger: 0.015,
          },
          0
        );
    };
    initHero();
    showHero();
  }, []);

  return (
    <>
      <div className="splash-div">
        <div className="splash-txt-div">
          <div className="splash-header">
            <div className="h1-div">
              <Link id="comp-link" to="/">
                <h1 className="splash-header-h1" id="about-home">
                  NICE–SCREEN
                </h1>
              </Link>
            </div>
            <div className="p-div">
              <p className="splash-header-p">Product Design</p>
            </div>
            <div className="">
              <h2 className="splash-header-h2">About</h2>
            </div>
          </div>
        </div>
        <div className="mid-div">
          <div className="about-text-div">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              ipsum eius explicabo possimus illo eveniet minus nihil
              praesentium, quas aspernatur aperiam consequatur, nisi facilis. In
              repellendus neque possimus consequuntur doloremque?
            </p>
          </div>
          <div className="marquee-div">
            <div className="marquee-text">
              <p>
                Lorem / ipsum / dolor / sit / amet / consectetur / adipisicing /
                elit /
              </p>
              <p>
                Lorem / ipsum / dolor / sit / amet / consectetur / adipisicing /
                elit.
              </p>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footer-divs">
            <Link id="comp-link" to="/work">
              <p id="footer-link">Work</p>
            </Link>
          </div>
          <div className="footer-divs">
            {/* <p className="exp" id="footer-link">exp</p> */}
            <a
              href="https://www.linkedin.com/in/joyce-r/"
              target="_blank"
              rel="noreferrer"
              id="linkedin-link"
            >
              <p className="cordnates exp">linkedin</p>
            </a>
            <a
              href="mailto:joycettes@gmail.com?subject=Hello!"
              id="linkedin-link"
            >
              <p className="cordnates">joycettes@gmail.com</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
