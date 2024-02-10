import classes from "./Hero.module.css";

import { Link } from "react-router-dom";

import Button from "../UI/Button";

const Hero = () => {
  return (
    <section>
      <div className={classes.container}>
        <div className={classes.text}>
          <h1 className={classes.title}>Winter Is Coming</h1>
          <p>New Winter Collection 2023</p>
          <Link to={'/shop'}>
            <Button title="View Collection" className={classes.button} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
