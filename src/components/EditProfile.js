import React from "react";
import { useState } from "react";

const EditProfile = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        type="submit"
        id="edit-profile"
        onClick={() => setIsOpen(!isOpen)}
      >
        {props.label}
      </button>
      {isOpen && (
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
            <input type="text" placeholder="Company"></input>
            <input type="text" placeholder="Location"></input>
            <input type="text" placeholder="Website"></input>
            <input type="text" placeholder="Twitter Username"></input>
            <button type="submit" id="save">
              Save
            </button>
            <button type="submit" id="cancel">
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default EditProfile;
