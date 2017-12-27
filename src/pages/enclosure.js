import React from 'react'
import Link from 'gatsby-link'

import { Jumbotron, Button, Container, Row, Col, Media, ListGroup, ListGroupItem,  Card, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';


const Enclosure = () => (
  <div>
    <Jumbotron fluid>


      <Container>

        <h1 className="display-3">Jumping Spider Enclosures</h1>
        <p className="lead">Jumping spiders are easy to house in a variety of enclosures from simple to elaborate.</p>


      </Container>
    </Jumbotron>

    <Container>
      <p>An ideal home for your jumping spider should have:</p>
      <ul>
        <li>Ventilation: air holes to allow in air and out moisture</li>
        <li>An opening from the bottom or side: most jumping spiders will build their nest on the top of the enclosure, if it opens from the top you may disturb or destroy their nest</li>
      </ul>

    </Container>

    <Container>
      <h2>Deli Cups</h2>
      <em>A simple budget option</em>
      <p>A deli cup is a perfect option for a cheap no-frills spider home. Turn upside down so it opens on the bottom. Use a tack to make breathing holes on the sides and top. You can decorate with tape (spiders will not stick to the tape and actually seem to enjoy building on it) and paper.</p>


      <CardDeck>
        <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>Small</CardTitle>
            <CardSubtitle>For spiderlings</CardSubtitle>
            <CardText></CardText>
            <Button>Purchase</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>Large</CardTitle>
            <CardSubtitle>An attractive option but requires more advanced modifications</CardSubtitle>
            <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </CardDeck>
    </Container>



    <Container>
      <h2>Display Cases</h2>
      <em>Attractive but requires some more advanced modification</em>
      <p>These display cases are a popular option though they require either drilling holes with a special bit or purchasing already modified</p>


      <CardDeck>
        <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>Basic</CardTitle>
            <CardSubtitle>A very cheap option but you'll need to drill the holes yourself</CardSubtitle>
            <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Purchase</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>Modified Display Cases</CardTitle>
            <CardSubtitle>Originally created for juvenile tarantulas, they come with vents already added</CardSubtitle>
            <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </CardDeck>
    </Container>



    <Container>
      <h2>Terrariums</h2>
      <p>If you want to create a beautiful living environment for your spiders, a terrarium is a great option. You can use live or fake plants.</p>


      <CardDeck>
        <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>Exo Terra Nano Tall</CardTitle>
            <CardSubtitle>A very cheap option but you'll need to drill the holes yourself</CardSubtitle>
            <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Purchase</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>Substrate</CardTitle>
            <CardSubtitle>Originally created for juvenile tarantulas, they come with vents already added</CardSubtitle>
            <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>

        <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>Light</CardTitle>
            <CardSubtitle>Originally created for juvenile tarantulas, they come with vents already added</CardSubtitle>
            <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </CardDeck>
    </Container>



  </div>
)

export default Enclosure
