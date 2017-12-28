import React from 'react'
import Link from 'gatsby-link'

import { Jumbotron, Button, Container, Row, Col, Media, ListGroup, ListGroupItem,  Card, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';


const FAQ = () => (
  <div>
    <Jumbotron fluid>


      <Container>

        <h1 className="display-3">FAQ</h1>
        <p className="lead">Frequently asked questions</p>


      </Container>
    </Jumbotron>


    <Container>
      <h2>Are Jumping spiders dangerous/poisonous?</h2>
      <p>All jumping spiders produce venom, which they use to kill prey. This venom is not dangerous to humans. Jumping spiders rarely bite, if they do you may experience some mild pain and swelling.</p>


    </Container>
    <hr />

    <Container>
      <h2>How long do jumping spiders live?</h2>
      <p>6 months to 3 years depending on species and sex. Males usually don't live as long as females. The oldest recorded spider was a female bold jumping spider (Phidippus audax ) who lived 3 years.</p>


    </Container>



  </div>
)

export default FAQ
