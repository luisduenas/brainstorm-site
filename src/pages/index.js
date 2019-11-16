import React from 'react'
import Header from '../components/header'
import SEO from '../components/seo'
import Helmet from 'react-helmet'
import hero from '../images/hero.png'
import html5 from '../images/html5.png'
import mobileImage from '../images/cross-platform.png'
import desktop from '../images/desktop.png'
import netcore from '../images/netcore.png'
import reactjs from '../images/react.png'
import mongodb from '../images/mongodb.png'
import graphqlImage from '../images/graphql.png'
import ParticleComponent from '../components/particle-component'

function Index({ data }) {
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line global-require
    require('smooth-scroll')('a[href*="#"]')
  }
  return (
    <>
      <div
        id="home"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <ParticleComponent />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <Helmet>
            <title>Home</title>
          </Helmet>
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
              marginTop: '0px',
            }}
          >
            <SEO
              title="Home"
              keywords={[``, `gatsby`, `javascript`, `react`]}
            />
            <div
              id="about"
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
                  fontSize: '3rem',
                  color: '#E3D71B',
                  margin: '0 20px 30px',
                }}
              >
                About us
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
                backgroundColor: 'rgba(0,0,0,.3)',
              }}
            >
              <h1
                style={{
                  textAlign: 'center',
                  fontSize: '3rem',
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
                  hot technologies, but the ecosystem is very big, that's why we
                  have focused on these core areas:
                </p>
                <br />
                <br />
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'auto auto auto',
                  }}
                >
                  <div
                    className="menu-item"
                    style={{
                      background: 'rgba(0,0,0,.3)',
                      padding: '1rem',
                      margin: '5px',
                      borderRadius: '10px',
                    }}
                  >
                    <h2
                      style={{
                        fontSize: '1.5rem',
                        color: '#E3D71B',
                      }}
                    >
                      Front-End coding:
                    </h2>
                    <p
                      style={{
                        fontSize: '1rem',
                        textAlign: 'justify',
                        padding: '0 20px',
                      }}
                    >
                      In case you already have a website and want to make it
                      look beatiful.👊
                    </p>
                    <img src={html5} style={{ maxHeight: '150px' }}></img>
                  </div>
                  <div
                    className="menu-item"
                    style={{
                      background: 'rgba(0,0,0,.3)',
                      padding: '1rem',
                      margin: '5px',
                    }}
                  >
                    {' '}
                    <h2 style={{ fontSize: '1.5rem', color: '#E3D71B' }}>
                      Mobile development:
                    </h2>
                    <p
                      style={{
                        fontSize: '1rem',
                        textAlign: 'justify',
                        padding: '0 20px',
                      }}
                    >
                      You want a mobile app? no problem! we got you 😎.
                      <br />
                      <br />
                      We can delivery functional cross-platform applications
                      that work on iOS, Android and Windows 10.
                    </p>
                    <img src={mobileImage} style={{ maxHeight: '150px' }}></img>
                  </div>
                  <div
                    className="menu-item"
                    style={{
                      background: 'rgba(0,0,0,.3)',
                      padding: '1rem',
                      margin: '5px',
                    }}
                  >
                    {' '}
                    <h2 style={{ fontSize: '1.5rem', color: '#E3D71B' }}>
                      Desktop apps:
                    </h2>
                    <p
                      style={{
                        fontSize: '1rem',
                        textAlign: 'justify',
                        padding: '0 20px',
                      }}
                    >
                      {' '}
                      Our mainly expertise is in desktop apps, so you can have
                      the confidence that we are going to make the best work you
                      can get.
                    </p>
                    <img src={desktop} style={{ maxHeight: '150px' }}></img>
                  </div>
                </div>
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
                  fontSize: '3rem',
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
                  ecosystem like ReactJS, GraphQL and so on.
                </p>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'auto auto auto',
                    maxWidth: '60%',
                    alignSelf: 'center',
                    margin: '0 auto',
                  }}
                >
                  <img
                    alt="NetCore logo"
                    src={netcore}
                    style={{ maxHeight: '150px' }}
                  ></img>
                  <img src={reactjs} style={{ maxHeight: '150px' }}></img>
                  <img src={graphqlImage} style={{ maxHeight: '150px' }}></img>
                </div>
              </div>
            </div>
          </main>
          <footer id="contact">
            © {new Date().getFullYear()}, Built with 🍺 and
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>💜
          </footer>
        </div>
      </div>
    </>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
