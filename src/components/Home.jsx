import Header from "./Header";
import FirstHome from "./home-components/FirstHome";
import InfoHome from "./home-components/InfoHome";
import '../styles/Home.css';
import SecondHome from "./home-components/SecondHome";

export default function Home() {
    return(
        <div className="home-wrapper">
            <Header />
            <FirstHome />
            <InfoHome />
            <SecondHome />
        </div>
    )
}