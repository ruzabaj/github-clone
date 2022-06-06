import React from "react";

const EditProfile = () => {
  return (
    <div>
        <div className="edit-profile" id="edit-profile">
          <form>
            <label to="">Name</label>
            <input type="text" placeholder="name"></input>
            <div>
              <label to="">Bio</label>
            </div>
            <textarea placeholder="bio"></textarea>
            <p>
              You can @mention other users and organizations to link to them.
            </p>
            <input type="text" placeholder="Company"/>
            <input type="text" placeholder="Location"/>
            <input type="text" placeholder="Website"/>
            <input type="text" placeholder="Twitter Username"/>
            <div id="btn">
              <button type="submit" id="save" >
                Save
              </button>
              <button type="submit" id="cancel">
                Cancel
              </button>
            </div>
          </form>
        </div>
    </div>
  );
};

export default EditProfile;
