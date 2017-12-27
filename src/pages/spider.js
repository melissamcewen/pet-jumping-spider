import React from 'react'
import Link from 'gatsby-link'

import { Jumbotron, Button, Container, Row, Col, Media, ListGroup, ListGroupItem,  Card, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';


const Food = () => (
  <div>
    <Jumbotron fluid>


      <Container>

        <h1 className="display-3">Where to get a jumping spider</h1>
        <p className="lead">Blah blah</p>


      </Container>
    </Jumbotron>


    <Container>
      <h2>Wild or Captive Bred?</h2>

      <CardDeck>
        <Card inverse color="primary">
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>Wild <i class="fa fa-times"></i></CardTitle>
            <CardSubtitle>A very cheap option but you'll need to drill the holes yourself</CardSubtitle>
            <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Purchase</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>Captive bred</CardTitle>
            <CardSubtitle>Originally created for juvenile tarantulas, they come with vents already added</CardSubtitle>
            <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>

        <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>Other options: roaches, mealworms</CardTitle>
            <CardSubtitle>Originally created for juvenile tarantulas, they come with vents already added</CardSubtitle>
            <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </CardDeck>
    </Container>



  </div>
)

export default Food
