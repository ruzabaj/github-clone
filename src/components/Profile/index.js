import EditProfile from './Edit';
import View from './View/index';
import { useState } from "react";

export default function Profile() {
  
  const data = {
    imgUrl: "github-profile.png",
    username: "username",
    name: "name",
    bio:'bio',
    followers: "eg:11",
    following: "eg:30",
    company:"companyname",
    location:'locationName',
    twiiterHandle:"",
  };
  
  const [userInfo , setuserInfo] =useState(data);
  const [showView , setshowView] =useState(true);
  // const toggleShowview = () =>{
  //   setshowView(!showView)
  // }
  
  return (
    <div id="profile">
      <div className="profile-contents" id='profile-contents'> 
        <img src={data.imgUrl} alt="profile-pic" className="profile-picture" />
         {showView? 
         <View user={userInfo} setshowView={setshowView} />
         :
         <EditProfile id="button-edit"/>
        }

        {/* <div className="followers-following">
          <a href='followers'>{data.followers} followers .</a>
          <a href='followers'>{data.following} following</a>
        </div> */}
      </div>
    </div>
  );
}
