import projects from "../public/projects.json";
import ImageStyled from "./ImageStyled";

import {useState} from "react";
import {RxCaretLeft, RxDotFilled, RxDot, RxCaretRight} from "react-icons/rx";

export default function Carousel(props: { projectIndex: number; }) {
  const [currentImage, setCurrentImage] = useState(0);

  const project = projects[props.projectIndex];

  const nextImage = () => setCurrentImage((currentImage + 1) % project.carouselImages!.length);
  const prevImage = () => setCurrentImage(currentImage === 0 ? project.carouselImages!.length - 1 : currentImage - 1);
  const toImage = (index: number) => setCurrentImage(index);

  return (
    <>
      {project.carouselImages && <div className="carousel">
        <div className="images">
          {project.carouselImages.length > 1 ? (
            <>
              {
                project.carouselImages.map((image, index) => (
                  <>
                    <ImageStyled
                      src={image.src}
                      alt={image.alt}
                      id={project.name}
                      key={index}
                      className={index === currentImage ?
                        `active`
                        : `inactive ${index > currentImage ? "next" : "prev"}`
                      }
                    />
                    {index === currentImage && <span>{image.alt}</span>}
                  </>
                ))
              }
              <div className="svgs">
                <RxCaretLeft onClick={() => prevImage()} className="left"/>
                <div className="dots">
                  {project.carouselImages.map((image, index) => (
                    index === currentImage ?
                      <RxDotFilled key={index} onClick={() => toImage(index)} className={"dot"}/> :
                      <RxDot key={index} onClick={() => toImage(index)} className={"dot"}/>
                  ))}
                </div>
                <RxCaretRight onClick={() => nextImage()} className="right"/>
              </div>
            </>
            ) : <>
              <ImageStyled
                src={project.image}
                alt={project.name}
                id={project.name}
                key={0}
                style={{
                  display: "block",
                }}
              />
              <span>{project.name}</span>
            </>
          }
        </div>
      </div>}
    </>
  );
}