import "./splash.css";

function Splash() {
  return (
    <>
      <div className="splash-div">
        {/* <a href="#" className="link">
        <svg viewBox="0 0 200 200" width="auto">
          <path
            id="link-circle"
            className="link__path"
            d="M 20, 100 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
            fill="none"
          />

          <path
            className="link__arrow"
            d="M 75 100 L 125 100 L 110 85 M 125 100 L 110 115"
            fill="none"
          />

          <text className="link__text">
            <textPath href="#link-circle" stroke="none">
              nice screen - nice screen -
            </textPath>
          </text>
        </svg>
      </a> */}
        <div className="splash-txt-div">
          <h1 className="splash-header">NICE - SCREEN</h1>
        </div>
        {/* <a class="pseudo-text-effect" href="#" data-after="email">
            <span>email</span>
          </a> */}
        <div className="design-div">
          <div className="hidden-a">
            <ul className="splash-ul">
              <li className="splash-li"></li>
              <li className="splash-li">DESIGN - NYC</li>
              <li className="splash-li"></li>
            </ul>
            <span className="hidden-span">
              <img
                className="hidden-img"
                src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHQxcWNybWRpdG92djZobzdkeTQwNDgzdTl6dG5hbzViMjZvdDcwNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7btRkeE7RtAq8DnO/giphy.gif"
                alt=""
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Splash;
