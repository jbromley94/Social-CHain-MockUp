import React, { Component } from "react";
import ReactPlayer from "react-player";
import "./Home.css";

class Home extends Component {
  render() {
    return <div className="YoutubeVid">
      <h1>ABOUT SOCIAL CHAIN</h1>
        <ReactPlayer className="reactPlayer" url="https://www.youtube.com/watch?v=J_EPO2lwgpQ" />
        <div>
          
          <p className="textBlock">
            This is Social Chain. A global social media agency. We deliver
            tangible results that have a long term transformational impact
            on progressive brands. We use the latest technology to drive
            strategy, the right minds to inspire creativity, and over 386
            million people to maximise distribution. We currently have
            offices in Manchester, London, New York and Berlin. Interested
            in joining us? We’re always looking out for the next generation
            of talent to join our expansive team of creatives. We’re not
            looking for generic CVs, we’re looking for originality and a
            proven passion that grabs our attention.
          </p>
          <p className="textBlockDos">
            We’ve gone from a team of two to over 200 of the industry’s
            brightest young minds. Our family has grown, but even with new
            starters joining weekly, we’re still the same close-knit group
            we’ve always been. Every day we celebrate the talented
            individuals who make Social Chain. Their dedication ensures that
            we remain first, fearless and ever-changing, and a contagious,
            selfless family that gives a shit, always.
          </p>
        </div>
      </div>;
  }
}

export default Home;
