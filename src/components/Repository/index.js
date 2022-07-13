import axios from "axios";
import { useState, useEffect } from "react";
import "src/sass/repo.scss";
import Select from "./Select";
import Sort from "./Sort";
import Type from "./Type";
import Repo from "./Repo";

export default function Repository() {
  const [repo, setUserRepo] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedSort, setSelectedSort] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [status, setStatus] = useState("");
  const [filteredRepo, setFilteredRepo] = useState([]);

  // for get api 
  const getData = async () => {
    const { data } = await axios.get(
      `https://api.github.com/users/ruzabaj/repos`
    );
    setUserRepo(data);
    console.log("data", data)
  };

  useEffect(() => {
    getData();
  }, []);
  
  // for language search
  const getLanguage = [
    ...new Set(
      repo.map((element) => {
        return element.language;
      })
    ),
  ];
  useEffect(() => {
    const newRepo = repo.filter((rep) => rep.language === selectedLanguage);
    setFilteredRepo(newRepo);
  }, [selectedLanguage]);
  
  // for input search
  const inputFilter = (event) => {
    setSearch(event.target.value);
  };
  useEffect(() => {
    const newInput = repo.filter((value) => {
      if (search == null) {
        return value;
      } else if (value.name.toLowerCase().includes(search.toLowerCase())) {
        return value;
      }
    });
    setFilteredRepo(newInput);
  }, [search]);

// sort the select
  useEffect(() => {
    const newSort = repo.sort((a, b) => {
    if(selectedSort === 'Name'){
      return a.name > b.name ? a.name : b.name;
    }
    else{
      return a.id
    }
    });
    console.log(selectedSort, "type-selected")
    setFilteredRepo(newSort);
  }, [selectedSort]);

  //type select
useEffect(()=>{
  const type = repo.filter((element)=>{
    if(element.private === true){
      setStatus("private");
    }
    else{
      setStatus("public")
    }
    console.log(element.fork);
    console.log(status);
  })
  console.log(selectedType, "type-selected")
})

  return (
    <div className="container-md" id="repository">
      <div className="repository-title">
        <input
          type="text"
          placeholder="Find a repository"
          onChange={inputFilter}
        />
        <Type setSelectedType={setSelectedType} />
        <Select
          language={getLanguage}
          setSelectedLanguage={setSelectedLanguage}
        />
        <Sort setSelectedSort={setSelectedSort}/>
        <button type="submit" id="new-repository">
          New
        </button>
      </div>

      <div className="row">
        {filteredRepo.map((item, key) => (
          <Repo item={item} key={key} status={status} />
        ))}
      </div>
    </div>
  );
}
