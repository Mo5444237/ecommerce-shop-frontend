import classes from "./OurServices.module.css";

import icon1 from "../../assets/fast.png";
import icon2 from "../../assets/premium.png";
import icon3 from "../../assets/shield.png";
import Service from "./Service";

const OurServices = () => {
    return (
        <section className={classes.container}>
            <Service
                icon={icon1}
                title="Free Shipping"
                description="For shippings over 100$"
            />
            <Service
                icon={icon2}
                title="Best quality"
                description="Premium quality in your hand"
            />
            <Service
                icon={icon3}
                title="Secure payments"
                description="All your credit data is safe"
            />
        </section>
    );
};
export default OurServices;
