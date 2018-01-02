import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import feeding from '../images/handfeeding.mp4'

import { Jumbotron, Button, Container, Row, Col, Media, ListGroup, ListGroupItem,  Card, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody, Table, Alert } from 'reactstrap';


const Food = ({data}) => (
  <div>

    <Jumbotron fluid>


      <Container>

        <h1 className="display-3">Jumping Spider Food (and Water!)</h1>
        <p className="lead">There is no getting around the fact that jumping spiders need to eat real live bugs. Here's how to chose the best food for your pet spider.</p>


      </Container>
    </Jumbotron>


    <Container>
    <p>Keeping feeder bugs is an essential part of keeping a pet jumping spider. There are a variety of options that jumping spiders enjoy and are easy to keep. </p>

   <p>Offer your spider food every 3 days. But don't expect them to eat every time. How often they eat depends on age, species, and sex. Young spiders eat more than older spiders. And female spiders usually eat more than males. Some older adults go as long as a month without eating. Spiders sitting on eggs or molting may also go weeks without eating.</p>

    <Alert color="primary">
        <h3>Help my spider won't eat!</h3>
        <p>Don't worry unless it has been over 3 weeks. If it has been over 3 weeks, try offering a different type of prey.</p>
      </Alert>

    <p>The best time to feed is morning. If they don't eat it, remove it at night. Most jumping spiders are diurnal (active during the day). Uneaten prey may disturb or harm them at night.</p>

    <h2>Water</h2>
    <p>Offer your spider droplets of water to drink and also keep their enclosure humid. This can be done at the same time as offering food. Many keepers use a spray bottle and just spray on the sides of the enclosure (not ON the spider). </p>
    <p>Do you need special water? That's a tough question. Most keepers use tap water without issues, but if you suspect your tap water isn't the highest quality, you can buy distilled water.</p>

    <Alert color="warning">
      Open containers of water and large droplets may drown spiderlings and very small adults.
    </Alert>
    <p></p>

    <h2>Types of Food</h2>
    <p>Here are some food options that are popular in the hobby:</p>

     <Table responsive>
        <thead>
          <tr>
            <th>Species</th>
            <th>Ideal for</th>
            <th>Pros</th>
            <th>Cons</th>
            <th>Where to purchase</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Flies (green and bluebottle) </th>
            <td>Adult spiders</td>
            <td>Can keep for a long time in fridge, most species prefer them, some species like otiosus strongly prefer flies (and may refuse non-flying prey)</td>
            <td>Having flies in your fridge (eeew)</td>
            <td><a href="https://www.mantisplace.com/">Mantisplace</a></td>
          </tr>
          <tr>
            <th scope="row">Crickets</th>
            <td>Adult spiders</td>
            <td>Easy to purchase at the local pet store</td>
            <td>Can be dangerous to molting, resting, or sick spiders. Watch carefully and remove if uneaten.</td>
            <td>Your local pet store</td>

          </tr>
          <tr>
            <th scope="row">Fruit flies</th>
            <td>Spiderlings or very small adults </td>
            <td>Simple to raise yourself</td>
            <td>Not enough food for most adult spiders</td>
            <td>Petco or <a href="http://amzn.to/2BRTTWs">Josh's Frogs</a></td>
          </tr>

          <tr>
            <th scope="row">Roaches</th>
            <td>Adult spiders</td>
            <td>Easy to purchase at pet stores and to raise</td>
            <td>May burrow into substrate, where your spider can't find them. Adults may be too large for some spiders.</td>
            <td>Your local pet store</td>

          </tr>

          <tr>
            <th scope="row">Mealworms</th>
            <td>Adult spiders</td>
            <td>Easy to raise</td>
            <td>Too big for many spiders, may burrow and turn into beetles which are dangerous to your spider</td>
            <td>Your local pet store</td>

          </tr>
        </tbody>
      </Table>
      <Alert color="danger">
        Never use ants, beetles, other spiders, fireflies, or any other unknown spiders as spider food. These can be poisonous and aggressive. Even tiny ants are capable of biting or spraying acid on spiders. They may not bother you, but they are capable of harming a spider.


      </Alert>

    <Media>
      <Media left href="#">
      <Media object src={data.keeper.childImageSharp.sizes.src}  alt="a Kritter Keeper" />
      </Media>
      <Media body>
        <Media heading>
          Enclosures for feeder insects
        </Media>
        You can use anything to keep your spider food, but I like Kritter Keepers, which are designed for keeping feeder insects.
        <Button color="primary" href="http://amzn.to/2DtDxUh" target="__blank">
                
                  Purchase  
              </Button>
      </Media>
    </Media>

    <Alert color="success">
        Make sure your feeder insects are well fed for maximum nutrition. Special nutritional supplements for feeders (like calcium) are not neccessary but also not known to be harmful.
      </Alert>

    <h3>Flies</h3>

    <p>Flies (blue and green bottle) are one of the most popular food options for pet jumping spiders. They are easy to keep and all popular pet species will eat them. Unlike crickets or mealworms they cannot harm sick or molting spiders .</p>

    <p>The major disadvantage is they are difficult to raise at home. Most people buy them online. But a single order can last a month or more with proper care.</p>

    <p>You can order flies in the form of spikes or pupae. Pupae are a great starter food: stick in a critter keeper, they'll hatch in a few days. Once they've hatched stick them in the fridge for a few hours so they won't fly out when you open the enclosure. Then take out and feed.</p>

    <p>Fly food is easy to make. You can use sugar or anything sweet mixed with warm water. Place it in a small cup (like a deli cup) and put a paper towel in the solution to soak it up so the flies don't drown. Let the flies feed for a few hours and then place back in the fridge for storage. They'll keep in the fridge, alive, for a few weeks.</p>

    <p>If they are dying too soon your fridge may be too cold. Place in a warmer part of the fridge (towards the front) or adjust your fridge temperature. </p>

    <p>Flies in the fridge will be in a state of torpor. This makes them easy to handle because they won't fly away. You can pick them up with your hands or <a href="http://amzn.to/2lxxYMZ">feeding tweezers</a> and put them in your spider's enclosure. </p>

    <p>Another choice rather than ordering pupae are spikes, which are little maggots that can be fed to spiders directly or within a week or so they will turn into pupae and hatch into flies. The major advantage of these over just ordering pupae is that they can be stored in the fridge for a few weeks and still remain viable.</p>

    <p>Spikes are the maggot stage of fly development. Some spiders will eat them directly. They will turn into pupae and then hatch into flies within a week or so. The advantage of spikes is they keep in the fridge in that stage for 1-3 weeks.</p>

    <h3>Crickets</h3>
    <p>Crickets are a popular feeder source because they are easily found in almost any pet store. The disadvantage is they can harm your spider or even kill it. Spiders are most vulnerable if molting or older, and the biggest danger is at night. Remove from the enclosure before night if they aren't eaten..</p>
    <p>Pinhead crickets, tiny newly hatched crickets, are safer to feed. Some spiders will accept freshly killed crickets, which makes them a possible option for sick or young spiders.</p>
    <p>Some species like the canopy jumper (Phidippus otiosus) may refuse to eat crickets.</p>

    <h3>Mealworms</h3>
    <p>Mealworms are another popular food you can buy at a pet store.  Make sure to remove any uneaten mealworms because they grow up into beetles. The beetles can be aggressive and dangerous towards spiders.</p>

    <h3>Roaches</h3>
    <p>Some pet stores also sell dubia roaches, which many jumping spiders will accept. They are also easy to raise. A disadvantage is they can burrow and hide from spiders.</p>


    <h2>Hand Feeding and other tips</h2>


      <CardDeck>
      
        <Card>
            <video preload="true" playsInline autoPlay loop muted className="card-img-top" style={{ width: "100%" }}>
              <source src={feeding} type="video/mp4" />
          </video>
          <CardBody>
            <CardTitle>This is Peanut, a female bold jumping spider</CardTitle>
            <CardSubtitle>I "trained" her to take flies from my hand</CardSubtitle>
             <CardText>The "wiggling" pedipalps often indicates interest in food.</CardText>
          </CardBody>
        </Card>

      <Card body>
        <CardTitle>Hand feeding tips:</CardTitle>
        <CardText>
          <ul>
            <li>Offer food slowly and patiently</li>
            <li>Stop if they run away or seem agitated</li>
          </ul>
        </CardText>
      </Card>

      </CardDeck>


    </Container>




  </div>
)


export const query = graphql`
  query foodQuery {
    keeper:file(relativePath: { eq: "images/keeper.jpg" }) {
      childImageSharp {

        sizes(maxWidth: 150) {
          src
        }
      }
    }

  }
`;


export default Food
