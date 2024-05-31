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
            <Image src={logoPath} alt="alt" width={142} height={46} />
        </div>
    )
}

export default Head