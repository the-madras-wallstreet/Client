'use client'

import Link from "next/link"
import styles from "../styles/tail.module.css"
import Image from "next/image"
import { useRouter } from "next/navigation"

interface TailProps {
    ctrlLinks? : {
        label: string,
        url: string,
        icon: string
    }[],
    activeIcon? : any
}

const Tail: React.FC<TailProps> = (props,params) => {

        const router = useRouter()


    const {ctrlLinks} = props

    const active_status = 'inactive'


    const shiftHandler = (url:any) => {
        router.push(url)
    }


    const renderLinks = ctrlLinks?.map((link:any,i:any)=>{
        return (
        <div className={styles.control} key={i}>
              <Image src={`/icons/${active_status}/${link.icon}.svg`} alt="alt" width={24} height={24} />
        <Link onClick={()=> shiftHandler(link.url)}  style={{
            color: 'var(--inactive)',fontSize: '10px',
            listStyle:'none', textDecoration: 'none'}}  href={link.url}>
            {link.label}
        </Link>
        </div>
                      
        )
    })

    return(
        <div className={styles.tail}>
            {renderLinks}
        </div>
    )
}

export default Tail