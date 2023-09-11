import NavBar from "../components/NavBar";
import projects from "../public/projects.json";
import Image from "next/image";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import { IoLogoSass, IoLogoPython, IoLogoVue } from "react-icons/io5";
import { SiReact, SiTypescript, SiNodedotjs, SiExpress, SiPrisma, SiMariadb, SiNextdotjs } from "react-icons/si";

export default function Projects() {
  return (
    <>
      <main>
        <NavBar />
        <section className="projects">
          <h1>Mes réalisations</h1>

          <div className="list">
            {projects.map((project, index) => (
              <div className="project" key={index}>
                {project.image &&
                  <Image
                    src={project.image}
                    alt={project.name} 
                    width={500}
                    height={500}
                  />
                }

                <div className="textarea">
                  <h2>{project.name}</h2>

                  <p>{project.description.split("\n").map((item, key) => <span key={key}>{item}<br /></span>)}</p>
                </div>

                <div className="links">
                  <h3>Liens</h3>

                  <div className="inner">
                    {project.repo &&
                      <a href={project.repo} target="_blank" rel="noopener noreferrer" key={"repolink"}>
                        <AiFillGithub />
                      </a>
                    }
                    {project.url &&
                      <a href={project.url} target="_blank" rel="noopener noreferrer" key={"urllink"}>
                        <AiOutlineLink />
                      </a>
                    }
                  </div>
                </div>

                <div className="tech">
                  <h3>Technologies utilisées</h3>

                  <div className="list">
                    {project.tech.map((tech, index) => (
                      (index <= 3) && (
                        <>
                          {tech === "Next.js" &&
                            <a key={index} href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                              <SiNextdotjs />
                            </a>
                          }
                          {tech === "SCSS" &&
                            <a key={index} href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">
                              <IoLogoSass />
                            </a>
                          }
                          {tech === "React" &&
                            <a key={index} href="https://fr.reactjs.org/" target="_blank" rel="noopener noreferrer">
                              <SiReact />
                            </a>
                          }
                          {tech === "TypeScript" &&
                            <a key={index} href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
                              <SiTypescript />
                            </a>
                          }
                          {tech === "Python" &&
                            <a key={index} href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
                              <IoLogoPython />
                            </a>
                          }
                          {tech === "Vue.js" &&
                            <a key={index} href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">
                              <IoLogoVue />
                            </a>
                          }
                          {tech === "Node.js" &&
                            <a key={index} href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
                              <SiNodedotjs />
                            </a>
                          }
                          {tech === "Express.js" &&
                            <a key={index} href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
                              <SiExpress />
                            </a>
                          }
                          {tech === "Prisma" &&
                            <a key={index} href="https://www.prisma.io/" target="_blank" rel="noopener noreferrer">
                              <SiPrisma />
                            </a>
                          }
                          {tech === "MariaDB" &&
                            <a key={index} href="https://mariadb.org/" target="_blank" rel="noopener noreferrer">
                              <SiMariadb />
                            </a>
                          }
                        </>
                      )
                    ))}
                    {project.tech.length > 4 &&
                      <span className="more">
                        +{project.tech.length - 4}
                        <p className="tooltip">
                          {project.tech.slice(4).map((tech, index) => (
                            <span key={index}>{tech}<br /></span>
                          ))}
                        </p>
                      </span>
                    }
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
