import React from 'react'
import './LiveRight.css'

const LiveRight = () => {
  return (
    <div className="live-container2">
      <div className="liveright liveright1">
        <div className="live-left-section">
          <div className="live-year">
            <p>2020</p>
          </div>
          <h1>
            Daily <br /> Draw & Games
          </h1>
          <div className="live-get-container">
            <p>₹10</p>
            <div className="live-get-it-now">
              <h2>+ Get it now</h2>
            </div>
          </div>
        </div>
        <div className="live-draw-product">
          <img src="../../src/assets/images/earpod.png" alt="" />
        </div>
      </div>
      <div className="liveright liveright2">
        <div className="live-left-section">
          <div className="live-year">
            <p>2020</p>
          </div>
          <h1>
            Weekly <br /> Draw & Games
          </h1>
          <div className="live-get-container">
            <p>₹10</p>
            <button className="live-get-it-now">
              <h2>+ Get it now</h2>
            </button>
          </div>
        </div>
        <div className="live-draw-product">
          <img src="../../src/assets/images/iphone2.png" alt="" />
        </div>
      </div>
      <div className="liveright liveright3">
        <div className="live-left-section">
          <div className="live-year">
            <p>2020</p>
          </div>
          <h1>
            Monthly <br /> Draw & Games
          </h1>
          <div className="live-get-container">
            <p>₹10</p>
            <div className="live-get-it-now">
              <h2>+ Get it now</h2>
            </div>
          </div>
        </div>
        <div className="live-draw-product">
          <img src="../../src/assets/images/mini.png" alt="" />
        </div>
      </div>
      <div className="liveright liveright4">
        <div className="live-left-section">
          <div className="live-year">
            <p>2020</p>
          </div>
          <h1>The Big Match</h1>
          <h4 style={{ color: "white", fontWeight: 200 }}>
            Lifetime settlemet: <br /> Fortune of a Lifetime
          </h4>
          <div className="live-get-container">
            <p>₹10</p>
            <button className="live-get-it-now">
              <h2>+ Get it now</h2>
            </button>
          </div>
        </div>
        <div className="live-draw-product">
          <img src="../../src/assets/images/bigprize.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default LiveRight