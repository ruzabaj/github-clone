import '../sass/repo.scss';
export default function Repository(){
    const data =[
        {
            name: "project-name1",
            status: "status_1",
            description: "description_1",
            language: "language_1",
            time:"updated two hours ago"
          },
    ];
    return(
        <div className="container-md" id="repository">
            {/* react select package  */}
            <div className="repository-title">
                <input type="text"  placeholder="FInd a repository"/>
                    <select id="select-box">
                        <option value="0">Type</option>
                        <option value="1">All</option>
                        <option value="2">Public</option>
                        <option value="3">Private</option>
                        <option value="4">Sources</option>
                        <option value="5">Forks</option>
                        <option value="8">Archieved</option>
                        <option value="9">Mirror</option>
                        <option value="9">Templates</option>
                    </select>
                    <select id="select-box">
                        <option>Language</option>
                        <option>HTML</option>
                        <option>CSS</option>
                        <option>javascript</option>
                        <option>Python</option>
                        <option>language</option>
                        <option>language</option>
                    </select>
                    <select id="select-box">
                        <option>Sort</option>
                        <option>Last Updated</option>
                        <option>Name</option>
                        <option>Stars</option>
                    </select>
                <button type="submit" id="new-repository">New</button>
            </div>
            <div class="row">
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
                            <p>{item.time}</p>
                        </div>
                </div>
                ))}
            </div>
        </div>
    );
}