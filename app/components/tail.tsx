import Image from "next/image"
import { URL } from "url"

interface TailProps {
    logoPath : URL["href"]
    links? : []
}

const Tail: React.FC<TailProps> = (props) => {

    const {logoPath} = props

    return(
        <div>
            <Image src={logoPath} alt="alt" width={120} height={240} />
        </div>
    )
}

export default Tail