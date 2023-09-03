// import Footer from "../footer/Footer";
import "./splash.css";

function Splash() {
  return (
    <>
      <div className="splash-div">
        {/* <div className="click-btn-div">
          <button className="click-btn">theme</button>
        </div> */}
        <div className="splash-txt-div">
          <h1>nice screen</h1>
          <div className="hidden-a">
            <ul className="splash-ul">
              <li className="splash-li">DESIGN - NYC</li>
              <li className="splash-li"></li>
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
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default Splash;
