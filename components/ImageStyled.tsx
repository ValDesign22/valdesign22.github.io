import Image from "next/image";
import {useEffect, useState} from "react";

export default function ImageStyled(props: { src: string, alt: string, className?: string, id?: string }) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const image = document.getElementById(props.id as string) as HTMLImageElement;
        if (image) {
            image.addEventListener("load", () => {
                setLoaded(true);
            });
        }
    }, [props.id]);

    return <Image src={props.src} alt={props.alt} className={`image ${props.className || ""} ${loaded ? "" : "skeleton"}`} id={props.id} draggable={false} width={1000} height={1000} />
}