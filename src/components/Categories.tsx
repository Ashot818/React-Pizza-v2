import React from "react";

type CategoriesProps = {
  categoryId:number;
  onChangeCategory:(index:number) => void;
}

export const Categories:React.FC<CategoriesProps> = React.memo(({ categoryId, onChangeCategory }) =>{

  const categories = ["Все", "Мясные", "Вегетарианская", "Острые", "Закрытые"];

  return (
    <div className="categories">
      <ul >
        {categories.map((categoryName, index) => (
          <li
            key={index}
            onClick={() => onChangeCategory(index)}
            className={categoryId === index ? "active" : ""}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
})


