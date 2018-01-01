import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'


import { Jumbotron, Button, Container, Row, Col, Media, ListGroup, ListGroupItem,  Card, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';


const Community = () => (
  <div>
    <Helmet
          title="My Pet Jumping Spider: Jumping Spider Food"
          meta={[
            { name: 'description', content: 'How to feed a pet jumping spider' },
            { name: 'keywords', content: 'jumping spiders, pets, spiders, Salticidae' }
          ]}
        />
    <Jumbotron fluid>


      <Container>

        <h1 className="display-3">Our Facebook Group:</h1>
        <p className="lead">Jumping Spider (Salticidae) Keepers/Husbandry is an active community of people who are interested in keeping jumping spiders as pets.</p>


      </Container>
    </Jumbotron>

    <Container>

        <h2 className="display-3">Why to join</h2>
        <ul>
          <li>Connect with jumping spider keepers and experts around the globe</li>
          <li>Many jumping spider breeders post spiderlings for sale on the group</li>
          <li>Get help and advice from experienced keepers</li>
          <li>Resources for jumping spider keeping in other countries (we have many UK members)</li>
        </ul>
        <h2>Rules</h2>
        <li>This group is for discussing pet jumping spiders in captivity– habitats, food, breeding, figuring out your spider's gender and more</li>
        <li>For more For more generalized discussion of jumping spiders and to get a wild species ID check out <a href="https://www.facebook.com/groups/salticidae/ ">the general jumping spider group</a></li>
        <li>Please be aware of the negative ecological impacts that the pet trade can have before purchasing a spider online. Take precautions to make sure exotics don't escape. Capturing a local jumping spider has negligible ecological impact and can be a better choice for beginners.</li>

        <li>For moderation issues,<a href="https://www.facebook.com/pg/My-Pet-Jumping-Spider-300061100514179/">Send a message to our page </a></li>

        <h2>Not Allowed</h2>
        <li>Posts that have nothing to do with the group's topic will be removed. If you have more general posts about jumping spiders, please post them to the <a href="https://www.facebook.com/groups/salticidae/ ">main jumping spiders group</a>.</li> 
        <li>if you post wild spider ID requests/pictures here I will assume you did not read the rules and remove you from the group. You may <a href="https://www.facebook.com/pg/My-Pet-Jumping-Spider-300061100514179/">Send a message to the page </a> to be re-added</li>
        <li>Jumping spiders eat other creatures to survive, but content that involves introducing other potentially dangerous arthropods to jumping spiders for entertainment (I.E. "bug fights") is not acceptable.</li>

        <h2>Join!</h2>
        <p>Click the button below to go to our FB group and join. You'll be presented with a "secret code question." Answer with the secret code word, which is "pet spider".</p>

        <Button color="primary" href="https://www.facebook.com/groups/1620188578256853/" target="__blank">Join
        </Button>




      </Container>





  </div>
)

export default Community
