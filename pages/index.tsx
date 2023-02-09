import Link from "next/link";
import NavBar from "../components/NavBar";

// The text: 
/*
Bienvenue sur mon site Web

Je vous propose mes compétences de webdesigner afin de réaliser vos sites internet sur-mesure en accord avec vos objectifs et les tendances du webdesign.
Les projets que je réalise sont consultables sur les différents périphériques ciblés ordinateurs, mobiles et tablettes (également appelés sites RESPONSIVE)

Qui suis-je :
je m'appelle Valentin, j'ai 16 ans et je suis passionné de nouvelles technologies et particulièrement de codage (NodeJS, C+, JAVA ...)  depuis mon plus jeune âge.
Ma particularité est d'être atteint d'un Trouble du Spectre Autistique, ce qui me m'impose d'être extrêmement exigeant avec des détails qui pourraient paraître insignifiant pour la plupart des personnes et ainsi de toujours cherche la "perfection" qui, on le sait tous, n'est pourtant pas de ce monde !
vous trouverez dans l'onglet "RÉFÉRENCES" mes réalisations de sites, programmes ou logos pour des personnes m'ayant donné la chance de prouver mes talents

Comment je travaille ?
- mes parents m'accompagnent dans les démarches commerciales et m'aide à centrer mes priorités sur mes études afin de pouvoir plus tard vivre de ma passion
- suite à un premier contact et à la définition de vos besoins, je vous propose un devis de réalisation allant jusqu'à la mise en ligne

n'hésitez pas à me contacter et me faire part de vos demandes, auxquelles je répondrai avec plaisir, sur l'onglet "CONTACT"
*/

export default function Home() {
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
          <p>Je m&apos;appelle Valentin, j&apos;ai 16 ans et je suis passionné de nouvelles technologies et particulièrement de programmations (NodeJS, C#, Java...) depuis mon plus jeune âge.</p>

          <p>Vous trouverez dans la page <Link href="/projects">projets</Link> mes réalisations de sites ou logos pour des personnes m&apos;ayant donné la chance de prouver mes talents</p>
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
