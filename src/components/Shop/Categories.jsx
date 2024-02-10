import classes from './Categories.module.css';
import Category from './Category';

import img1 from '../../assets/categories/4092305251_2_1_1-removebg-preview.png';
import img2 from '../../assets/categories/7200232712_2_4_1-removebg-preview.png';
import img3 from '../../assets/categories/0653268811_2_1_1-removebg-preview.png';

const Categories = () => {
    return (
        <section className={classes.container}>
            <h1 className={classes.title}>Featured Categories</h1>
            <div className={classes.list}>
                <Category to={'men'} img={img1} title={'Men'} description={'New Men\'s Collection 2023'} />
                <Category to={'women'} img={img2} title={'Women'} description={'New Women\'s Collection 2023'} />
                <Category to={'accessories'} img={img3} title={'Accessories'} description={'Looking For Something Special?'} />
            </div>
        </section>
    );
}

export default Categories;