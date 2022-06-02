import '../sass/overview.scss'
export default function Overview() {
  const data = [
    {
      name: "project-name1",
      status: "status_1",
      description: "description_1",
      language: "language_1",
    },
    {
      name: "project-name2",
      status: "status_1",
      description: "description_1",
      language: "language_1",
    },
    {
        name: "project-name2",
        status: "status_1",
        description: "description_1",
        language: "language_1",
    },
    {
        name: "project-name4",
        status: "status_2",
        description: "description_4",
        language: "language_3.3",
    },
  ];
  return (
    <div>
      <div className="overview-titles">
        <p>Popular repositories</p>
        <p>Customise your pins</p>
      </div>

      <div class="row">
        {data.map((item) => (
          <div class="col-6" id="overview-box">
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
