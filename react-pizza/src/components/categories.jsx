import React, { useState } from "react";

const categories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const Categories = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const onClickCategory = (index) => setActiveCategoryIndex(index);

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => {
          return (
            <li
              key={index}
              className={index === activeCategoryIndex ? "active" : ""}
              onClick={() => onClickCategory(index)}
            >
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
