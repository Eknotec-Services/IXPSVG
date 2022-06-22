import * as React from "react"

//Components
import Navigation from "../components/navigation"
import Footer from "../components/footer"
// import Jumbo from "../components/jumbo"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

// markup
const ContactPage = () => {
  return (
    <>
      <Navigation/>
      {/* <Jumbo><h1 className="container page-title">Contact Us</h1></Jumbo> */}
      <main style={pageStyles} className="container">
        <title>Contact Page</title>
        <p>
        SVG IXP is headquartered in Arnos Vale, St. Vincent and the Grenadines with operations located throughout the country. 
        We look forward to making your vision a reality.  E-mail us with any questions or inquiries, or call 609.759.5100.  
        We would be happy to answer your questions or set up a meeting with you.
        </p>
        <div className="row">
            <div className="col l6 s12">
                <h4>ADDRESS</h4>
                <p>IXP Corporation<br/>
                150 College Road West,<br/>
                Suite 200<br/>
                Princeton, NJ 08540</p>
            </div>
            <div className="col l6 s12">

                <h4>PHONE</h4>
                    <p>609.759.5100</p>
                    
                <h4>E-MAIL</h4>
                    <p>info@ixpcorp.com</p>

            </div>
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default ContactPage
