import React, { Component } from "react";
import { per1Img, per2Img } from "../assets/images";
import Mp4Video from "../assets/videos/video.mp4";
import WebmVideo from "../assets/videos/video.webm";

class Team extends Component {
  render() {
    return (
      <section className="team-section" id="team-section">
        <div className="video">
          <video className="video-content" autoPlay muted loop>
            <source src={Mp4Video} />
            <source src={WebmVideo} />
            Your Browser is not supported!!
          </video>
        </div>
        <div className="heading margin-bottom-big text-center">
          <h4>Our Team Support you.</h4>
        </div>

        <div className="margin-bottom-big">
          <div className="row">
            <div className="story">
              <figure className="story-image">
                <img src={per1Img} alt="Image" className="story-image-img" />
                <figcaption className="story-image-caption">
                  Danilo Kashs
                </figcaption>
              </figure>
              <div className="story-text">
                <h3 className="h3 margin-bottom-small">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, ipsum sapiente aspernatur libero repellat quis
                  consequatur ducimus quam nisi exercitationem omnis earum qui.
                  Aperiam, ipsum sapiente aspernatur libero repellat quis
                  consequatur ducimus quam nisi.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="story">
              <figure className="story-image">
                <img src={per2Img} alt="Image" className="story-image-img" />
                <figcaption className="story-image-caption">
                  Khamees Sados
                </figcaption>
              </figure>
              <div className="story-text">
                <h3 className="h3 margin-bottom-small">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, ipsum sapiente aspernatur libero repellat quis
                  consequatur ducimus quam nisi exercitationem omnis earum qui.
                  Aperiam, ipsum sapiente aspernatur libero repellat quis
                  consequatur ducimus quam nisi.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <a href="#popup" className="btn btn-green">
            Read More!
          </a>
        </div>
      </section>
    );
  }
}

export default Team;
