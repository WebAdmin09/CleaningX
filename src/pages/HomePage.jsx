import { Fragment } from "react"
import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import About from "../components/about/about";
import Services from "../components/service/service";
import Covid from "../components/covid19/covid";


const HomePage = () => {
    return (
        <Fragment>
            <Header />
            <Hero />
            <About />
            <Services />
            <Covid />
        </Fragment>
    )
}

export default HomePage;