import React from 'react'
import Bio from '../components/Bio'
import Header from '../components/header'
import SEO from '../components/seo'
import Helmet from 'react-helmet'
import hero from '../images/hero.png'
import BlockContent from '../components/block-content'

class Index extends React.Component {
  render() {
    console.log(this.props)

    return (
      <>
        <div className="siteContainer">
          <Helmet>
            <title>Home</title>
          </Helmet>
          <div className="siteContent">
            <Header title="Brainstorm solutions" />
            <div className="hero">
              <img
                src={hero}
                alt="Brainstorm logo: A brain with thunders."
                className="hero-image"
              />
              <p className="hero-footer">{`Software for process automation`}</p>
            </div>
            <main
              className="main"
              style={{
                paddingTop: '0px',
              }}
            >
              <SEO
                title="Home"
                keywords={[``, `gatsby`, `javascript`, `react`]}
              />
              <div
                style={{
                  width: '100%',
                  padding: '10%',
                  // backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  backgroundColor: 'rgba(231,122,138,.3)',
                }}
              >
                <h1
                  style={{
                    textAlign: 'center',
                    fontSize: '4rem',
                    color: '#E3D71B',
                    margin: '0 20px 30px',
                  }}
                >
                  Who we are?
                </h1>
                <div
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontSize: '2rem',
                  }}
                >
                  <p>
                    We are a company commited to deliver top quality software
                    solutions, using the right tools for the job.
                  </p>
                </div>
              </div>
              <div
                style={{
                  padding: '10%',
                  width: '100%',
                  backgroundColor: 'rgba(0,0,0,.7)',
                }}
              >
                <h1
                  style={{
                    textAlign: 'center',
                    fontSize: '4rem',
                    color: '#E3D71B',
                    margin: '0 20px 30px',
                  }}
                >
                  Our Services
                </h1>
                <div
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontSize: '2rem',
                  }}
                >
                  <p>
                    Our team is very commited to always be updated with the top
                    hot technologies, but the ecosystem is very big, that's why
                    we have focused on these core areas:
                  </p>
                  <ul>
                    <li>
                      Front-End coding: in case you already have a website and
                      want to make it look beatiful.👊
                    </li>
                    <li>
                      Mobile development: You want a mobile app? no problem! we
                      got you 😎. We can delivery functional cross-platform
                      applications that work both on iOS and Android.
                    </li>
                    <li>
                      Desktop apps: Our mainly expertise is in desktop apps, so
                      you can have the confidence that we are going to make the
                      best work you can get.
                    </li>
                  </ul>
                </div>
              </div>
              <div
                style={{
                  padding: '10%',
                  width: '100%',
                  backgroundColor: 'rgba(231,122,138,.3)',
                }}
              >
                <h1
                  style={{
                    textAlign: 'center',
                    fontSize: '4rem',
                    color: '#E3D71B',
                    margin: '0 20px 30px',
                  }}
                >
                  Our Skills
                </h1>
                <div
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontSize: '2rem',
                  }}
                >
                  <p>
                    We are very experimented on the .NET framework, but whe are
                    not scared of using other top technologies in the javascript
                    ecosystem like ReactJS, MongoDB, GraphQL and so on.
                  </p>
                </div>
              </div>
            </main>
          </div>{' '}
          {/* end of .siteContent */}
          <footer>
            © {new Date().getFullYear()}, Built with 🍺 and
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>💜
          </footer>
        </div>{' '}
        {/* end of .siteContainer */}
      </>
    )
  }
}

export default Index
