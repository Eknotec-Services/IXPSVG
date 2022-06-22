module.exports = {
  siteMetadata: {
    title: `SVGIXP`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-react-helmet", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/logo.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};