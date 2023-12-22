import Header from "./Header"
import FirstHome from "./home-components/FirstHome"

export default function Home() {
    return(
        <div className="home-wrapper">
            <Header />
            <FirstHome />
        </div>
    )
}