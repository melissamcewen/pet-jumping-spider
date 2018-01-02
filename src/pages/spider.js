import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'


import { Jumbotron, Button, Container, Row, Col, Media, ListGroup, ListGroupItem,  Card, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody, Alert } from 'reactstrap';


const Spider = ({ data }) => (
  <div>
    <Jumbotron fluid>


      <Container>

        <h1 className="display-3">Where to get a jumping spider</h1>


      </Container>
    </Jumbotron>


    <Container>
      <h2>Wild or Captive Bred?</h2>
      <h3>Wild</h3>
      <p>Since jumping spiders are common throughout the United States, it is easy to just capture a wild spider in warmer weather. They can be found in almost every environment, even in cities. </p>
      <p>This option is free and has limited ecological impact. But if the spider is female, it may be gravid (ready to lay fertile eggs). The spiderlings (baby spiders) can be released outside if the weather is warm enough, but they also may escape some enclosures and end up in your house. </p>
      <p>Also a wild spider may be old and not live much longer.</p>

      <h3>Captive Bred</h3>
      <p>Spider breeders across the United States offer limited numbers of captive bred and raised spiders for sale. The advantage is you know the age of the spider and it is not likely to be gravid.</p>
      <p>Many people report that captive bred spiders are also more docile and easy to handle.</p>
      <Alert color="warning">
        Please be aware of the negative ecological impacts that the pet trade can have before buying a spider. Take precautions to make sure exotics don't escape. Capturing a local jumping spider has negligible ecological impact and can be a better choice for beginners.
      </Alert>

      <h2>Purchasing a Spider</h2>
      <p>If you chose to purchase a spider, I recommend our Facebook group, where breeders often post spiders for sale. In the winter it is harder to buy them since they are challenging to ship in the cold and most have breeding cycles dependent on the seasons. In the spring there are usually many options to chose from on the group. </p>

      <Alert color="warning">
        Use caution when purchasing spiders online. 
        <ul>
          <li>Some websites offer wild caught spiders, which may be old or gravid (about to lay eggs). This mass capture for sale may also have negative ecological impacts.</li>
          <li>Some sellers offer spiderlings (baby/juvenile spiders) that are too young to be adopted out. These often die since spiderlings have such a high mortality rate. To avoid this, do not purchase spiderlings that are not large enough to eat large prey (green/blue bottle flies/crickets).</li>
        </ul>
      </Alert>



    </Container>


    <Container>
      <h2>Species</h2>
      <p>These large and docile species are the most popular as pets</p>
      <CardDeck>
        <Card>
          <Img className="card-img-top" sizes={data.audax.childImageSharp.sizes}  style={{ width: "100%" }} alt="Adult female Phidippus audax jumping spider in Nashville, Tennessee by Kaldari - Creative Commons" />
          <CardBody>
            <CardTitle>Bold Jumping Spiders (Phidippus audax)</CardTitle>
            <CardSubtitle>A great option for beginners</CardSubtitle>
            <CardText> Audax are common medium-size spiders that are easy to capture outside. They are hardy and easy to keep. Most are black and white, but some have other colors and patterns.
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <Img className="card-img-top" sizes={data.regius.childImageSharp.sizes}  style={{ width: "100%" }} alt="Adult Female of Phidippus regius by Tim Heller - Creative Commons" />
          <CardBody>
            <CardTitle>Regal Jumping Spiders (Phidippus regius)</CardTitle>
            <CardSubtitle>Large and colorful</CardSubtitle>
            <CardText>These spiders are popular for their beautiful coloration and larger size. But they also tend to be more fragile than audax and require warmer temperatures.</CardText>
          </CardBody>
        </Card>

        <Card>
          <Img className="card-img-top" sizes={data.johnsoni.childImageSharp.sizes}  style={{ width: "100%" }} alt="Adult Female of Phidippus johnsoni by Kaldari - Creative Commons" />
          <CardBody>
            <CardTitle>Other </CardTitle>
            <CardSubtitle>Other Phidippus species</CardSubtitle>
            <CardText>Species such as the canopy jumper (Phidippus otiosus) and the red-backed jumping spider (Phidippus johnsoni) also make great pets</CardText>
            <Button>Read more (coming soon)</Button>
          </CardBody>
        </Card>
      </CardDeck>

      <hr />

      <h3>Other options</h3>
      <p>Some people keep smaller spiders like the Zebra jumping spider (Salticus scenicus) as pets. They are not easy for beginners to keep because they require special food (fruit flies) and easily escape. Plus they are a bit difficult to see and interact with due to their extremely small size.</p>
      <p>The tan jumping spider (Platycryptus undatus) is a smaller common species that is easily captured and docile. They are popular as pets but as of yet no one has been successful breeding them in captivity.</p>
    </Container>



  </div>
)


export const query = graphql`
  query spidersQuery {
    audax:file(relativePath: { eq: "images/audax.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpSizes
        }
      }
    }

    regius:file(relativePath: { eq: "images/regius.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpSizes
        }
      }
    }

   johnsoni:file(relativePath: { eq: "images/johnsoni.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;


export default Spider
