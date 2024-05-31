import Link from "next/link"
import styles from "../styles/tail.module.css"

interface TailProps {
    ctrlLinks? : {
        label: string,
        url: string
    }[]
}

const Tail: React.FC<TailProps> = (props) => {

    const {ctrlLinks} = props


    const renderLinks = ctrlLinks?.map((link:any,i:any)=>{
        return (<Link  style={{
            color: 'white',
            listStyle:'none', textDecoration: 'none', placeSelf: 'center'}} key={i} href={link.url}>
            {link.label}
        </Link>)
    })

    return(
        <div className={styles.tail}>
            {renderLinks}
        </div>
    )
}

export default Tail