import React from 'react';
import './CardPizza.css';

const CardPizza = ({ name, price, ingredients, img }) => (
  <div className="card card-pizza">
    <img src={img} alt={name} className="card-img-top" />
    <div className="card-body d-flex flex-column justify-content-between">
      <h2 className="card-title mb-3">Pizza {name}</h2>
      <div className="text-center">
        <p className="mb-0">Ingredientes:</p>
        <p className="card-text mb-0">
          🍕 {ingredients.join(", ")}.
        </p>
      </div>
      <h4 className="text-center">
        Precio: ${price.toLocaleString()}
      </h4>
    </div>
    <div className="card-footer d-flex justify-content-between">
      <button className="btn btn-outline-dark btn-ver-mas">Ver más 👀</button>
      <button className="btn btn-dark btn-añadir">Añadir 🛒</button>
    </div>
  </div>
);
export default CardPizza;
