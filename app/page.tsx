import Image from 'next/image'
import Hero from './(HomeComponents)/Hero'
import AboutUs from './(HomeComponents)/AboutUs'
import Faq from './(HomeComponents)/Faq'
import Features from './(HomeComponents)/Features'
import Services from './(HomeComponents)/Services'
import { renderCloudJourney } from './(components)/utils'

export default function Home() {
  return (
    <main className="">
      <Hero />
      <AboutUs />
      <Services />
      <Features />
      <Faq />
      {renderCloudJourney()}
    </main>
  )
}
