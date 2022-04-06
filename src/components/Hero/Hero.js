import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>The Walking Dead</h2>
          <h3 className={styles.hero__genre}>
            genre: survival, thriller, drama, horror
          </h3>
          <p className={styles.hero__description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            cum accusamus quisquam earum velit ea nobis maiores exercitationem
            nam temporibus.
          </p>
          <button className={styles.hero__button}>Watch Now</button>
        </div>
        <div className="hero__right">
          <img
            className={styles.hero__image}
            src="https://images.alphacoders.com/548/thumb-1920-548564.jpg"
            alt="placeholder"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
