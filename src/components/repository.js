import axios from "axios";
import { useState, useRef, useEffect } from "react";
import "../sass/repo.scss";

export default function Repository() {
  const [dropDown, setdropDown] = useState("");
  const [repo, setUserRepo] = useState([]);

  useEffect(() => {
    axios.get(`https://api.github.com/users/ruzabaj/repos`)
    .then((res) => {
      setUserRepo(res.data);
      console.log(res.data);
    })
    .then((json)=>{
      const result =json.sort((a,b)=> a.name.localCompare(b.name))
    })
  }, []);

  const getLanguage= [new Set (repo.map((element)=>{
    return (element.language)
  }))]
  console.log(getLanguage);

  const filterItem=(languageFilter)=>{
    const updatedItems= repo.filter((element)=>{
      console.log("from updated items function",element)
      // return
      //   (
        //     element.language===languageFilter
        //     );
      })
    }
    const optionRef = useRef(null);
    
    const focus = () => {
      console.log(optionRef.current.value);
    };
    return (
    <div className="container-md" id="repository">
      <div className="repository-title">
        <input type="text" placeholder="FInd a repository" />
        <select
          id="select-box"
          value={dropDown}
          onChange={(e) => e.target.value}
          ref={optionRef}
        >
          <option>Type</option>
          {repo.map((index) => (
            <option value={index.id} onFocus={focus}>
              {index.status}
            </option>
          ))}
        </select>
        <select
          id="select-box"
          value={dropDown}
          onChange={(event) => setdropDown(event.target.value)}
          ref={optionRef}
        >
          <option>Language</option>
          {repo.map((items) => (
            <option value={items.id} onFocus={focus} onClick={()=> filterItem('HTML')}>
              {items.language}
            </option>
          ))}
        </select>
        <select
          id="select-box"
          value={dropDown}
          onChange={(event) => event.target.value}
          ref={optionRef}
        >
          <option>Sort</option>
          <option onFocus={focus}>Ascending</option>
          <option onFocus={focus}>Descending</option>
        </select>
        <button type="submit" id="new-repository">
          New
        </button>
      </div>

      <div className="row">
        {repo.map((item) => (
          <div className="col-lg-" id="repository-box">
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
                <div><p>{item.language}</p></div>
                <div><p>updated {item.updated_at} hours ago</p></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
