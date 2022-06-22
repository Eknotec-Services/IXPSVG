import * as React from "react"

//Components
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import Resource from "../components/resource"
import logo from "../images/logo.png"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

// markup
const IndexPage = () => {
  return (
    <>
      <Navigation/>
      <div className="jumbotron">
        <div className="jumbotron-message container">
          <h1>Welcome to <br/><span> <img src={logo} width="385px"/> </span></h1>
          <h5>The number one place for information about Internet eXchange Points.</h5>
          <a href="/about" class="waves-effect waves-dark btn-large jumbotron-button">Learn More</a>
          <a class="waves-effect waves-dark btn-large jumbotron-button transparent">View Stats</a>
        </div>
      </div>
      {/* <main style={pageStyles} className="container">
        <title>Home Page</title>
      </main> */}
      <Resource/>
      <Footer/>
    </>
  )
}

export default IndexPage
