import Link from "next/link"
import styles from "../styles/tail.module.css"
import Image from "next/image"

interface TailProps {
    ctrlLinks? : {
        label: string,
        url: string,
        icon: string
    }[]
}

const Tail: React.FC<TailProps> = (props) => {

    const {ctrlLinks} = props

    const active_status = 'inactive'


    const renderLinks = ctrlLinks?.map((link:any,i:any)=>{
        return (
        <div className={styles.control} key={i}>
              <Image src={`/icons/${active_status}/${link.icon}.svg`} alt="alt" width={24} height={24} />
        <Link  style={{
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