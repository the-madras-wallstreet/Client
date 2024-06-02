'use client'
import Image from "next/image"
import Link from "next/link"

import { URL } from "url"
import styles from '../styles/slick.module.css'

import { useContext, useState } from "react"

interface SlickProps {
    logoPath : URL["href"],
    ctrlLinks? : {
        label: string,
        url: string,
        icon: string
    }[],
    menuHandler : any
}

const Slick: React.FC<SlickProps> = (props) => {

    const {logoPath, ctrlLinks, menuHandler} = props


    const [isSlickOn, setIsSlickOn] = useState(true)


        const active_status = 'inactive'




     const renderLinks = ctrlLinks?.map((link:any,i:any)=>{
        return (
        <div className={styles.control} key={i}>
              <Image src={`/icons/${active_status}/${link.icon}.svg`} alt="alt" width={24} height={24} />
        <Link onClick={menuHandler} style={{
                    color: 'var(--inactive)', fontSize: '14px',
                    listStyle: 'none', textDecoration: 'none'
                }} href={link.url}  >
            {link.label}
        </Link>
        </div>
                      
        )
    })

    const renderSlick = <div className={styles.slick}>
            <div className={styles.title}>
                <Image src={logoPath} alt="alt" width={150} height={100} /> 
                <div onClick={menuHandler} className={styles.closer}>
                                    <Image src={'/icons/close.svg'} alt="alt" width={24} height={24} /> 
                <p style={{color:'white', fontSize: '12px', margin: '0px'}} >Close</p>
                </div>
            </div>
        {renderLinks}
        <button className={styles.launch}>Launch Client Portal</button>
        </div>


    return(
        isSlickOn && renderSlick
    )
}

export default Slick