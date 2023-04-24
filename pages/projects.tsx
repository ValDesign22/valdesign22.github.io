import Carousel from "../components/Carousel";
import NavBar from "../components/NavBar";
import ImageStyled from "../components/ImageStyled";
import projects from "../public/projects.json";

import {useState} from "react";
import {AiFillGithub, AiOutlineLink} from "react-icons/ai";
import {IoLogoSass, IoLogoPython} from "react-icons/io";
import {RxCaretLeft, RxDotFilled, RxDot, RxCaretRight} from "react-icons/rx";
import {SiTypescript, SiReact} from "react-icons/si";
import {TbBrandNextjs} from "react-icons/tb";

export default function Projects() {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentProject, setCurrentProject] = useState(0);

  const nextImage = (project: { name: string; carouselImages: { src: string; alt: string; }[]; }) => {
    setCurrentProject(projects.findIndex((p) => p.name === project.name));
    setCurrentImage((currentImage + 1) % project.carouselImages.length);
  };
  const prevImage = (project: { name: string; carouselImages: { src: string; alt: string; }[]; }) => {
    setCurrentProject(projects.findIndex((p) => p.name === project.name));
    setCurrentImage(
      currentImage === 0 ? project.carouselImages.length - 1 : currentImage - 1
    );
  };
  const toImage = (project: { name: string; }, index: number) => {
    setCurrentProject(projects.findIndex((p) => p.name === project.name));
    setCurrentImage(index);
  }

  return (
    <>
      <main>
        <NavBar />
        <section className="projects">
          <h1>Mes réalisations</h1>

          <div className="list">
            {projects.map((project, index) => (
              <div className="project" key={index}>
                <Carousel projectIndex={index} key={index} />
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
                          <SiReact />
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
