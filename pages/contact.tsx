import NavBar from "../components/NavBar";

export default function Contact() {
  const createToast = (props: { type: string; }) => {
    const toast = document.createElement("div");
    toast.classList.add("toast");
    toast.id = `toast-${Date.now()}`;
  
    let hovering = false;
    let currentTimeout = 5500;
    let remainingTimeout = currentTimeout;
    let interval = 100;
  
    const p = document.createElement("p");
    p.textContent = props.type === "success" ? "Message envoyé avec succès!" : "Erreur lors de l'envoi du message";
    toast.appendChild(p);
  
    const button = document.createElement("button");
    button.classList.add("close-toast");
    button.textContent = "X";
  
    button.addEventListener("click", () => toast.remove());
  
    toast.appendChild(button);
  
    const toastBar = document.createElement("span");
    toastBar.classList.add("toast-bar");
    toast.appendChild(toastBar);
  
    toast.addEventListener("mouseenter", () => hovering = true);
  
    toast.addEventListener("mouseleave", () => hovering = false);
  
    let toastBarWidth = 100;
    const countdownInterval = setInterval(() => {
      if (hovering) currentTimeout = remainingTimeout;
      else {
        toastBarWidth -= 2;
        toastBar.style.width = `${toastBarWidth}%`;
        remainingTimeout -= interval;

        if (remainingTimeout <= 0) {
          clearInterval(countdownInterval);    
          toast.remove();
        }
      }
    }, interval);
  
    return toast;
  };

  const handleContact = (e: any) => {
    e.preventDefault();

    const target = e.target;
    const toastsDiv = document.querySelector(".toasts") as HTMLDivElement;

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: target.name.value,
        email: target.email.value,
        phone: target.phone.phone,
        subject: target.subject.value,
        message: target.message.value
      })
    })
      .then(res => res.json())
      .then(data => {
        target.reset();
        toastsDiv.appendChild(createToast({ type: data.message === "Email sent successfully" ? "success" : "error" }));
      });
  }

  return (
    <>
      <main>
        <NavBar />
        <section className="contact">
          <div className="toasts"></div>
          <h1>Contact</h1>

          <p>Vous pouvez me contacter par mail à l&apos;adresse suivante: <a href="mailto:valdesign.dev@gmail.com" target="_blank" rel="noreferrer">valdesign.dev@gmail.com</a></p>
          <p>Ou par le formulaire de contact ci-dessous:</p>

          <div className="form">
            <h2>Formulaire de contact</h2>

            <form onSubmit={handleContact} netlify>
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
