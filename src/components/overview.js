import 'src/sass/overview.scss';
import {useState, useEffect } from 'react';
import axios from 'axios';

export default function Overview() {
  
  const [overview, setUserOverview]=  useState([]);

  const getData = async () => {
    const { data } = await axios.get(`https://api.github.com/users/ruzabaj/repos`);
    setUserOverview(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="overview-titles">
        <p>Popular repositories</p>
        <p>Customise your pins</p>
      </div>

      <div class="row" id='overview'>
        {overview.map((item, key) => (
          <div class="col-5" id="overview-box" key={key}>
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
