import Head from 'next/head';
import NavBar from "../components/NavBar";
import ImageStyled from "../components/ImageStyled";

export default function Projects() {
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
                    <h1>Projects</h1>
                    <div className="project">
                        <h2>ValDesign</h2>
                        <p>This website is made with Next.js and SCSS.</p>
                        <p>It&apos;s hosted on Vercel.</p>
                    </div>
                    <div className="project">
                        <ImageStyled src={"/images/yopbotlist.png"} alt={"YopBotList"} id={"yopbotlist"} />
                        <h2>YopBotList</h2>
                        <p>YopBotList is a discord bot list made with Next.js and SCSS.</p>
                        <p>It&apos;s hosted on Netlify.</p>
                    </div>
                    <div className="project">
                        <h2>WardenCraft</h2>
                        <p>WardenCraft is a minecraft mod made with Forge for Minecraft 1.19.2.</p>
                        <p>It&apos;s hosted on CurseForge.</p>
                    </div>
                </section>
            </main>
        </>
    )
}
