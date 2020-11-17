import ReactDOM, {render} from "react-dom";
import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <Router>
        <nav id="main-nav" className="navbar">
        <ul id="navbar-list">
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to ="/models">
            Plane Models
              </Link>
              </li>
         <li>
         <Link to="/contact">
           Contact Us
            </Link>
           </li>
          <li>
            <Link to="/help">
              Help</Link></li>
        </ul>
      </nav>
      </Router>
    )
  }
}

class MainContainer extends React.Component {
  render() {
    return (

        <div className="main-content container" id="clouds">
          <Navbar />
          <div className="header-text">
            <h4 className="mid-header">How to Fly</h4>
            <h1 className="main-header">A Plane</h1>
          </div>
          <div className="hero-image">
            <img src="./src/assets/plane.png" className="hero-plane"></img>
          </div>
        </div>
  
    )
  }
}

class CardModule extends React.Component {
  render() {
    return (
      <div className="card-module">
        <div className="module-card-left"></div>
        <div className="module-card-right"></div>
        <div className="module-card-left-2"></div>
        <div className="module-card-right-2"></div>
      </div>
    )
  }
}
class ScrollContent extends React.Component {
  render() {
    return (
      <div className="container scroll-content">
        <div className="scroll-text-card">
          <div className="scroll-text">
            <h1 className="scroll-text scroll">Available Plane Modules we<br/>
              <span className="scroll-text-minor scroll">
                can help you with!
              </span>
            </h1>

          </div>
        </div>
        <div className="scroll-box">
          <div className="card">
            <CardModule/>

          </div>
        </div>
      </div>
    )
  }
}

function MidText(props) {
  return (
    <div className="mid-text-section">

      <h2 className="main-section-text mid-text">{props.header}<br/></h2>
      <span className="main-quote">{props.mainquote1}</span><br/>
      <span className="main-quote ">{props.mainquote2}</span>
      <br/>
      <span className="blockquote">({props.blockquote})</span>

    </div>
  )
}

function ScrollImage(props) {
  return (
    <div className="container floating-images">
      <div className="image-section">
        <div id="del1" className="delayed-section" data-scrub="0.4">
          <div className="innerContainer">
            <img src={props.img1} alt=""></img>
          </div>
        </div>
        <div id="del2" className="delayed-section" data-scrub="0.2">
          <div className="innerContainer">
            <img src={props.img2} alt=""></img>
          </div>
        </div>
        <div id="del3" className="delayed-section">
          <div className="innerContainer">
            <img src={props.img3} alt=""></img>
          </div>
        </div>
      </div>
    </div>

  )
}
class Footer extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="footer-text">
          <div className="copyright">
            <h5 >Developed by : Kaflay Sabi</h5>
          </div>
          <div className="resources">
            <h5>Resources Utillized: UnSplash Images FreePik Images GSAP Development
              Documentation
            </h5>
          </div>
        </div>
      </div>
    )
  }
}
function FinalSection() {
  return (
    <div className="container">
      <div className="final-section">
        <div className="info-text">
          <div className="col1">
            <h5>the length</h5>
          </div>
          <div className="col2">
            <h5>the wing span</h5>
          </div>
          <div className="col3">
            <h5>the weight</h5>
          </div>
        </div>
        <img className="flying-plane" src="./src/assets/flyingplane.png"></img>
        <div className="planeHanger">
          <Footer/>
        </div>
      </div>
    </div>
  )
}

function Homepage(){
  return(
    <div className="container">
  <MainContainer />
  <ScrollContent />
  <MidText
  header="Start by knowing the structure of an aircraft operates.After all, "
  mainquote1="Learn the rules like a pro,"
  mainquote2="before you fly like an artist"
  blockquote="or something along the same lines!"/>
  <ScrollImage
  img1="./src/assets/plane1.jpg"
  img2="./src/assets/plane2.jpg"
  img3="./src/assets/plane3.jpg"/>
  <FinalSection />
  </div>
  )
}



ReactDOM.render(
  <Homepage />,document.getElementById('hero-page'));
