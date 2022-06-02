import Edit from './EditProfile'
export default function Profile() {
  const data = {
    imgUrl: "code-girl.jpg",
    username: "username",
    name: "name",
    followers: "eg:11",
    following: "eg:30",
    company:"companyname",
    location:'locationName',

  };

  return (
    <div id="profile">
      <div className="profile-contents">
        <img src={data.imgUrl} alt="profile-pic" className="profile-picture" />
        <p>{data.name}</p>
        <p>{data.username}</p>
        <Edit label="button from parent"/>
        {/* <div className="followers-following">
          <a href='followers'>{data.followers} followers .</a>
          <a href='followers'>{data.following} following</a>
        </div> */}
      </div>
    </div>
  );
}
