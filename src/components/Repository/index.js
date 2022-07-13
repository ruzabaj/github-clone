import axios from "axios";
import { useState,  useEffect } from "react";
import "src/sass/repo.scss";
import Select from "./Select";
import Sort from "./Sort";
import Type from "./Type";
import Repo from "./Repo";

export default function Repository() {

  const [repo, setUserRepo] = useState([]);
  const [search, setSearch]=useState("");
  const [selectedLanguage, setSelectedLanguage]= useState('');
  const [selectedSort, setSelectedSort]= useState('');
  const [selectedType, setSelectedType]= useState('');

  const [filteredRepo, setFilteredRepo] = useState([]);
  // const [searchKeyword, setSearchKeyword] = useState('');

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
    const newSort= repo.sort((a,b)=>{
      return a.name> b.name ? a.name: b.name
    })
        setFilteredRepo(newSort);
  },[selectedSort]);

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
        .map((item, key) => (
            <Repo item={item} key={key}/>
        ))}
      </div>
    </div>
  );
}
