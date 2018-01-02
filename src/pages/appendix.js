import React from 'react'
import Link from 'gatsby-link'

import { Jumbotron, Button, Container, Row, Col, Media, ListGroup, ListGroupItem,  Card, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';


const Advanced = () => (
  <div>
    <Jumbotron fluid>


      <Container>

        <h1 className="display-3">Appendix</h1>
        <p className="lead">Topics for experienced keepers and references</p>


      </Container>
    </Jumbotron>

    <Container>
    <h2>References</h2>
    <ul>
      <li>Lewbart, G. A. (Ed.). (2011). <a href="http://amzn.to/2EtDfOg">Invertebrate medicine.</a> John Wiley & Sons.
Chicago </li>
    </ul>
    </Container>



  </div>
)

export default Advanced
