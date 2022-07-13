import React from "react";

const Select = ({ language, setSelectedLanguage }) => {

  const arrayFilter = language.filter((id) => {
    return id !== null;
  });

  const filterItems = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div>
      <select id="select-box" onChange={filterItems}>
        <option>Language</option>
        {arrayFilter.map((items) => (
          <option value={items}>{items}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
