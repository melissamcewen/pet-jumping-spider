import React from 'react'
import Link from 'gatsby-link'

import { Jumbotron, Button, Container, Row, Col, Media, ListGroup, ListGroupItem,  Card, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';


const Food = () => (
  <div>
    <Jumbotron fluid>


      <Container>

        <h1 className="display-3">Jumping Spider Food</h1>
        <p className="lead">There is no getting around the fact that jumping spiders need to eat real live bugs. Here's how to chose the best food for you.</p>


      </Container>
    </Jumbotron>


    <Container>


      <CardDeck>
        <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>Flies</CardTitle>
            <CardSubtitle>A very cheap option but you'll need to drill the holes yourself</CardSubtitle>
            <CardText>
              <ul>
                <li>Test</li>
              </ul>
            </CardText>
            <Button>Purchase</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>Crickets</CardTitle>
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
