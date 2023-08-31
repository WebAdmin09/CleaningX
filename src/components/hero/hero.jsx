import styles from "./hero.module.css";
import phone__icon from '../../assests/phone__icon.svg'
import hero__backgroundimg from '../../assests/hero__backgroundimg.png'
function Hero() {
    return (
        <section className={styles['hero']}>
            <div className={styles['container']}>
                <div className={styles['hero__wrapper']}>
                    <div className={styles['hero__wrapper-text']}>
                        <h1 className={styles['hero-heading']}>
                            Quality cleaning for your home
                        </h1>
                        <p className={styles['hero-title']}>Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.</p>
                        <div className={styles['hero__button']}>
                            <button className={styles['hero__button-btn']}>Get a free quote</button>
                            <div className={styles['phone__div']}>
                                <img className={styles['phone__icon']} src={phone__icon} alt="Phone__icon" />
                                <div className={styles['phone__div-div']}>
                                    <h6>Call us now</h6>
                                    <span>(414) 567 - 2109</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles['hero__wrapper-img']}>
                        <img className={styles['hero__backimg']} src={hero__backgroundimg} alt="hero__backgroundimg" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero