import React from 'react'
import Link from 'gatsby-link'

import { Jumbotron, Button, Container, Row, Col, Media, ListGroup, ListGroupItem } from 'reactstrap';


const gettingStarted = () => (
  <div>
    <Jumbotron fluid>


      <Container>

        <h1 className="display-3">Is a pet jumping spider for you?</h1>
        <p className="lead">Before you get a pet jumping spider you should decide whether or not they are the right pet for you. You should also have supplies and an enclosure ready.</p>


      </Container>
    </Jumbotron>

    <Container>
      <h2>Pros</h2>
      <p>The most popular pet spiders are tarantulas, which are roughly 10x the size of most jumping spiders. But while jumping spiders are small, they are far more <a href="http://jeb.biologists.org/content/212/14/2129.short">intelligent</a>: </p>
      <blockquote className="blockquote"><p>Weasels may be cunning, we might admire the intelligence of dogs and cats, but we can be forgiven for expecting the jumping spider, a diminutive predator with a brain not much bigger than a poppy seed, to be one of Descartes' automatons. Yet, jumping spiders, also known as salticids, alternate between entertaining and alarming us by planning prey-capture tactics ahead of time, adjusting their hunting behaviour in accordance with how the prey responds and giving us other examples of un-spider-like acumen</p></blockquote>

      <p>They are able to <a href="http://www.sciencedirect.com/science/article/pii/S0376635713002623" rel="nofollow">quickly form and reverse associations</a>, <a href="http://www.sciencedirect.com/science/article/pii/S0003347215002353" rel="nofollow">navigate in virtual reality</a>, <a href="http://www.tandfonline.com/doi/abs/10.1080/03014223.2002.9518294" rel="nofollow">learn by trial and error</a> and <a href="http://digitalcommons.unl.edu/cgi/viewcontent.cgi?article=1078&amp;context=bioscidiss" rel="nofollow">learn from observing conspecifics</a>. This means they are an intelligent and interactive pet that some people even claim to be able to train.</p>

      <p>Even if you can't train them, they are fun to watch and photograph. Each has a unique personality and habits. I've loved sharing my life with these adorable and quirky creatures.</p>
    </Container>

    <Container>
      <h2>Cons</h2>
      <p>If you're looking for a cuddly pet, look elsewhere. While they are non-aggressive and bites are rare, they are not easy to handle. They are likely to be lost or harmed if handled. </p>
      <p>They also require live prey as food: roaches, crickets, mealworms, or flies. You'll also need to raise and care for these in order to keep a pet jumping spider.</p>
      <p>Sadly they also don't live very long, with the oldest recorded pet jumping spider living to about 3 years and most living to a year at most.</p>
    </Container>

    <Container>
      <h2>Ok I still want one!</h2>
      <p>Awesome! I hope this site provides a valuable resource. I also encourage you to join our Facebook group, which gives you access to our active community of knowledgable spider keepers</p>
      <p>You'll also need the following: </p>
      <ListGroup>
        <ListGroupItem><Link to="/enclosures" >An enclosure</Link></ListGroupItem>
        <ListGroupItem>Food</ListGroupItem>
        <ListGroupItem>A spider (duh)</ListGroupItem>

      </ListGroup>
    </Container>


  </div>
)

export default gettingStarted
