import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <>
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
