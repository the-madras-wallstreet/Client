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

 

    return(
        <div className={styles.head}>
             <Image onClick={menuHandler} src={'/icons/hamburger/white.svg'} alt="alt" width={24} height={24} />           
            <Image src={logoPath} alt="alt" width={142} height={46} />
            <Image src={'/icons/call.svg'} alt="alt" width={36} height={36} />
        </div>
    )
}

export default Head