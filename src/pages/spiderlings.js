import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'


import { Jumbotron, Button, ButtonGroup, Container, Row, Col, Media, ListGroup, ListGroupItem,  Card, CardImg, CardTitle, CardText, CardColumns, CardSubtitle, CardBody } from 'reactstrap';


const Spiderlings = ({data}) => (
  <div>
      <Helmet
          title="My Pet Jumping Spider: raising spiderlings"
          meta={[
            { name: 'description', content: 'How to raise jumping spiders from eggs' },
            { name: 'keywords', content: 'jumping spiders, pets, spiders, Salticidae, spiderlings, sling' },

          ]}
    />
 
    <Jumbotron fluid>

      <Container>

        <h1 className="display-3">Raising spiderlings</h1>
        <p className="lead">Juvenile jumping spiders are often called spiderlings or slings, I'll refer to them as spiderlings here. This is a draft, look for more info and videos in the coming months.</p>


      </Container>
    </Jumbotron>

     <Container>
     <p>Raising spiderlings is a huge challenge, but with this guide and help from our community, you should be able to succeed.</p>

     <h2>Egg laying</h2>

     <p>Gravid (fertilized) female spiders usually lay eggs 1 day to 2 weeks after mating, though they are able to store fertilization for as long as a year. Eggs are laid in a thick fluffy sac, usually on the top of their enclosure. </p>
     <p>If you know or suspect your spider has mated, remember spiderlings are tiny and when they disperse they may escape if the enclosure is not secure. If it has holes or gaps large than half a grain of rice it is not secure. Move the mother to a secure enclosure if her enclosure is not already secure. If she already laid the sac in a non-secure enclosure, you can place the enclosure itself in a <a href="http://amzn.to/2CBnXGV">butterfly net.</a> </p>
     <p>The option that many keepers use is a deli cup. To prepare it, make a small hole in the side, then cover with duct tape. </p>
  
     <p>After she lays the eggs, the mother will guard them at least until they hatch and sometimes longer. During this time she often will cease eating and drinking. You may offer some food or water occasionally and carefully (by hand) but don't be alarmed if she doesn't take it.</p>

     <h2>What should I do to be prepared for spiderlings?</h2>

     <p>During this time you should prepare by purchasing a fruit fly culture. <a href="http://amzn.to/2BRTTWs" target="_blank">Josh's Frogs</a> is an online option and many pet stores sell them as well. Once you have a fruit fly culture, it is easy to <a href="https://joshsfrogs.zendesk.com/hc/en-us/articles/201196897-How-do-I-Make-a-Fruit-Fly-Culture-">use it to create new ones </a> with the right supplies. You should also have a spray bottle capable of producing a VERY fine mist- droplets should be smaller than the spiderlings themselves or they may drown.</p>

     <h2>How do I care for spiderlings?</h2>
     <p>Eggs should hatch within 1-4 weeks. During the first stage of their life, the spiderlings will stay in the sac. Then they will molt and disperse. The mother may stay with the sac for awhile. When you see her leave you may move her to a new enclosure.</p>
     <p>When you see them starting to emerge from the sac it is time to start caring for them. Put in fruit flies and a VERY fine indirect mist of water daily.</p>
     <p>Yes, it is a challenge to get the fruit flies in without the spiderlings escaping. If you are using a deli cup with a hole in it, you can use a funnel to get the fruit flies in</p>

      <h3>How to: Deli cup enclosures for spiderlings</h3>
     <p>Another great tool is the mesh enclosure, you can use it as a workspace for when you need to open up spiderling enclosures.</p>
      <CardColumns>
      
        <Card>
           <Img className="card-img-top"  sizes={data.delismall.childImageSharp.sizes}  style={{ width: "100%" }} />
          <CardBody>
            <CardTitle>1. Get small deli cups</CardTitle>
            <CardText>4 oz. are perfect for spiderlings</CardText>
            <ButtonGroup>
              <Button color="primary" href="http://amzn.to/2o2Ejnb" target="__blank">
                
                  Purchase
               
              </Button>

            </ButtonGroup>

          </CardBody>
        </Card>
        <Card>
           <Img className="card-img-top"  sizes={data.lidhole.childImageSharp.sizes}  style={{ width: "100%" }} />
          <CardBody>
            <CardTitle>2. Cut a small hole in the lid and poke air holes all over the deli cup</CardTitle>

          </CardBody>
        </Card>
        <Card>
          <div className="card-img-top" ><Img  sizes={data.tapehole.childImageSharp.sizes}  style={{ width: "100%" }} /></div>
          <CardBody>
            <CardTitle>3. Use tape to cover the hole</CardTitle>
            <CardSubtitle>Don't worry, they will not stick to the tape</CardSubtitle>
             <CardText>I'm serious! I've raised dozens of spiders and they have never stuck to duct or masking tape.</CardText>

          </CardBody>
        </Card>

          <Card>
          <div className="card-img-top" >
           <Img  sizes={data.delicupsling.childImageSharp.sizes}  style={{ width: "100%" }} /></div>
          <CardBody>
            <CardTitle>4. Turn upside down and use the lid as the bottom</CardTitle>
            <CardSubtitle>Also feel free to decorate with paper, tape, etc. Substrate is NOT recommended</CardSubtitle>
          </CardBody>
        </Card>

        <Card>
          <div className="card-img-top" ><Img  sizes={data.funnel.childImageSharp.sizes}  style={{ width: "100%" }} /></div>
          <CardBody>
            <CardTitle>When you need to feed, unstick the tape, use a funnel and pour the fruit flies in</CardTitle>

          </CardBody>
        </Card>


      </CardColumns>

     <h2>How do I know when to seperate the spiderlings?</h2>
     <p>After 1-2 weeks of caring for the dispersed spiderlings, you may need to seperate them. Spiderlings can be cannibalistic and there is no fast and easy rule to figure out when, except by watching them. You want to be able to raise them together as long as possible because once you seperate them you will have more groups to feed which can be time consuming.</p>
     <p>Once you start to see them becoming aggressive towards each other, seperate them into smaller groups in smaller deli cups. Eventually they will all be in seperate cups. At this stage you can feed/water every 3 days. </p>
     <p>Once they are about the size of half a housefly you can start feeding them flies. With crickets and other larger/more aggressive prey you should wait until they are roughly the size of the prey. At this stage, if you wish to adopt them out, this is the earliest you should do it.  </p>
     <p>Cannibalism and high mortality is normal. Most keepers lose anywhere from 25%-95% of spiderlings depending on conditions and species.</p>


    <h2>Unwanted and infertile eggs</h2>
     <h3>Infertile Eggs</h3>
     <p>If your spider was captive bred and raised and never mated, or captured as a female juvenile, she will still lay eggs but they will be infertile.</p>
     <p>She will sit on the sac for 1-2 weeks without eating before abandoning it. You may offer food and water, but she will probably not take it. Do not remove or disturb the sac or they may become agitated.</p>

     <h3>Unwanted Eggs</h3>
     <p>Unwanted eggs are a huge issue and why I highly recommend not buying or capturing an adult female spider unless you are interested in raising them.</p>
     <p>You have two options</p>
     <ul>
      <li>If the spider is local you can release the spiderlings once they disperse, ideally on a warm cloudy morning in a nice area with lots of plants for them to live on. </li>
      <li>If the spider is exotic you should ideally try to find someone who will take the sac on our Facebook group or as a last resort, destroy the sac.</li>
           </ul>
      <p>I do not recommend destroying the sac as it is a very stressful experience for the spider. Stress is a major killer of older spiders. If you have to, do it at night. Carefully put the mother spider in a seperate container. Take the sac  and remove the eggs from it or place the entire sac (or enclosure WITHOUT the mother spider of course) in the freezer for a few hours. Having the sac still intact will reduce the level of stress for the spider. That said, the spider may refuse to eat or drink for a few weeks and appear agitated.</p>
     </Container>




  </div>
)
export const query = graphql`
  query spiderlingsQuery {
    delismall:file(relativePath: { eq: "images/deli4.jpg" }) {
      childImageSharp {

        sizes(maxWidth: 400) {
          ...GatsbyImageSharpSizes
        }
      }
    }

    lidhole:file(relativePath: { eq: "images/lidhole.jpg" }) {
      childImageSharp {

        sizes(maxWidth: 400) {
          ...GatsbyImageSharpSizes
        }
      }
    }

    tapehole:file(relativePath: { eq: "images/tapehole.jpg" }) {
      childImageSharp {

        sizes(maxWidth: 400) {
          ...GatsbyImageSharpSizes
        }
      }
    }

    funnel:file(relativePath: { eq: "images/funnel.jpg" }) {
      childImageSharp {

        sizes(maxWidth: 400) {
          ...GatsbyImageSharpSizes
        }
      }
    }

    delicupsling:file(relativePath: { eq: "images/delicupsling.jpg" }) {
      childImageSharp {

        sizes(maxWidth: 400) {
          ...GatsbyImageSharpSizes
        }
      }
    }



  }
`;


export default Spiderlings
