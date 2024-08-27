import React from 'react';

const CategoryList = ({ categories }) => {
  const renderCategory = (category) => (
    <li key={category.id}>
      <h3>{category.name}</h3>
      {category.subcategories && (
        <ul>
          {category.subcategories.map(renderCategory)}
        </ul>
      )}
    </li>
  );

  return (
    <ul>
      {categories.map(renderCategory)}
    </ul>
  );
};

export default CategoryList;