import React from 'react';

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const onClickCategory = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        {/* <li onClick={() => onClickCategory(0)} className={activeIndex === 0 ? 'active' : ''}>
          Все
        </li> */}
        {categories.map((value, i) => (
          <li
            key={value}
            onClick={() => onClickCategory(i)}
            className={activeIndex === i ? 'active' : ''}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
