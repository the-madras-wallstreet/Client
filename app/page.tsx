import React from 'react'
import {Head,Slick,Tail,Float} from './components'
import Settings from './stores/settings.json'

export default function Home() {

  const {brand,links} = Settings
  
  return (
    <React.Fragment>
          <Head logoPath={brand.logoPath} ></Head>
          <Float serveLinks={links.serveLinks}></Float>
          <Slick logoPath={''}></Slick>
          <Tail logoPath={''}></Tail>
    </React.Fragment>
     )
}
