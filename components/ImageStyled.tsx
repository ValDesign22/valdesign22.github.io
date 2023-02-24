import {useEffect, useState} from "react";

export default function ImageStyled(props: { src: string, alt: string, className?: string, id?: string, style?: any }) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const image = document.getElementById(props.id as string) as HTMLImageElement;
        if (image) {
            image.addEventListener("load", () => {
                setLoaded(true);
            });
        }
    }, [props.id]);

    // eslint-disable-next-line @next/next/no-img-element
    return <img src={props.src} alt={props.alt} className={`image ${props.className || ""} ${loaded ? "" : "skeleton"}`} id={props.id} draggable={false} style={props.style} />
}