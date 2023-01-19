import Head from 'next/head';
import NavBar from "../components/NavBar";
import ImageStyled from "../components/ImageStyled";
import {AiFillGithub, AiOutlineLink} from "react-icons/ai";

export default function Projects() {
  const projects = [
    {
      name: "ValDesign",
      image: "/images/valdesign-portfolio.png",
      repo: "https://github.com/ValDesign22/valdesign22.github.io",
      url: "https://valdesign.me",
      description: "Ceci est mon site web personnel. J'ai créé ce site web pour présenter mes projets et mes compétences.",
    },
    {
      name: "YopBotList",
      image: "/images/yopbotlist.png",
      repo: "https://github.com/Yop-BotList/YopBotList",
      url: "https://yopbotlist.me",
      description: "YopBotList est une liste de bots discord. J'ai créé ce site web afin de faire découvrir des bots discord.",
    },
    {
      name: "Esprit de Meute",
      image: "/images/espritdemeute.png",
      url: "https://espritdemeute.fr",
      description: "Esprit de Meute est un site web que j'ai créé pour une association d'éducation canine. J'ai créé ce site web afin de présenter l'association et ses activités. C'est aussi le premier site web que j'ai créé.",
    }
  ]

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
        <section className="projects">
          <h1>Projets</h1>

          <div className="list">
            {projects.map((project, index) => (
              <div className="project" key={index}>
                {project.image && <ImageStyled src={project.image} alt={project.name} id={project.name} />}
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <div className="links">
                  {project.repo && <a href={project.repo} target="_blank" rel="noopener noreferrer">
                    <AiFillGithub />
                    <span className="tooltip">Voir le code source</span>
                  </a>}
                  {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <AiOutlineLink />
                    <span className="tooltip">Voir le site web</span>
                  </a>}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
