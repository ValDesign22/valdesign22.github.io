import Link from "next/link";
import NavBar from "../components/NavBar";

export default function Home() {
  const age = () => {
    const birthDate = new Date(2007, 1, 27);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
    return age;
  }
  return (
    <>
      <main>
        <NavBar />
        <section className="me">
          <h1>Bienvenue sur mon site web</h1>
          
          <p>Je vous propose mes compétences de webdesigner afin de réaliser vos sites internet sur-mesure en accord avec vos objectifs et les tendances du webdesign.</p>
          <p>Les projets que je réalise sont consultables sur les différents périphériques ciblés ordinateurs, mobiles et tablettes (également appelés sites RESPONSIVE).</p>
        </section>
        <section className="whoami">
          <h2>Qui suis-je ?</h2>
          <p>Je m&apos;appelle Valentin, j&apos;ai {age()} ans et je suis passionné de nouvelles technologies et particulièrement de programmations (NodeJS, C#, Java...) depuis mon plus jeune âge.</p>

          <p>Vous trouverez dans la page <Link href="/projects">projets</Link> mes réalisations des sites ou logos pour des personnes m&apos;ayant donné la chance de prouver mes talents</p>
        </section>
        <section className="how">
          <h2>Comment je travaille ?</h2>

          <ul>
            <li>Mes parents m&apos;accompagnent dans les démarches commerciales et m&apos;aident à centrer mes priorités sur mes études afin de pouvoir plus tard vivre de ma passion.</li>
            <li>Suite à un premier contact et à la définition de vos besoins, je vous propose un devis de réalisation allant jusqu&apos;à la mise en ligne.</li>
          </ul>
        </section>
        <section className="contact-cta">
          <p>N&apos;hésitez pas à me contacter et me faire part de vos demandes, auxquelles je répondrai avec plaisir, sur la page <Link href="/contact">contact</Link>.</p>
        </section>
      </main>
    </>
  )
}
