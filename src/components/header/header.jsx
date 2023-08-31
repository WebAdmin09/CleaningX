import styles from "./header.module.css";
import logojon from "../../assests/Project__logojon.svg"
function Header() {
    return (
        <header className={styles['header']}>
            <nav className={styles['navbar']}>
                <div className={styles["container"]}>
                    <div className={styles["navbar__wrapper"]}>
                        <div className={styles['navbar__wrapper-img']}>
                            <a href="#logo"><img src={logojon} alt="projectlogojon" /></a>
                        </div>
                        <div className={styles['navbar__wrapper-text']}>
                            <ul>
                                <li><a className={styles['navbar-link']} href="#Home">Home</a></li>
                                <li><a className={styles['navbar-link']} href="#About">About</a></li>
                                <li><a className={styles['navbar-link']} href="#Services">Services</a></li>
                                <li><a className={styles['navbar-link']} href="#Articles">Articles</a></li>
                                <li><a className={styles['navbar-link']} href="#Contact">Contact</a></li>
                            </ul>
                            <button className={styles['button']}>Get a free quote</button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}


export default Header;
