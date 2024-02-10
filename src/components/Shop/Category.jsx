import {NavLink} from 'react-router-dom'
import classes from './Category.module.css'

const Category = (props) => {
    return (
        <div className={classes.container}>
            <img src={props.img} alt="Category" />
            <div className={classes.text}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <NavLink to={`/shop?category=${props.to}`}>
                    Discover now.
                </NavLink>
            </div>
        </div>
    );
}

export default Category;