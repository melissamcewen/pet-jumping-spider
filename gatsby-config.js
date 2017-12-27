module.exports = {
  siteMetadata: {
    title: `My Pet Jumping Spider`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `root`,
        path: `${__dirname}/src/`,
      },
    }

  ],
}
