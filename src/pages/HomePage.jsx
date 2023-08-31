import { Fragment } from "react"
import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import About from "../components/about/about";
import Services from "../components/service/service";


const HomePage = () => {
    return (
        <Fragment>
            <Header />
            <Hero />
            <About />
            <Services />
        </Fragment>
    )
}

export default HomePage;