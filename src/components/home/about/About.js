import "./About.css";
import React from "react";
import ButtonShell from "../ButtonShell";

export default function About() {
  const [show, setShow] = React.useState(false);

  let readButton = show === false ? "Read more" : "Read less";

  function toggle() {
    setShow((prevShow) => !prevShow);
  }

  return (
    <>
      <div className="about">
        <div className="aboutContent">
          <div className="sectionTitle">About Us</div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            a sapien justo. Nulla facilisis tristique imperdiet. Nullam a
            placerat odio. Sed in ex augue. Aliquam porta consectetur lorem sit
            amet ultrices. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos.
          </p>

          <ButtonShell className="allButton" onClick={toggle}>
            <>
              <div className="allButtonText">{readButton}</div>
              <img
                alt="arrow right"
                className="arrow-right"
                src="imgBlog/arrowright.svg"
              />
            </>
          </ButtonShell>
        </div>
        <img
          src="imgBlog/about.png"
          alt="Team 6 Hyper Island"
          className="aboutImage"
        />
        {show && (
          <div className="aboutModal">
            <div className="modalText">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse a sapien justo. Nulla facilisis tristique imperdiet.
                Nullam a placerat odio. Sed in ex augue. Aliquam porta
                consectetur lorem sit amet ultrices. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos.
              </p>
              <ButtonShell className="closeButton" onClick={toggle}>
                <>
                  <div className="allButtonText">Close</div>
                  <img
                    alt="arrow right"
                    className="arrow-right"
                    src="imgBlog/icon-close.svg"
                  />
                </>
              </ButtonShell>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
