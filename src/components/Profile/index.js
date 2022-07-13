import EditProfile from './Edit';
import View from './View/index';
import { useState , useEffect} from "react";
import axios from 'axios';

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

  useEffect(() => {
    axios.get(`https://api.github.com/users/ruzabaj`).then(res=>{
      setuserInfo(res.data);
    })    
  }, [])

  return (
    <div id="profile">
      <div className="profile-contents" id='profile-contents'> 
        <img src={data.imgUrl} alt="profile-pic" className="profile-picture" />
          {console.log("useInfo", userInfo)}
         {showView? 
         <View user={userInfo} setshowView={setshowView} />
         :
         <EditProfile id="button-edit"/>
        }
      </div>
    </div>
  );
}
