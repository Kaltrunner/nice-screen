import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./work.css";

function Work() {
  useEffect(() => {
    const scroll = document.querySelectorAll(".scroll-text");
    let menu = document.querySelector(".scroll-text-div");
    let items = document.querySelectorAll(".text-div");
    let clones = [];
    let disableScroll = false;
    let scrollHeight = 0;
    let scrollPosition = 0;
    let clonesHeight = 0;

    function getScrollPosition() {
      return menu.scrollTop;
    }

    function setScrollPosition(position) {
      menu.scrollTop = position;
    }

    function getClonesHeight() {
      clonesHeight = 0;

      clones.forEach((clone) => {
        clonesHeight += clone.offsetHeight;
      });

      return clonesHeight;
    }

    function reCalc() {
      scrollPosition = getScrollPosition();
      scrollHeight = menu.scrollHeight;
      clonesHeight = getClonesHeight();

      if (scrollPosition <= 0) {
        setScrollPosition(1);
      }
    }

    function scrollUpdate() {
      if (!disableScroll) {
        scrollPosition = getScrollPosition();
        if (clonesHeight + scrollPosition >= scrollHeight) {
          setScrollPosition(1);
          disableScroll = true;
        } else if (scrollPosition <= 0) {
          setScrollPosition(scrollHeight - clonesHeight);
          disableScroll = true;
        }
      }
      if (disableScroll) {
        window.setTimeout(() => {
          disableScroll = false;
        }, 10);
      }
    }

    function onLoad() {
      items.forEach((item) => {
        const clone = item.cloneNode(true);
        menu.appendChild(clone);
        clone.classList.add("js-clone");
      });
      clones = menu.querySelectorAll(".js-clone");

      reCalc();

      menu.addEventListener(
        "scroll",
        () => {
          window.requestAnimationFrame(scrollUpdate);
        },
        false
      );

      window.addEventListener(
        "resize",
        () => {
          window.requestAnimationFrame(reCalc);
        },
        false
      );
    }

    window.onload = onLoad();

    const initHero = () => {
      gsap.set(scroll, { y: "50%" });
    };

    const showHero = () => {
      gsap.timeline({ defaults: { ease: "expo-out" } }).fromTo(
        scroll,
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
              <Link id="comp-link" to="/about">
                <h2 className="splash-header-h2">About</h2>
              </Link>
            </div>
          </div>
        </div>
        <div className="mid-div">
          <div className="scroll-text-div">
            <div className="text-div">
              <p className="scroll-text">lorem</p>
            </div>
            <div className="text-div">
              <p className="scroll-text">ipsum</p>
            </div>

            <div className="text-div">
              <p className="scroll-text">dolor</p>
            </div>
            <div className="text-div">
              <p className="scroll-text">sit</p>
            </div>
            <div className="text-div">
              <p className="scroll-text">amet</p>
            </div>
            <div className="text-div">
              <p className="scroll-text">consectetur</p>
            </div>
            <div className="text-div">
              <p className="scroll-text">adipisicing</p>
            </div>
            <div className="text-div">
              <p className="scroll-text">elit</p>
            </div>
            <div className="text-div">
              <p className="scroll-text">sed</p>
            </div>
            <div className="text-div">
              <p className="scroll-text">eiusmod</p>
            </div>
            <div className="text-div">
              <p className="scroll-text">lorem</p>
            </div>
            <div className="text-div">
              <p className="scroll-text">ipsum</p>
            </div>
            <div className="text-div">
              <p className="scroll-text">dolor</p>
            </div>
            <div className="text-div">
              <p className="scroll-text">sit</p>
            </div>
            <div className="text-div">
              <p className="scroll-text">amet</p>
            </div>
            <div className="text-div">
              <p className="scroll-text">consectetur</p>
            </div>
            <div className="text-div">
              <p className="scroll-text">adipisicing</p>
            </div>
            <div className="text-div">
              <p className="scroll-text">elit</p>
            </div>
            <div className="text-div">
              <p className="scroll-text">sed</p>
            </div>
            <div className="text-div">
              <p className="scroll-text">eiusmod</p>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footer-divs">
            <p id="footer-link">Work</p>
          </div>
          <div className="footer-divs">
            {/* <p className="exp" id="footer-link">exp</p> */}
            <p className="cordnates exp">linkedin</p>
            <p className="cordnates">joycettes@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
