import '../styles/globals.scss';
import Footer from "../components/Footer";
import {Analytics} from "@vercel/analytics/react";
import type {AppProps} from 'next/app';
import Head from "next/head";
import Script from 'next/script';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const route = router.asPath;
  const nameToString = {
    "/": "Accueil",
    "/projects": "Projets",
    "/contact": "Contact",
  }[route];

  return (
    <>
      <Head>
        <title>ValDesign - {nameToString}</title>
        <meta name="description" content="Portfolio de ValDesign, développeur web, proposition de services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet={"utf-8"} />

        <meta property="og:title" content="ValDesign" />
        <meta property="og:description" content="Portfolio de ValDesign, développeur web, proposition de services" />
        <meta property="og:image" content="/android-chrome-512x512.png" />
        <meta property="og:url" content="https://valdesign.me" />
        <meta property="og:type" content="website" />

        <link rel="icon" href="/favicon.ico" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

        <link rel="manifest" href="/site.webmanifest" />
        <meta name="robots" content="index, follow" />

        <meta name="google-site-verification" content={process.env.GOOGLE_SITE_VERIFICATION} />
      </Head>
      {/* Google tag (gtag.js) */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-2VT1NMKWG7" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-2VT1NMKWG7');
        `}
      </Script>
      <Component {...pageProps} />
      <Footer />
      <Analytics
        mode={'production'}
        beforeSend={event => {
          if (event.url.includes('/api')) return null;
          return event;
        }}
      />
    </>
  )
}
