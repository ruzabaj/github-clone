export default function overview () {
    return(
        <div>
            <div className="overview-titles">
                <p>Popular repositories</p>
                <p>Customise your pins</p>
            </div>
            <div class="row">
                <div class="col" id="overview-box">
                    <div id="overview-heading">
                        <a href="project-name">Project Name</a>
                        <p>Project Status</p>
                    </div>
                        <p>Project Description</p>
                        <p>Languages Used</p>
                </div>
                <div class="col"  id="overview-box">
                <div id="overview-heading">
                        <a href="project-name">Project Name</a>
                        <p>Project Status</p>
                    </div>
                        <p>Project Description</p>
                        <p>Languages Used</p>
                </div>
            </div>
        </div>
    );
}