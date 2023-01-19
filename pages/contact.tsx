import NavBar from "../components/NavBar";
import Head from "next/head";

export default function Contact() {
  const handleContact = (e: any) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.phone;
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    return alert(`Name: ${name} Email: ${email} Phone: ${phone} Subject: ${subject} Message: ${message}`);

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        phone,
        subject,
        message
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });
  }

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
          <p>Ou par le formulaire de contact ci-dessous:</p>

          <div className="form">
            <h2>Formulaire de contact</h2>

            <form onSubmit={handleContact}>
              <div className="up-part">
                <div className="input">
                  <label htmlFor="name">Nom<span className="required">*</span></label>
                  <input type="text" name="name" id="name" pattern="^[A-Za-z- ]+ [A-Za-z- ]+$" title="Veuillez entrer votre nom et prénom valides" required />
                </div>
                <div className="input">
                  <label htmlFor="email">Email<span className="required">*</span></label>
                  <input type="email" name="email" id="email" required />
                </div>
                <div className="input">
                  <label htmlFor="phone">Téléphone</label>
                  <input type="tel" name="phone" id="phone" />
                </div>
              </div>
              <div className="middle-part">
                <div className="input">
                  <label htmlFor="subject">Sujet<span className="required">*</span></label>
                  <input type="text" name="subject" id="subject" minLength={5} required />
                </div>
              </div>
              <div className="down-part">
                <div className="input">
                  <label htmlFor="message">Message<span className="required">*</span></label>
                  <textarea name="message" id="message" cols={30} rows={5} minLength={10} required></textarea>

                </div>
              </div>
              <div className="submit">
                <button type="submit">Envoyer</button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}