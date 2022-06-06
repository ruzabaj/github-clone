import '../sass/overview.scss'
export default function Overview() {
  const data = [
    {
      name: "project-name1",
      status: "public",
      description: "description_1",
      language: "language_1",
    },
    {
      name: "project-name2",
      status: "private",
      description: "description_1",
      language: "language_1",
    },
    {
        name: "project-name2",
        status: "private",
        description: "description_1",
        language: "language_1",
    },
    {
        name: "project-name4",
        status: "public",
        description: "description_4",
        language: "language_3.3",
    },
    {
        name: "project-name5",
        status: "private",
        description: "description_5",
        language: "language_3.5",
    },
  ];
  return (
    <div>
      <div className="overview-titles">
        <p>Popular repositories</p>
        <p>Customise your pins</p>
      </div>

      <div class="row" id='overview'>
        {data.map((item) => (
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
