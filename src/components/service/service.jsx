import styles from './service.module.css'
import serviceImg1 from '../../assests/service__img1.png';
import serviceImg2 from '../../assests/service__img2.png';
import serviceImg3 from '../../assests/service__img3.png';

function Services() {
    return (
        <section className={styles['service']}>
            <div className={styles["container"]}>
                <div className={styles["service__wrapper"]}>
                    <div className={styles["service__wrapper-header"]}>
                        <h2 className={styles['wrapper__header-h2']}>Our Services</h2>
                        <button className={styles['wrapper__header-btn']}>Explore services</button>
                    </div>
                    <div className={styles["service__wrapper-cards"]}>
                        <div className={styles["service__cards-item"]}>
                            <img className={styles['service__item-img']} src={serviceImg1} alt="service_img" />
                            <h4 className={styles['service__item-h4']}>House cleaning</h4>
                            <p className={styles['service__item-title']}>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
                        </div>
                        <div className={styles["service__cards-item"]}>
                            <img className={styles['service__item-img']} src={serviceImg2} alt="service_img" />
                            <h4 className={styles['service__item-h4']}>Office cleaning</h4>
                            <p className={styles['service__item-title']}>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
                        </div>
                        <div className={styles["service__cards-item"]}>
                            <img className={styles['service__item-img']} src={serviceImg3} alt="service_img" />
                            <h4 className={styles['service__item-h4']}>Industrial cleaning</h4>
                            <p className={styles['service__item-title']}>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services