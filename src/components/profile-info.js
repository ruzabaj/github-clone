export default function Profile () {
    return(  
        <div id="profile"  >
            {/* className="container-md" */}
            <div className="profile-contents">
                <img src="code-girl.jpg" alt="profile-pic" className="profile-picture"/>
                <p>Use props and write username</p>
                <p>Use props and write name</p>
                <button type="submit" id="edit-profile">Edit profile</button>
                    <div className="followers-following">
                        <p>number followers .</p>
                        <p>number following</p>
                    </div>
            </div>
           
        </div>
        
    );
}