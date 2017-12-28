import React from 'react'
import Link from 'gatsby-link'
import ReactGA from 'react-ga'
import Img from 'gatsby-image'




import { Jumbotron, Button, ButtonGroup, Container, Row, Col, Media, ListGroup, ListGroupItem,  Card, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody, Alert } from 'reactstrap';


const Enclosure = ({ data })  => {
  console.log(data)
 return <div>
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
        <li>Placed in indirect sunlight or lighted (see Terrarium lighting section). Direct sunlight can overheat your spider and kill it.</li>
      </ul>

    </Container>

    <Container>
      <h2>Deli Cups</h2>
      <em>A simple budget option</em>
      <p>A deli cup is a perfect option for a cheap no-frills spider home. Turn upside down so it opens on the bottom. Use a tack to make breathing holes on the sides and top. You can decorate with tape (spiders will not stick to the tape and actually seem to enjoy building on it) and paper.</p>


      <CardDeck>
        <Card>
           <Img className="card-img-top"  sizes={data.delismall.childImageSharp.sizes}  style={{ width: "100%" }} />
          <CardBody>
            <CardTitle>Small</CardTitle>
            <CardSubtitle>For spiderlings</CardSubtitle>
            <CardText></CardText>
            <ButtonGroup>
              <Button>How to use (coming soon)</Button>
              <Button color="primary" href="http://amzn.to/2o2Ejnb" target="__blank">
                
                  Purchase
               
              </Button>

            </ButtonGroup>

          </CardBody>
        </Card>
        <Card>
          <Img className="card-img-top" sizes={data.delilarge.childImageSharp.sizes}  style={{ width: "100%" }} />
          <CardBody>
            <CardTitle>Large</CardTitle>
            <CardSubtitle>For adult spiders or raising spiderlings</CardSubtitle>
            <CardText>The placon lid ones have ventilation holes in the lid, but you can add your own ventilation holes to the sides and top to a regular one</CardText>
            <ButtonGroup>
              <Button>How to use (coming soon)</Button>
              <Button color="primary" href="http://amzn.to/2DmbaXU" target="__blank">
                
                  Purchase  
              </Button>
            </ButtonGroup>


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
          <Img className="card-img-top" sizes={data.displayCase.childImageSharp.sizes}  style={{ width: "100%" }} />
          <CardBody>
            <CardTitle>Basic</CardTitle>
            <CardSubtitle>A very cheap option but you'll need to drill the holes yourself</CardSubtitle>
            <CardText>Use an acrylic bit to drill holes for ventilation</CardText>
            <ButtonGroup>
              <Button>How to use (coming soon)</Button>
              <Button color="primary" href="http://amzn.to/2E08G2B" target="__blank">
                  Purchase  
              </Button>
            </ButtonGroup>

          </CardBody>
        </Card>
        <Card>
          <Img className="card-img-top"  sizes={data.displayCaseMod.childImageSharp.sizes}  style={{ width: "100%" }} />
          <CardBody>
            <CardTitle>Modified Display Cases</CardTitle>
            <CardSubtitle>Originally created for juvenile tarantulas, they come with vents already added</CardSubtitle>
            <CardText>Comes with decorations and substrate too!</CardText>
           
            <Button color="primary" href="https://jamiestarantulas.com/arboreal-spiderling-enclosure-kit/" target="__blank">Purchase</Button>
          </CardBody>
        </Card>
      </CardDeck>

    <Media>
      <Media left href="#">
      <Media object src={data.keeper.childImageSharp.sizes.src}  alt="Generic placeholder image" />
      </Media>
      <Media body>
        <Media heading>
          Why not Kritter Keepers?
        </Media>
        These are popular for keeping other bugs, but since they are not vertical and open at the top, they do not make ideal enclosures for jumping spiders.
      </Media>
    </Media>
    </Container>



    <Container>
      <h2>Terrariums</h2>
      <p>If you want to create a beautiful living environment for your spiders, a terrarium is a great option. You can use live or fake plants.</p>


      <CardDeck>
        <Card>
          <Img className="card-img-top"  sizes={data.exoterra.childImageSharp.sizes}  style={{ width: "100%" }} />
          <CardBody>
            <CardTitle>Exo Terra Nano Tall</CardTitle>
            <CardSubtitle>A great option for a large adult spider and live or fake plants</CardSubtitle>
            <CardText>Most pet jumping spider species are arboreal so prefer tall enclosures</CardText>
            
              <Button>How to set up (coming soon)</Button>
              <Button color="primary" href="http://amzn.to/2DsMZXU" target="__blank">
                  Purchase  
              </Button>
          </CardBody>
        </Card>
        <Card>
          <Img className="card-img-top"  sizes={data.soil.childImageSharp.sizes}  style={{ width: "100%" }} />
          <CardBody>
            <CardTitle>Substrate</CardTitle>
            <CardSubtitle>Exo Terra plantation soil makes an excellent substrate and can be used for live plants</CardSubtitle>
            <CardText>Layer some volcanic rock and charcoal on the bottom for ideal drainage</CardText>
            <Button color="primary" href="http://amzn.to/2Dstej4" target="__blank">
                  Purchase  
              </Button>
          </CardBody>
        </Card>

        <Card>
          <Img className="card-img-top"  sizes={data.plants.childImageSharp.sizes}  style={{ width: "100%" }} />
          <CardBody>
            <CardTitle>Plants</CardTitle>
            <CardSubtitle>Live or pet-safe fake plants make great decorations and spiders love to climb on them</CardSubtitle>
              <Button>Live plants (coming soon)</Button>
              <Button color="primary" href="http://amzn.to/2DsTZE1" target="__blank">
                  Purchase fake plants
              </Button>
          </CardBody>
        </Card>


      </CardDeck>


      <h3>Heating/Lighting Terrariums</h3>
      <p>There are some situations where you may want to add heat and light to terrariums:

      </p>

      <ul>
        <li>You are keeping a species from a warm climate (like the regal/regius jumping spider) and your home is drafty or cool (under 60F) </li>
        <li>You are keeping tropical plants</li>
      </ul>

        <Alert color="warning"> Do not place heating pads on plastic enclosures, they may melt or release toxic gases.
      </Alert>
      <CardDeck>
      
        <Card>
          <Img className="card-img-top"  sizes={data.canopy.childImageSharp.sizes}  style={{ width: "100%" }} />
          <CardBody>
            <CardTitle>Light</CardTitle>
            <CardSubtitle>Exo terra makes canopies and light bulbs that are perfect of your plants and animals</CardSubtitle>
    
              <Button color="primary" href="http://amzn.to/2zIFkST" target="__blank">
                  Nano Canopy
              </Button>

              <Button color="primary" href="http://amzn.to/2DsPv0i" target="__blank">
                  Repti-Glo 2.0 Bulb
              </Button>
          </CardBody>
        </Card>

        <Card>
          <Img className="card-img-top"  sizes={data.heat.childImageSharp.sizes}  style={{ width: "100%" }} />
          <CardBody>
            <CardTitle>Heat</CardTitle>
            <CardSubtitle>Heating pads are the safest option for heating your terrarium</CardSubtitle>
            <CardText>Place them underneath for best results. If you need additional heat, place another on the side.</CardText>
             <Button color="primary" href="http://amzn.to/2C4W2lv" target="__blank">
                  Zilla Heat Mat Small
              </Button>
          </CardBody>
        </Card>

        <Card>
          <Img className="card-img-top"  sizes={data.thermpro.childImageSharp.sizes}  style={{ width: "100%" }} />
          <CardBody>
            <CardTitle>Humidity/Temperature control</CardTitle>
            <CardSubtitle>A Hygrometer/Themometer with min/max is ideal for monitoring</CardSubtitle>
            <CardText>Regius do best above 50% humidity. The max allows you to make sure the terrarium isn't getting too hot.</CardText>
            <Button color="primary" href="http://amzn.to/2zIGkq7" target="__blank">
                  ThermoPro TP50
              </Button>
          </CardBody>
        </Card>

        <Card>
          <Img className="card-img-top"  sizes={data.timer.childImageSharp.sizes}  style={{ width: "100%" }} />
          <CardBody>
            <CardTitle>Timer</CardTitle>
            <CardSubtitle>A great way to manage lights</CardSubtitle>
            <CardText>Plug your canopy into this and it will turn off your lights at night.</CardText>
            <Button color="primary" href="http://amzn.to/2CiBRjC" target="__blank">
                  Zoo Med Aquarium Timer

              </Button>
          </CardBody>
        </Card>
      </CardDeck>

    </Container>



  </div>
}

