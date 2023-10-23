import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { IdProvider } from '@/context/IdContext';
export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <IdProvider>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </IdProvider>
  </>
  )
  
}
