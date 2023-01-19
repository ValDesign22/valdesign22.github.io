import Head from 'next/head';
import NavBar from "../components/NavBar";
import ImageStyled from "../components/ImageStyled";
import {
  SiTypescript,
  IoLogoReact,
  IoLogoSass,
  AiFillGithub,
  AiOutlineLink,
  TbBrandNextjs,
  IoLogoPython
} from "react-icons/all";

export default function Projects() {
  const projects = [
    {
      name: "ValDesign",
      image: "/images/valdesign-portfolio.png",
      repo: "https://github.com/ValDesign22/valdesign22.github.io",
      url: "https://valdesign.me",
      description: "Ceci est mon site web personnel.\nJ'ai créé ce site web pour présenter mes projets et mes compétences.",
      tech: ["Next.js", "SCSS", "React", "TypeScript"]
    },
    {
      name: "YopBotList",
      image: "/images/yopbotlist.png",
      repo: "https://github.com/Yop-BotList/YopBotList",
      url: "https://yopbotlist.me",
      description: "YopBotList est une liste de bots discord.\nJ'ai créé ce site web afin de faire découvrir des bots discord.",
      tech: ["Next.js", "SCSS", "React", "TypeScript"]
    },
    {
      name: "Esprit de Meute",
      image: "/images/espritdemeute.png",
      url: "https://espritdemeute.fr",
      description: "Esprit de Meute est un site web que j'ai créé pour une association d'éducation canine.\nJ'ai créé ce site web afin de présenter l'association et ses activités.\nC'est aussi le premier site web que j'ai créé.",
      tech: ["SCSS", "React", "TypeScript"]
    },
    {
      name: "Rubik's Cube Solver",
      repo: "https://github.com/ValDesign22/Rubik-s-Solver",
      description: "Rubik's Cube Solver est un programme qui permet de résoudre un Rubik's Cube.\nJ'ai créé ce programme afin de résoudre un Rubik's Cube en utilisant les Lego Mindstorms.",
      tech: ["Python"]
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
                <p>{project.description.split("\n").map((item, key) => <span key={key}>{item}<br /></span>)}</p>
                <div className="links">
                  <h3>Liens</h3>
                  <div className="list">
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
                <div className="tech">
                  <h3>Technologies utilisées</h3>
                  <div className="list">
                    {project.tech.map((tech, index) => (
                      <>
                        {tech === "Next.js" && <span key={index}>
                          <TbBrandNextjs />
                          <span className="tooltip">Next.js</span>
                      </span>}
                        {tech === "SCSS" && <span key={index}>
                          <IoLogoSass />
                          <span className="tooltip">SCSS</span>
                      </span>}
                        {tech === "React" && <span key={index}>
                          <IoLogoReact />
                          <span className="tooltip">React</span>
                      </span>}
                        {tech === "TypeScript" && <span key={index}>
                          <SiTypescript />
                          <span className="tooltip">TypeScript</span>
                      </span>}
                        {tech === "Python" && <span key={index}>
                          <IoLogoPython />
                          <span className="tooltip">Python</span>
                      </span>}
                      </>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
