module.exports = {
  siteMetadata: {
    title: `My Pet Jumping Spider`,
    siteUrl: `https://www.mypetjumpingspider.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
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
