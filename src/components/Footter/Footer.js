import "./Footer.scss"
import { Link } from "react-router-dom"
import { BsFacebook,BsInstagram,BsGeoAlt} from "react-icons/bs";

const Footer = () => {
    return (
        <div className=" footer">
            <Link to="/"><img src='assets/logohome.png' alt="Logo" className="logoFot"></img></Link>
            <div className="divIcon">
                <BsFacebook className="iconFooter"/>
                <BsInstagram className="iconFooter"/>
                <BsGeoAlt className="iconFooter"/>
            </div>
        </div>
        
    )
}

export default Footer

