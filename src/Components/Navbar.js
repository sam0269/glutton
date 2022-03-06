import React from "react";
import "../style.css";

const Navbar = () => {
  return (
    <>
      <nav className="flex-1">
        <div className="logo">
          <h1>Glutton</h1>
        </div>
        <div className="menu-section ">
          <ol className="flex-1">
            <li>
              <a href="/"> Home </a>
            </li>
            <li>
              <a href="#nav-bar"> Menus </a>
            </li>
            <li>
              <a href=".card-container"> Activity </a>
            </li>
          </ol>
        </div>
      </nav>
      <section>
        <video style={{ height: "100rem", width: "100vw" }} autoPlay loop muted>
          <source src="clip/video.mp4" type="video/mp4" />
        </video>
        {/* <article>
          <span>IF MUSIC BE THE FOOD OF LOVE PLAY ON</span>
          <h1>RESTAURANT</h1>
          <span>
            Food, in the end, in our own tradition, is something holy. It's not
            about nutrients and calories. It's about sharing. It's about
            honesty. It's about identity.
          </span>
        </article> */}
      </section>
    </>
  );
};

export default Navbar;
