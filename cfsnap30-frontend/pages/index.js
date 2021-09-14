import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>          
        <Head>
            <title>CFSNAP Internet Consulting Services</title>
          </Head>
      <section className="showcase">
          <div className="container grid">
              <div className="showcase-text">
                  <h1>Business Solutions & Internet Development Consulting</h1>
                  <p>Writing code and pushing pixels since '95</p>
              </div>

              <div className="showcase-form card">
                  <div className="middle-text-puzzle card-puzzle">Solutions for your business.</div>
                  <Image src="/images/puzzlePieceAndHole.png" width="350" height="258" />
              </div>
          </div>
      </section>

      <section className="languages" style={{marginTop: "25px"}}>
        <h2 className="md text-center my-2">
            Favored Technologies
        </h2>
        <div className="container flex">
            <div className="card">
                <h4>CSS</h4>
                <Image src="/images/css-logo.png" height="167" width="167" alt="CSS" />
            </div>
            <div className="card">
                <h4>Javascript</h4>
                <Image src="/images/javascript-logo.png" height="167" width="167"  alt="Javascript" />
            </div>
            <div className="card">
                <h4>React</h4>
                <Image src="/images/react-logo.png" height="167" width="167"  alt="React" />
            </div>
            <div className="card">
                <h4>Strapi</h4>
                <Image src="/images/strapi-logo.png" height="164" width="160"  alt="Keystone" />
            </div>
            <div className="card">
                <h4>Graphql</h4>
                <Image src="/images/graphql-logo.png" height="167" width="167"  alt="Graphql" />
            </div>
            <div className="card">
                <h4>NextJS</h4>
                <Image src="/images/nextjs-logo.png" height="167" width="167"  alt="NextJS" />
            </div>
        </div>
    </section>

    </>
  )
}
