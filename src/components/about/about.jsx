import styles from './about.module.css';
import aboutImg1 from '../../assests/about__img1.png'
import aboutImg2 from '../../assests/about__img2.png'
import aboutImg3 from '../../assests/about__img3.png'


function About() {
    return (
        <section className={styles['about']}>
            <div className={styles["container"]}>
                <div className={styles["about__wrapper"]}>
                    <div className={styles["about__wrapper-header"]}>
                        <h2 className={styles['about__wrapper-h2']}>About Us</h2>
                        <p className={styles["about__wrapper-title"]}>Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque nisi felis non ultrices massa id egestas quam velit pretium nu.</p>
                    </div>
                    <div className={styles["about__wrapper-cards"]}>
                        <div className={styles["wrapper__cards-item"]}>
                            <img className={styles['card__item-img']} src={aboutImg1} alt="about__img" />
                            <h3 className={styles['card__item-h3']}>1. Schedule online</h3>
                            <p className={styles['card__item-title']}>Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</p>
                        </div>
                        <div className={styles["wrapper__cards-item"]}>
                            <img className={styles['card__item-img']} src={aboutImg2} alt="about__img" />
                            <h3 className={styles['card__item-h3']}>2. Pay online easily</h3>
                            <p className={styles['card__item-title']}>Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc.</p>
                        </div>
                        <div className={styles["wrapper__cards-item"]}>
                            <img className={styles['card__item-img']} src={aboutImg3} alt="about__img" />
                            <h3 className={styles['card__item-h3']}>3. Get your house cleaned</h3>
                            <p className={styles['card__item-title']}>Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend.</p>
                        </div>
                    </div>
                    <div className={styles['about__button']}>
                        <button className={styles['about__button-btn']}>Get a free quote</button>
                        <button className={styles['about__button-btn']}>Explore services</button>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default About;