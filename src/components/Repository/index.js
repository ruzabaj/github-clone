import axios from "axios";
import { useState,  useEffect } from "react";
import "../../sass/repo.scss";
import Select from "./Select";
import Sort from "./Sort";
import Type from "./Type";

export default function Repository() {

  const [repo, setUserRepo] = useState([]);
  const [search, setSearch]=useState("");
  const [selectedLanguage, setSelectedLanguage]= useState('');
  const [selectedSort, setSelectedSort]= useState('');
  const [selectedType, setSelectedType]= useState('');

  const [filteredRepo, setFilteredRepo] = useState([]);
  // const [searchKeyword, setSearchKeyword] = useState('');

  console.log(selectedSort, "selected-Sort");

  useEffect(() => {
    axios.get(`https://api.github.com/users/ruzabaj/repos`)
    .then((res) => {
      setUserRepo(res.data);
      setFilteredRepo(res.data);
    })
  }, []);
  
  useEffect(()=>{
    const newRepo = repo.filter(
      (rep)=>rep.language === selectedLanguage
    );
    
    setFilteredRepo(newRepo);
  },[selectedLanguage]);

  useEffect(()=>{
    const newInput = repo.filter(
      (value)=>
          {if(search == null){
            return value
          }
          else if (value.name.toLowerCase().includes(search.toLowerCase())){
            return value
          }}
        )
        setFilteredRepo(newInput);
  },[search]);

  const getLanguage= [...new Set (repo.map((element)=>{
    return (element.language)
  }))]

  const inputFilter=(event)=>{
    setSearch(event.target.value)
  }
    return (
    <div className="container-md" id="repository">
      <div className="repository-title">
        <input type="text" placeholder="Find a repository" onChange={inputFilter}/>
        <Type    setSelectedType={setSelectedType}/>  
        <Select language={getLanguage}   setSelectedLanguage={setSelectedLanguage}/>  
        <Sort setSelectedSort={setSelectedSort}/>  
        <button type="submit" id="new-repository">        New      </button>
    </div>

      <div className="row">
        {filteredRepo
        // .filter((value)=>{
        //   if(search == null){
        //     return value
        //   }
        //   else if (value.name.toLowerCase().includes(search.toLowerCase())){
        //     return value
        //   }
        // })
        .map((item, key) => (
          <div className="col-lg-" id="repository-box" key={key}>
            <div id="respository-heading">
              <div id="repository-project">
                <a href="project-name">{item.name}</a>
                <span> {item.private}</span>
              </div>
              <div className="star">
                <select>
                  <option>Star</option>
                </select>
                  <input type="checkbox" className="star"/>
              </div>
            </div>
            <div>
              <p className="description">{item.description}</p>
              <p>{item.status}</p>
              <div className="descriptionn-time-language">
                <div>
                  <p>{item.language}</p>
                  <span class="dot"/>
                  </div>
                <div><p>updated {item.updated_at} hours ago</p></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
