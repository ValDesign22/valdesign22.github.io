import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Footer from "../components/Footer";
import {Analytics} from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
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
