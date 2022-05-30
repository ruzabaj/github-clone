export default function repository(){
    return(
        <div className="container-sm" id="repository">
            <h4>Repository</h4>
            <div className="repository-titles">
                <input type="text"  placeholder="FInd a repository"/>
                    <select id="select-box">
                        <option>type</option>
                        <option>type</option>
                        <option>type</option>
                        <option>type</option>
                        <option>type</option>
                        <option>type</option>
                        <option>type</option>
                        <option>type</option>
                    </select>
                    <select id="select-box">
                        <option>language</option>
                        <option>HTML</option>
                        <option>CSS</option>
                        <option>javascript</option>
                        <option>Python</option>
                        <option>language</option>
                        <option>language</option>
                    </select>
                    <select id="select-box">
                        <option>sort</option>
                        <option>Last Updated</option>
                        <option>Name</option>
                        <option>Stars</option>
                    </select>
                <button type="submit" id="new-repository">New</button>
            </div>
            <div class="row">
                <div class="col" id="repository-box">
                Column
                </div>
            </div>
        </div>
    );
}