export const query = graphql`
  query enclosureQuery {
    delismall:file(relativePath: { eq: "images/deli4.jpg" }) {
      childImageSharp {

        sizes(maxWidth: 400) {
          ...GatsbyImageSharpSizes
        }
      }
    }

    delilarge:file(relativePath: { eq: "images/deli-large.jpg" }) {
      childImageSharp {

        sizes(maxWidth: 400) {
          ...GatsbyImageSharpSizes
        }
      }
    }

    displayCase:file(relativePath: { eq: "images/display-case.jpg" }) {
      childImageSharp {

        sizes(maxWidth: 400) {
          ...GatsbyImageSharpSizes
        }
      }
    }

    displayCaseMod:file(relativePath: { eq: "images/display-modified.jpg" }) {
      childImageSharp {

        sizes(maxWidth: 400) {
          ...GatsbyImageSharpSizes
        }
      }
    }

    exoterra:file(relativePath: { eq: "images/exoterra.jpg" }) {
      childImageSharp {

        sizes(maxWidth: 400) {
          ...GatsbyImageSharpSizes
        }
      }
    }

    soil:file(relativePath: { eq: "images/soil.jpg" }) {
      childImageSharp {

        sizes(maxWidth: 400) {
          ...GatsbyImageSharpSizes
        }
      }
    }

    plants:file(relativePath: { eq: "images/fakeplants.jpg" }) {
      childImageSharp {

        sizes(maxWidth: 400) {
          ...GatsbyImageSharpSizes
        }
      }
    }

   canopy:file(relativePath: { eq: "images/canopy.jpg" }) {
      childImageSharp {

        sizes(maxWidth: 400) {
          ...GatsbyImageSharpSizes
        }
      }
    }

    heat:file(relativePath: { eq: "images/heat.jpg" }) {
      childImageSharp {

        sizes(maxWidth: 400) {
          ...GatsbyImageSharpSizes
        }
      }
    }

    thermpro:file(relativePath: { eq: "images/thermpro.jpg" }) {
      childImageSharp {

        sizes(maxWidth: 400) {
          ...GatsbyImageSharpSizes
        }
      }
    }

    timer:file(relativePath: { eq: "images/timer.jpg" }) {
      childImageSharp {

        sizes(maxWidth: 400) {
          ...GatsbyImageSharpSizes
        }
      }
    }

    keeper:file(relativePath: { eq: "images/keeper.jpg" }) {
      childImageSharp {

        sizes(maxWidth: 150) {
          src
        }
      }
    }
  }
`;

export default Enclosure
