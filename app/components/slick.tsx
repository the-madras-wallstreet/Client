import Image from "next/image"
import { URL } from "url"

interface SlickProps {
    logoPath : URL["href"]
    links? : []
}

const Slick: React.FC<SlickProps> = (props) => {

    const {logoPath} = props

    return(
        <div>
            <Image src={logoPath} alt="alt" width={120} height={240} />
        </div>
    )
}

export default Slick