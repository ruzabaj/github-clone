import React from 'react'

const index = (props) => {
const {setshowView, user}=props;
const {name,username,bio, followers, following, company,location }=user
const btnClick =() =>{
    setshowView(false)
}
  return (
    <div className="profile-contents" >
        <p>{name}</p>
        <p>{username}</p>
        <p>{bio}</p>
        <button
        type="submit" onClick={btnClick}      >Edit Me
      </button>
        <div className="followers-following">
          <a href='followers'>{followers} followers .</a>
          <a href='followers'>{following} following</a>
        </div>
        <div>
            <p>{company}</p>
            <p>{location}</p>
        </div>
    </div>
  )

}
export default index