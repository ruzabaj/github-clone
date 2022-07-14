import axios from "axios";
import { useState, useEffect, useRef } from "react";
import Select from 'src/components/Select';
import Sort from "./Sort";
import Repo from "./Repo";
import {profileServices} from 'src/services';
import "src/sass/repo.scss";
import {typeList } from 'src/libs/constants';

export default function Repository() {
  const [repo, setUserRepo] = useState([]);
  const [filter, setFilter] = useState({
    keyword:'',
    language: '',
    type:'',
    sort:''
  })
  const [colorLanguage, setColorLanguage] = useState("");
  const [filteredRepo, setFilteredRepo] = useState([]);

  const [search, setSearch] = useState('')

  const reference = useRef();
    console.log({filteredRepo})

  useEffect(() => {
    const getData = async () => {
      const { data } = await profileServices.getRepo();
      setUserRepo(data);
      setFilteredRepo(data);
    };
    getData();
  }, []);


  useEffect(() => {
    let newRepo = repo.filter((rep) => rep.language === filter.language);
     newRepo = newRepo.filter((value) => {
      console.log(value,"value")
      if (value == null) {
        return value;
      } else if (value.name.toLowerCase().includes(value.toLowerCase())) {
        return value;
      }
    });
    setFilteredRepo(newRepo);
  }, [filter]);
  
  //for type
  // useEffect(() => {
  //   const newRepo = repo.filter((rep) => selectedType === false);
  //   setFilteredRepo(newRepo);
  // }, [selectedType]);
  
  // for input search
  const inputFilter = (event) => {
    setFilter({...filter, keyword:event.target.value});
  };

  // for language search
  const getLanguage = [
    ...new Set(
      repo.map((element) => {
        return element.language;
      })
    ),
  ];

  // sort the select
  // useEffect(() => {
  //   const newSort = repo.sort((a, b) => {
  //     if (selectedSort === "Name") {
  //       return a.name > b.name ? a.name : b.name;
  //     } else {
  //       return a.id;
  //     }
  //   });
  //   setFilteredRepo(newSort);
  // }, [selectedSort]);

  //show select status either private or public
  // useEffect(() => {
  //   const type = repo.filter((element) => {
  //     if (element.private === true) {
  //       setStatus("Private");
  //     } else {
  //       setStatus("Public");
  //     }
  //   });
  // });

  // useEffect(() => {
  //   const colorName = repo.filter((element) => {
  //     if (element.language === "Vue") {
  //     } else {
  //     }
  //   });
  // }, []);

  const handleSearch = (e) =>{
      setSearch(e.target.value);
      const search = e.target.value;
      const filter = repo.filter((repo)=>{
        console.log({repo})
        return repo.name.toLowerCase().includes(search.toLowerCase)
      })
      setFilteredRepo(filter)
    }
    console.log({filteredRepo})

  return (
    <div className="container-md" id="repository">
      <div className="repository-title">
        <input
          type="text"
          placeholder="Find a repository"
          onChange={handleSearch}
          value={search}
        />
        <Select name='type' setFilter={setFilter} filter={filter} options={typeList}/>
        <Select
          options={getLanguage}
          filter={filter}
          setFilter={setFilter}
          name='language'
        />
        {/* <Sort setSelectedSort={setSelectedSort} /> */}
        <button type="submit" id="new-repository">
          New
        </button>
      </div>
      <div className="row">
        {filteredRepo.filter((item, key) => (
          <Repo
            item={item}
            key={key}
            // status={status}
            repo={repo}
            reference={reference}
          />
        ))}
      </div>
    </div>
  );
}
