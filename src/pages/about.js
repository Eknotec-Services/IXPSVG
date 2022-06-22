import * as React from "react"

//Components
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import Jumbo from "../components/jumbo"
import dummy from "../images/dummy.png"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

// data
const teams = [
  {
    name: "Team Member 1",
    position: "https://www.gatsbyjs.com/docs/tutorial/",
    biography:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    image:dummy,
  },
  {
    name: "Team Member 2",
    position: "https://www.gatsbyjs.com/docs/tutorial/",
    biography:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    image:dummy,
  },
  {
    name: "Team Member 3",
    position: "https://www.gatsbyjs.com/docs/tutorial/",
    biography:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    image:dummy,
  },
  {
    name: "Team Member 4",
    position: "https://www.gatsbyjs.com/docs/tutorial/",
    biography:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    image:dummy,
  },
  {
    name: "Team Member 5",
    position: "https://www.gatsbyjs.com/docs/tutorial/",
    biography:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    image:dummy,
  },
  {
    name: "Team Member 6",
    position: "https://www.gatsbyjs.com/docs/tutorial/",
    biography:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    image:dummy,
  },
]

// markup
const AboutPage = () => {
  return (
    <>
      <Navigation/>
      <Jumbo><h1 className="container page-title">About SVGIXP</h1></Jumbo>
      <main style={pageStyles} className="container">
        <title>About Page</title>
        <p>
          The National Telecommunications Regulatory Commission (NTRC) held an official opening ceremony of the St. Vincent and the Grenadines 
          Internet Exchange Point on Wednesday, 21st November 2012 at their Headquarters on Maurice Bishop Highway, St. George. 
          The occasion marked the relocation of the Grenada Internet Exchange Point to the NTRC Headquarters and the installation 
          of a L-Root DNS Server which is also located at the NTRC Headquarters.
          The Internet Exchange Point (IXP) is a facility that will allow Grenadian Internet Service Providers (ISPs) to keep domestic 
          internet traffic in country instead of routing it through the USA or Europe.
        </p>

        <h3 className="team-header">Meet the team</h3>
        {teams.map(team => (
            <div className="row">
              <div className="col l8 s12">
                  <h4>{team.name}</h4>
                  <p>{team.position}</p>
                  <p>{team.biography}</p>
              </div>
              <div className="col l4 s12">
                  <img src={team.image} width="200px"/>
              </div>
            </div>
        ))}
      </main>
      <Footer/>
    </>
  )
}

export default AboutPage
