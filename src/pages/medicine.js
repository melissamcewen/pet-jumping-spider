import React from 'react'
import Link from 'gatsby-link'

import { Jumbotron, Button, Container, Row, Col, Media, ListGroup, ListGroupItem,  Card, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';


const Medicine = () => (
  <div>
    <Jumbotron fluid>


      <Container>

        <h1 className="display-3">Medicine</h1>
        <p className="lead">Known illnesses, disorders, and treatments</p>


      </Container>
    </Jumbotron>

    <Container>
    <h2>Conditions</h2>
    <h3>Heatstroke</h3>
    <p>Spiders can suffer from this if placed in direct sunlight in an enclosed container. If your spider is suffering from this type of heatstroke, provide ample humidity and keep their enclosure reasonably warm but not hot. They may recover. Unfortunately in my experience assisting people with this, most spiders do not survive.</p>

    <h3>Egg Binding</h3>
    <p>Egg binding is when an egg-laying animal is unable to lay an egg or eggs that have formed inside of them. It is described well in reptiles and birds, but very little information is available for spiders. There have been many documented cases in the Facebook group of female spiders dying while attempting to lay, or about to lay. Often this is accompanied by discharge indicating an infection. Unfortunately by the time this is noticed, it is too late for the spider and there is also no known treatment.</p>

    <h3>Mismolt</h3>
    <p>Mismolting is when they fail to shed their exoskeleton correctly while molting. Unfortunately there is little you can do if this occurs – remember that their new exoskeleton is extremely soft when they first shed their old one and any attempt to "help" them will likely damage it, resulting in their death. Some keepers have tried providing extra humidity if they see a spider struggling with a molt, and this may help. Sometimes mismolts do not result in deaths but in loss of limbs. In this case the spider may be fine (jumping spiders have been found doing fine in the wild with as little as three legs!) and may even regrow their limbs on the next molt.</p>

    <h3>Failure To Thrive</h3>
    <p>Failure to thrive is when jumping spiderlings fail to eat and grow, and ultimately an entire brood may perish from the disorder. The cause is unknown but it has been particularly documented in regal jumping spiders (regius). Different keepers are currently experimenting with formulas which may allow these spiderlings that do not eat properly to survive (described under Treatment)</p>

    <h3>Drowning</h3>
    <p>There is little you can do to help a spider that has fallen into water or become entrapped in a droplet besides carefully placing on a paper towel and hoping it absorbs enough of the water and their lungs haven't been saturated. This is unfortunately common with spiderlings, which is why you may want to provide water from soaked paper towels or other similar material rather than water droplets.</p>

    <h3>Passive Recessive Disorder</h3>
    <p>This is a disorder described by numerous keepers of regal jumping spiders (regius). Its causes are unknown but it is thought to be a genetic disorder. Spiders with the disorder grow into a beautiful white color and may have characteristics of both sexes. Unfortunately they exhibit unusual behavior and may need to be hand fed. If they survive, they die during or shortly after their final molt.</p>

    <h3>DKS (Dyskinetic Syndrome)</h3>
    <p>This proposed disease was first described by amateur tarantula keepers and unfortunately there is no scientific literature on it so it may be more of a cluster of symptoms than a real disease. The symptoms are jerky motions, poor coordination, and loss of appetite. Some people describe the motions as "seizure like." No cause is known, but theories include pesticides (which may come from the environment such as flea treatment for dogs and cats that live in the home or from feeding them wild insects), essential oil diffusers, and infections. There is no known treatment and most spiders with these symptoms die within a few days, though you can try the treatment described in this chapter with raw honey in the small chance it may help or at least make the spider comfortable.</p>


    <h2>Treatment</h2>
    <p>Any treatment of a jumping spider illness is a long shot, as there is so little science on the matter. My own treatment of spiders that seem to have the aforementioned conditions is ample fluids. What type of fluid is hotly debated. But people have successfully used sugar water, honey water (this may have antibacterial properties as well, particularly if it's raw, but again a long shot), Boost (a nutritional drink for humans), and orange juice. The best way to administer it is using the fluid to moisten a qtip - surprisingly many spiders will grab and drink from this. Otherwise fine droplets may be provided. Unfortunately a very sick spider may ignore this. Emergency Care of Invertebrates says "Extremely weak arachnids can be encouraged to drink by placing their mouths in a shallow dish of water, using care not to submerge the book lungs" but this may be extremely difficult unless the spider is large. </p>

    <h2>Euthanasia</h2>
    <p>If a spider is suffering and there is no hope for recovery, this may be the most humane option. Unfortunately it is hotly debated and there are no easy answers here. If you do not have a laboratory setup (where gas anesthetics are an option) frankly the best option seems to be "blunt trauma" which in plain English means smashing the spider. If that is too gruesome, many people recommend 15 minutes in the fridge to dull the senses and then putting them in the freezer.</p>


    </Container>



  </div>
)

export default Medicine
