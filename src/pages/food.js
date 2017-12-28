import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import { Jumbotron, Button, Container, Row, Col, Media, ListGroup, ListGroupItem,  Card, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody, Table, Alert } from 'reactstrap';


const Food = ({data}) => (
  <div>
    <Jumbotron fluid>


      <Container>

        <h1 className="display-3">Jumping Spider Food</h1>
        <p className="lead">There is no getting around the fact that jumping spiders need to eat real live bugs. Here's how to chose the best food for you.</p>


      </Container>
    </Jumbotron>


    <Container>
    <p>Jumping spiders eat a large variety of prey in the wild and are also known to consume nectar and other plant fluids occasionally. Spider keepers typically feed their spiders with sources of prey that are easy to source and keep at home. What you feed your spider will depend on your spider's size, prey preferences and age.</p>

   <p>Spiders can be a bit mystifying to feed at times, varying their needs between the seasons and stages of their lives. Generally spiderlings should be fed with fruit flies every 1-3 days. See the raising spiderlings section (when it's written) for more info. </p>

    <p>As spiders get to be adults try feeding them every three days and then calibrate based on how often they accept prey. If they refuse, go up to four days, then five, and so on. Refusal can take the form of running away from prey or just ignoring it. If they suddenly become especially eager for the food or more active, feed them more often.</p>
    <p>Female spiders generally eat more than males. Most phids also slow down their eating habits in the winter.</p>
    <p>Older spiders after their final molt may eat rarely, as little as once a month. Younger spiders that refuse food may be getting ready to molt, before, during, and after a molt they generally don't eat, and this period may be up to a month long. Also most female spiders usually don't eat when guarding eggs or young.</p>

    <h2>Types of Food</h2>

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
            <td>Can keep for a long time in fridge, most species prefer them, some species like otiosus will only eat flies</td>
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
            <td>May burrow into substrate, where your spider can't find them</td>
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
        Never feed your spider ants, beetles, other spiders, fireflies, or any other invertebrate unless you are in the unlikely situation of owning a spider that specializes in these prey.The invertebrate world is full of creatures that are poisonous and aggressive. Even tiny ants are capable of biting or spraying acid on spiders. They may not bother you, but they are capable of harming a spider.+


      </Alert>

    <Media>
      <Media left href="#">
      <Media object src={data.keeper.childImageSharp.sizes.src}  alt="Generic placeholder image" />
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

    <h3>Flies</h3>

    <p>Flies are an ideal source of food for phids because they are relatively easy to keep and all phids seem to prefer them. Unlike crickets or mealworms they cannot harm sick or molting spiders.</p>

    <p>Any adult spider can eat green and bluebottle flies. Unfortunately it is not easy to raise them at home, but there are many online sources to order from like Mantisplace. You can start feeding spiderlings these when they are about the size of the fly themselves, as flies cannot fight back.</p>

    <p>You can order flies in the form of spikes or pupae. Pupae are a great starter food, just simply hatch in a critter keeper, they'll hatch in a few days. Once they've hatched stick them in the fridge for a few hours. Then take out and put some food in. For food an easy and nutritious solution is some warm water mixed with sugar or molasses in a small deli cup with a paper towel placed in there so they don't drown. Let them feed for a few hours and then place back in the fridge for storage. They'll keep in the fridge, alive, for a few weeks.</p>

    <p>If they are dying too soon your fridge may be too cold. Place in a warmer part of the fridge (towards the front) or adjust your fridge temperature. </p>

    <p>They are easy to handle when taken out of the fridge because they will be in a state of torpor, but they will regain the ability to fly in ten minutes or so. You can easily handle these flies with your hands, picking them up by their wings or legs, if you are squeamish you can use a tong, but often that is even more unpleasant since they are fragile and will squish easily.</p>

    <p>Another choice rather than ordering pupae are spikes, which are little maggots that can be fed to spiders directly or within a week or so they will turn into pupae and hatch into flies. The major advantage of these over just ordering pupae is that they can be stored in the fridge for a few weeks and still remain viable.</p>

    <p>Once use of spikes is if you are going away on vacation, place a mixture of pupae and spikes in the spider's enclosure + some fly food and they will turn into flies at different times, creating a timer feeder.</p>

    <h3>Crickets</h3>
    <p>Crickets are a common choice because they are so easily found in pet stores, as they are common food for tarantulas, lizards, and other exotic pets. Unfortunately they can be aggressive towards your spiders and are capable of harming and even killing them if your spiders are weak or molting. If you chose to feed crickets, place the cricket in the enclosure in the morning and remove at night if uneaten. Adult crickets should only be fed to large adult spiders.</p>
    <p>Pinhead crickets, tiny newly hatched crickets, are safer to feed. Also some spiders will accept freshly killed crickets, which make good food for older or small spiders.</p>
    <p>Some phid species like Phidippus otiosus that are primarily arboreal may refuse to eat crickets.</p>

    <h3>Mealworms</h3>
    <p>Mealworms are another popular exotic pet food. Healthy adult spiders can enjoy these easily, though they can be dangerous towards older, weaker, or smaller spiders. Also make sure to remove any uneaten mealworms because they grow up into beetles who can be aggressive towards spiders.</p>

    <h3>Roaches</h3>
    <p>Roaches are common as tarantula food and can also be fed to jumping spiders. The main disadvantage of them is many species burrow and once they've burrowed they'll be impossible for your spider to catch.</p>





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
