import React from 'react'

const Type = ({setSelectedType}) => {
    const filterItems = (event) => {
        setSelectedType(event.target.value);
    };

  return (
    <div>
    <select id="select-box" onChange={filterItems}>
    <option>Type</option>
      <option >All</option>
      <option >Public</option>
      <option >Private</option>
      <option >Sources</option>
      <option >Fork</option>
      <option >Archieved</option>
      <option >Mirrors</option>
      <option >Templates</option>
  </select>
</div>
  )
}

export default Type