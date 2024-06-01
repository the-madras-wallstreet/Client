import Image from "next/image"
import { URL } from "url"

import styles from '../styles/head.module.css'

interface HeadProps {
    logoPath : URL["href"]
    links? : []
}

const Head: React.FC<HeadProps> = (props) => {

    const {logoPath} = props

    return(
        <div className={styles.head}>
             <Image src={'/icons/hamburger/white.svg'} alt="alt" width={24} height={24} />           
            <Image src={logoPath} alt="alt" width={142} height={46} />
                        <Image src={'/icons/call.svg'} alt="alt" width={36} height={36} />

        </div>
    )
}

export default Head