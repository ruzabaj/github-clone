import React from 'react'

const Select = ({filterItem, language, dropDown,  repo}) => {
    
   const arrayFilter= language.filter((id)=>{
        return id!== null
    });
    
    const filterItems=(event)=>{
        repo.filter((name) =>{
            console.log(name.language, "name-language")
            console.log("hi",event.target.value)
            if(name.language === event.target.value){
                console.log(name, "name");
                return name;
            }
        })
    }
   
    const sortSelect =(event)=>{
        repo.sort((a,b) =>{
            if(event.target.value == "Name"){
                // alert("name")
                return(
                a.name > b.name ? a.name : b.name
            )
        }
            else{
                return null
            }
        })
    }
    return (
    <div>
       <div className="repository-title">
        <input type="text" placeholder="Find a repository" on/>
        <select
          id="select-box"
          value={dropDown}
          onChange={(e) => e.target.value}
        >
          <option>Type</option>
          {repo.map((index) => (
            <option value={index.id} 
            >
              {index.id}
            </option>
          ))}
        </select>


        <select
          id="select-box"
          onChange={filterItems}
        >
          <option onClick={()=> filterItems()}>Language</option>
          {arrayFilter.map((items) => (
                <option
                 value={items} 
                 >
                  {items}
                </option>
          ))}
        </select>

        <select
          id="select-box"
          value={dropDown}
          onChange={sortSelect}
        >
          <option>Sort</option>
          <option>Name</option>
          <option>Stars</option>
        </select>

        <button type="submit" id="new-repository">
          New
        </button>
      </div> 
    </div>
  )
}

export default Select