import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Nav from '../components/nav'
import ReactGA from 'react-ga'
import { withPrefix } from 'gatsby-link'


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
    ReactGA.initialize('UA-110983103-1', {
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
            { name: 'description', content: 'A hair care chatbot!' },
            { name: 'keywords', content: 'chatbots, curly girl' },
            {
              property: 'og:image',
              content: 'http://www.curlsbot.com/img/icon.png',
            }
          ]}
        >
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous" />
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


