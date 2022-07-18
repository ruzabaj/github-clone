import axios from "axios";
import { useState, useEffect, useRef } from "react";
import Select from 'src/components/Select';
import Sort from "./Sort";
import Repo from "./Repo";
import {profileServices} from 'src/services';
import {typeList } from 'src/libs/constants';
import "src/sass/repo.scss";
import { type } from "@testing-library/user-event/dist/type";

export default function Repository() {
  const [repo, setRepo] = useState([]);
  const [filter, setFilter] = useState({
    keyword:'',
    language: '',
    type:'',
    sort:''
  })
  const [filteredRepo, setFilteredRepo] = useState([]);
  const [status, setStatus]= useState("");

  useEffect(() => {
    const getData = async () => {
      const { data } = await profileServices.getRepo();
      setRepo(data);
      setFilteredRepo(data);
    };
    getData();
  }, []);


  useEffect(() => {
    let newRepo = repo.filter((rep) => rep.language === filter.language);
    newRepo = newRepo.filter((repo) => repo.name.toLowerCase().includes(filter.keyword.toLowerCase()));
    setFilteredRepo(newRepo);
  }, [repo, filter]);
  
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
  
  //show select status either private or public
  useEffect(() => {
    const type = repo.filter((element) => {
      if (element.private === true) {
        setStatus("Private");
      } else {
        setStatus("Public");
      }
    });
  },[type]);

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


  const handleSearch = (e) =>{
      const search = e.target.value;
      setFilter({...filter, keyword: search});
  }

  return (
    <div className="container-md" id="repository">
      <div className="repository-title">
        <input
          type="text"
          placeholder="Find a repository"
          onChange={handleSearch}
          value={filter.keyword}
        />
        <Select name='type' setFilter={setFilter} filter={filter} options={typeList}/>
        <Select
          options={getLanguage}
          filter={filter}
          setFilter={setFilter}
          name='language'
        />
        <button type="submit" id="new-repository">
          New
        </button>
      </div>
      <div className="row">
        {filteredRepo.map((item, key) => (
          <Repo
            item={item}
            key={key}
            status={status}
            repo={repo}
          />
        ))}
      </div>
    </div>
  );
}
