import React from 'react'
import Link from 'gatsby-link'
import { Jumbotron, Button, Container, Row, Col, Media } from 'reactstrap';



const IndexPage = ({ data }) => {
console.log(data)
  return <div>

    <Jumbotron fluid>


      <Container>

        <h1 className="display-3">A pet jumping spider???</h1>

        <Row>
          <Col xs="12" sm="4">
            <img className="img-fluid" src={data.spider.childImageSharp.sizes.src} alt="Generic placeholder image" />
          </Col>
          <Col xs="12" sm="8">
            <p className="lead">It may surprise many people to learn that a growing number of people enjoy keeping jumping spiders as pets. These lovable little creatures are surprisingly intelligent and can provide so much enjoyment and many opportunities for learning more about nature.</p>
             <Link to="/getting-started" className="btn btn-primary btn-lg active" >Getting Started</Link>


          </Col>
        </Row>

      </Container>

      </Jumbotron>
      <Container>
   
            <p>This site will focus on the most popular species of kept as pets, members of the phidippus genus or phids for short. Native to North America, they are kept as pets worldwide because they are relatively large and very easy to care for. While this books will focus on them, most of the advice applies to other species as well and you'll find some information on other non-phiddipus species throughout the book, as well as some information about tropical species in the appendix.</p>
           <p>I started this site for the <a href="https://www.facebook.com/groups/1620188578256853/" target="_blank">Jumping Spider Keepers/Husbandry FB Group</a> and I've put it on here so it can get to a wider audience. I'd love to hear your feedback, since there isn't much out there on the subject. All links to Amazon are affiliate links, which help support my writing work. Join the group for site updates and to learn more about these wonderful animals.</p>
      </Container>


  </div>
}


export const query = graphql`
  query headerQuery {
      spider:file(
      relativePath: { eq: "images/bitty.jpg" }
    ) {
      childImageSharp {
        sizes(maxWidth: 500, quality: 40) {
          src
        }
      }
    }
  }
`;

export default IndexPage
