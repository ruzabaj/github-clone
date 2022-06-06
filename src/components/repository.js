import '../sass/repo.scss';
import Select from 'react-select';

export default function Repository(){
    const data =[
        {
            name: "project-name1",
            status: "public",
            description: "description_1",
            language: "language_1",
            time:"two"
          },
        {
            name: "project-name1",
            status: "private",
            description: "description_1",
            language: "language_2",
            time:" one "
          },
    ];
    const dropDown =(e) => {
        
    }
    return(
        
        <div className="container-md" id="repository">
            <div className="repository-title">
                <input type="text"  placeholder="FInd a repository"/>
            

                {/* {data.forEach((item) => ( */}
                    <select id="select-box" onChange={dropDown}>
                        <option>Type</option>
                        {/* <option>{item.status}</option> */}
                    </select>
                    <select id="select-box">
                        <option>Language</option>
                        {/* <option>{item.language}</option> */}
                    </select>
                    <select id="select-box">
                        <option>Sort</option>
                        <option>Last Updated</option>
                        {/* <option>{item.name}</option> */}
                        <option>Stars</option>
                    </select>
                <button type="submit" id="new-repository">New</button>
            </div>

            <div class="row">
            {/* { data.filter((items) => (
                <div>
                    items[0].status=="public";
                </div>
            ))}*/}
                {data.map((item)=>(
                    <div class="col-lg-" id="repository-box">
                    <div id='respository-heading'>
                        <div id='repository-project'>
                            <a href="project-name">{item.name}</a>
                            <span> {item.status}</span>
                        </div>
                        <div class="star">Star<select><option></option></select></div>
                    </div>
                        <div>
                            <p class="description">{item.description}</p>
                            <p>{item.status}</p>
                            <p>updated {item.time} hours ago</p>
                        </div>
                </div>
                ))}
            </div>
        </div>
    );
}