import React from 'react'

const Sort = ({setSelectedSort}) => {

    // const sortSelect = (event) => {
    //     repo.sort((a, b) => {
          // if (event.target.value === "Name") {
            // alert("name")
            // console.log(a.name > b.name ? a.name : b.name );
            // return a.name > b.name ? a.name : b.name;
          // } 
          // else {
          //   return null;
          // }
    //     });
    //   };

      const filterItems = (event) => {
        setSelectedSort(event.target.value);
      };

  return (
    <div>
        <select id="select-box" onChange={filterItems}>
        <option>Sort</option>
          <option >Last Updated</option>
          <option >Name</option>
          <option >Stars</option>
      </select>
    </div>
  )
}

export default Sort