import "./Footer.scss"
import { Link } from "react-router-dom"
import { BsFacebook,BsInstagram,BsGeoAlt} from "react-icons/bs";

const Footer = () => {
    return (
        <div className=" footer">
            <Link to="/"><img src='assets/logohome.png' alt="Logo" className="logoFot"></img></Link>
            <div className="divIcon">
                <a href="https://www.facebook.com" target="blank"><BsFacebook className="iconFooter"/></a>
                <a href="https://www.instagram.com/" target="blank"><BsInstagram className="iconFooter"/></a>
                <a href="https://www.google.com.ar/maps/place/FC+hogar+%26+deco+-+Dot+Baires+Shopping/@-34.5386818,-58.502883,14.54z/data=!4m8!1m2!2m1!1sdeco+design+home!3m4!1s0x95bcb727a340d9a9:0x1cf907d07d2adf48!8m2!3d-34.54606!4d-58.4890561" target="blank"><BsGeoAlt className="iconFooter"/></a>
            </div>
        </div>
        
    )
}

export default Footer

