import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Nav from '../components/nav'
import ReactGA from 'react-ga'
import { withPrefix } from 'gatsby-link'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';


const Header = () => (
  <div
    style={{
      background: '#7DCE82',
    }}
  >
    <div

    >

      <Nav/>
    </div>
  </div>
)


const logPageView = (ReactGA) => {
  console.log("Logged view on: ", window.location.pathname)
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}


export default class TemplateWrapper extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  };

  componentDidMount() {
   ReactGA.initialize('UA-111691753-1', {
  // debug: true,

});
    logPageView(ReactGA)
  }

  componentWillReceiveProps() {
    logPageView(ReactGA);
  }

  render() {
    return (
      <div>
        <Helmet
          title="My Pet Jumping Spider"
          meta={[
            { name: 'description', content: 'How to keep your own jumping spider' },
            { name: 'keywords', content: 'jumping spiders, pets, spiders, Salticidae' },
            {
              property: 'og:image',
              content: 'http://www.mypetjumpingspider.com/img/spider.jpg',
            }
          ]}
        >
 
      </Helmet>
        <Header />
        <div

        >

          {this.props.children()}
        </div>
      </div>
    );
  }
}


