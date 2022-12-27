import Head from 'next/head';
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>ValDesign</title>
        <meta name="description" content="This is my portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar />
        <section className="me">
          <h1>Hey, my name is Valentin.</h1>
          <h2>I&apos;m a 15 year old french web developer.</h2>

          <p>
            I&apos;m currently working on a lot of projects, like this website, a minecraft mod, and more.
          </p>

          <div className="skills-list">
            <h3>Skills</h3>
            <div>
              <div className="skills">
                <p>I know a lot of languages, like:</p>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>PHP</li>
                  <li>SQL</li>
                </ul>
              </div>

              <div className="skills">
                <p>I also know a lot of frameworks, like:</p>
                <ul>
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Laravel</li>
                </ul>
              </div>

              <div className="skills">
                <p>I also know a lot of tools, like:</p>
                <ul>
                  <li>Git</li>
                  <li>GitHub</li>
                  <li>VSCode</li>
                  <li>IntelliJ</li>
                  <li>Figma</li>
                  <li>Adobe Photoshop</li>
                  <li>Adobe Illustrator</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
