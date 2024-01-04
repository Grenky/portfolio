import FirstHome from "./home-components/FirstHome"
import InfoHome from "./home-components/InfoHome"
import SecondHome from "./home-components/SecondHome"
import FooterHome from "./home-components/FooterHome"


export default function FrontPage() {
    return(
        <div className="front-wrapper">
            <FirstHome />
            <InfoHome />
            <SecondHome />
            <FooterHome />            
        </div>
    )
}