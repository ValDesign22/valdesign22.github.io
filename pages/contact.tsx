import NavBar from "../components/NavBar";

export default function Contact() {
  const handleContact = (e: any) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.phone;
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        subject: subject,
        message: message
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === "Email sent successfully") {
          alert("Message envoyé avec succès!");
          e.target.reset();
        }
        else alert("Erreur lors de l'envoi du message");
      });
  }

  return (
    <>
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