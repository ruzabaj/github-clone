import 'src/sass/overview.scss';
import {useState, useEffect } from 'react';
import axios from 'axios';

export default function Overview() {
  
  const [overview, setUserOverview]=  useState([]);

  useEffect(() => {
    axios.get(`https://api.github.com/users/ruzabaj/repos`).then(res=>{
      setUserOverview(res.data)
      console.log(res.data)
    })
  }, [])

  return (
    <div>
      <div className="overview-titles">
        <p>Popular repositories</p>
        <p>Customise your pins</p>
      </div>

      <div class="row" id='overview'>
        {overview.map((item) => (
          <div class="col-5" id="overview-box">
            <div id="overview-heading">
              <a href="project-name">{item.name}</a>
              <p>{item.status}</p>
            </div>
            <p>{item.description}</p>
            <p>{item.language}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
