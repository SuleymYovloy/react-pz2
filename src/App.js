import React from 'react';
import Header from './components/Header';
import Sort from './components/Sort';
import Categories from './components/Categories';
import PizzaBlock from './components/PizzaBlock';

import './scss/app.scss';

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch('https://63ad763c3e465169165afd84.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((obj) => (
              <PizzaBlock key={obj.id} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
