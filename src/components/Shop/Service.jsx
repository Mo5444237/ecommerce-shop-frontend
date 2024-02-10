import classes from './Service.module.css'


const Service = ({ icon, title, description }) => {
    return (
        <div className={classes.service}>
            <img src={icon} alt="Icon" />
            <div className={classes.text}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Service;