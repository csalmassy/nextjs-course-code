import Image from 'next/image';
import classes from './hero.module.css'

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/csongor.jpg"
          alt="An image showing Csongor"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Csongor</h1>
      <p>
        I blog about web development - especially the most popular frontend
        framework React.
      </p>
    </section>
  );
}
export default Hero;
