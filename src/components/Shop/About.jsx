import classes from "./About.module.css";

import img1 from '../../assets/s.jpg';
import img2 from '../../assets/s_2.jpg';

const About = () => {
  return (
    <div className={classes.container}>
      <section>
        <div className={classes.text}>
          <h3>Our Story</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
            vitae magnam optio hic harum, et doloremque mollitia id delectus
            magni voluptatem perferendis quis tempore temporibus laborum unde
            quia tempora voluptas.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
            tempore quam inventore reprehenderit. A possimus quos nam soluta
            voluptatum ratione dignissimos ut quisquam odio tenetur. Ex
            voluptatum nesciunt deserunt saepe?
          </p>
        </div>
        <div className={classes.image}>
          <img src={img2} alt="" />
        </div>
      </section>
      <section>
        <div className={classes.image}>
          <img src={img1} alt="" />
        </div>
        <div className={classes.text}>
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
            sapiente eius quibusdam, aut eum explicabo maiores enim cumque dolor
            iusto vitae sit? Quas consequatur, distinctio ipsum explicabo quis
            fuga quae.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
