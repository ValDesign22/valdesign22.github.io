import NavBar from "../components/NavBar";

export default function Contact() {
  return (
    <>
      <main>
        <NavBar />
        <section className="contact">
          <h1>Contact</h1>

          <p>
            Vous pouvez me contacter par mail à l&apos;adresse suivante :
            <a href="mailto:valdesign.dev@gmail.com" target="_blank" rel="noreferrer">
              valdesign.dev@gmail.com
            </a>
          </p>
        </section>
      </main>
    </>
  )
}
