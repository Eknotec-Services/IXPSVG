import React from "react";
// import { Helmet } from "react-helmet";

//Styles
import "../styles/custom.css"

// data
const links = [
    {
      text: "IXP Database",
      url: "https://ixpdb.euro-ix.net/en/",
      description:
        "The Internet eXchange Point Database is an authoritative, comprehensive, public source of data related to IXPs.To find out more or to get involved see here.",
      image: "https://www.euro-ix.net/media/filer_public/92/7c/927c2721-4517-466d-829a-00f2f3f08b86/ixpdb.png",
    },
    {
      text: "SVG IXP Github Page",
      url: "https://github.com/euro-ix",
      description:
        "The community is working on a number of projects that would be of interest to IXPs and networks, including Standarding Large BGP Communitties at IXPs and realistic benchmarks for GoBGP and BIRD route servers. Take a look at our GitHub page and get involved!",
      image: "https://www.euro-ix.net/media/filer_public/8a/82/8a82ac15-72f4-4471-8493-0c67a714c781/github.png",
    },
    {
      text: "Support IXPs",
      url: "https://www.euro-ix.net/en/support-ixps/",
      description:
        "What is an IXP in need? Are you a planned or already established IXP that has very limited or no funding, or technical/operational support? We're here to help! With thanks to contributions from ISOC, RIPE NCC, InterLAN and VIX! Have a look at our Support Programs and get involved!",
      image: "https://www.euro-ix.net/media/filer_public/41/f5/41f55088-3216-4158-84c3-666c370d57e2/support_ixps.png",
    },
  ]

const Resource = () => {
    return(
        <div className="resources">
            <div className="container">
                <div className="row">
                {links.map(link => (
                    <a href={link.url}>  
                        <div className="col l4 s12">
                            <img src={link.image} width="40px"/>
                            <h4>{link.text}</h4>
                            <p>{link.description}</p>
                        </div>
                    </a>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Resource;