import React from "react";

const Select = ({ options, name, filter, setFilter }) => {

  const optionList = options.filter((id) => id);

  const selectOption = (event) => {
    setFilter({...filter, [name]: event.target.value});
  };

  return (
    <div>
      <select id="select-box" onChange={selectOption}>
        {optionList.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
