import ReactDOM from "react-dom";
import React, { Component } from 'react' 


const navbar = React.createElement(
  'nav', {
      id: 'main-nav',
      className: 'navbar'
  },
  listElement()
)

function listElement() {
  return (
<ul id="navbar-list">
  <li>Home</li>
  <li>Plane Models</li>
  <li>Contact Us</li>
  <li>Help</li>
  <li>Liability Information</li>
</ul>
  )
}
ReactDOM.render(navbar,
  document.getElementById('navbar'));