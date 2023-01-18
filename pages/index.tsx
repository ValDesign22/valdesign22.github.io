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
          <h1>Salut, moi c&apos;est Valentin</h1>
          <h2>Je suis un développeur web</h2>

          <p>Je suis actuellement en train de travailler sur beaucoup de projets, comme ce site web, un mod minecraft, et plus encore.</p>
        </section>
      </main>
    </>
  )
}
