import React from 'react'

const Sort = ({setSelectedSort}) => {

      const filterS = (event) => {
        setSelectedSort(event.target.value);
      };

  return (
    <div>
        <select id="select-box" onChange={filterS}>
        <option>Sort</option>
          <option >Last Updated</option>
          <option >Name</option>
          <option >Stars</option>
      </select>
    </div>
  )
}

export default Sort