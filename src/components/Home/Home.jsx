import React from 'react';
import Header from '../Header/Header';
import CardPizza from '../CardPizza/CardPizza';
import { pizzas } from './pizzas';

const Home = () => (
  <>
    <Header />
    <div className="container">
      <div className="row justify-content-center">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
            <CardPizza
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
            />
          </div>
        ))}
      </div>
    </div>
  </>
);

export default Home;
