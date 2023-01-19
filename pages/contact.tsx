import NavBar from "../components/NavBar";
import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>ValDesign - Contact</title>
        <meta name="description" content="This is my portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar />
        <section className="contact">
          <h1>Contact</h1>

          <p>Vous pouvez me contacter par mail à l&apos;adresse suivante: <a href="mailto:valdesign.dev@gmail.com" target="_blank" rel="noreferrer">valdesign.dev@gmail.com</a></p>

          <div className="form">
            <h2>Formulaire de contact</h2>

            <form>
              <div className="up-part">
                <div className="input">
                  <label htmlFor="name">Nom<span className="required">*</span></label>
                  <input type="text" name="name" id="name" required />
                </div>
                <div className="input">
                  <label htmlFor="email">Email<span className="required">*</span></label>
                  <input type="email" name="email" id="email" required />
                </div>
                <div className="input">
                  <label htmlFor="subject">Téléphone</label>
                  <input type="tel" name="tel" id="tel" />
                </div>
              </div>
              <div className="middle-part">
                <div className="input">
                  <label htmlFor="subject">Sujet<span className="required">*</span></label>
                  <input type="text" name="subject" id="subject" required />
                </div>
              </div>
              <div className="down-part">
                <div className="input">
                  <label htmlFor="message">Message<span className="required">*</span></label>
                  <textarea name="message" id="message" cols={30} rows={5} required />

                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}