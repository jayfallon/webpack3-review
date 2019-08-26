import React from 'react';
import classes from './PizzaImage.module.css';
import PizzaImage from '../../assets/pizza.jpg';

const pizzaImage = props => (
  <div className={classes.PizzaImage}>
    <img src={PizzaImage} alt="Pizza image" className={classes.PizzaImg} />
  </div>
);

export default pizzaImage;
