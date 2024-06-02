'use client'

import Image from "next/image"
import { URL } from "url"

import styles from '../styles/head.module.css'

interface HeadProps {
    logoPath : URL["href"]
    links? : []
    menuHandler? : any
}

const Head: React.FC<HeadProps> = (props) => {

    const {logoPath,menuHandler} = props

 

    const callHandler = () => {
         window.location.href = "tel:+91 8122801215"
        
    }

    return(
        <div className={styles.head}>
             <Image onClick={menuHandler} src={'/icons/hamburger/white.svg'} alt="alt" width={24} height={24} />           
            <Image src={logoPath} alt="alt" width={142} height={46} />
            <Image onClick={callHandler} src={'/icons/call.svg'} alt="alt" width={36} height={36} />
        </div>
    )
}

export default Head