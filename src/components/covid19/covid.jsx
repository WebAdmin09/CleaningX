import styles from "./covid.module.css";
import phone__icon from '../../assests/phone__icon.svg'
import covidbackimg from '../../assests/covidback__img.png'


function Covid() {
    return (
        <section className={styles['covid']}>
            <div className={styles['container']}>
                <div className={styles['covid__wrapper']}>
                    <div className={styles['covid__wrapper-img']}>
                        <img className={styles['covid__backimg']} src={covidbackimg} alt="covid__backgroundimg" />
                    </div>
                    <div className={styles['covid__wrapper-text']}>
                        <span className={styles['covid-span']}>Covid-19 sanitization</span>
                        <h1 className={styles['covid-heading']}>
                            We follow guidelines to keep you safe from the COVID-19 virus
                        </h1>
                        <p className={styles['covid-title']}>Lobortis mattis odio leo eget mauris met aliquet semper molestie sollicitudin congue massa mauris lectus.</p>
                        <div className={styles['covid__button']}>
                            <button className={styles['covid__button-btn']}>Get a free quote</button>
                            <div className={styles['phone__div']}>
                                <img className={styles['phone__icon']} src={phone__icon} alt="Phone__icon" />
                                <div className={styles['phone__div-div']}>
                                    <h6>Call us now</h6>
                                    <span>(414) 567 - 2109</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Covid