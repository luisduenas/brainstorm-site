import React from 'react'
import Header from '../components/header'
import SEO from '../components/seo'
import Helmet from 'react-helmet'
import hero from '../images/hero.png'
import html5 from '../images/html5.png'
import mobileImage from '../images/cross-platform.png'
import desktop from '../images/desktop.png'

function Index({ data }) {
  console.log(data)
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
                  fontSize: '3rem',
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
