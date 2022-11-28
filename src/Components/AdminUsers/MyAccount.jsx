import React from "react";
import "../../Assets/Styles/AdminUserStyles/MyAccount.Module.css";
import { userImage } from "../../Assets/Icons/index";

const MyAccount = () => {
  const [avatar, setAvatar] = React.useState(userImage);
  const hiddenFileInput = React.useRef(null);

  const openDirectory = () => {
    hiddenFileInput.current.click();
  };

  const uploadImage = (e) => {
    const fileUploaded = e.target.files[0];
    console.log(fileUploaded);
    setAvatar(URL.createObjectURL(e.target.files[0]));
  };

  const updateDetails = () => {
    console.log("Details Updated");
  };

  return (
    <div className="MyAccount-Page">
      <form action="" method="post">
        <label htmlFor="fName">First Name</label>
        <input type="text" name="fName" id="fName" />

        <label htmlFor="lName">Last Name</label>
        <input type="text" name="lName" id="lName" />

        <label htmlFor="pws">Password</label>
        <input type="text" name="pws" id="pws" />

        <i>Leave this blank if you don’t want to change the password.</i>

        <div className="custom-file" onClick={openDirectory}>
          <label
            className="custom-file-label"
            htmlFor="customFile"
            onClick={openDirectory}
          >
            Choose file
          </label>

          <input
            type="file"
            id="avatar"
            ref={hiddenFileInput}
            onChange={uploadImage}
            accept="image/*"
          />
          <i>Browse</i>
        </div>

        <div className="display-upload-img">
          <img src={avatar} alt="Avatar" id="upload-avatar" />
        </div>
      </form>
      <div className="form-footer">
        <button id="update-button" onClick={updateDetails}>
          Update
        </button>
      </div>
    </div>
  );
};

export default MyAccount;
