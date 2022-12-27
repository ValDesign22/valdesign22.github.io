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
            I&apos;m currently working on a lot of projects, like this website, a discord bot, a minecraft server, and more.
          </p>
        </section>
      </main>
    </>
  )
}
