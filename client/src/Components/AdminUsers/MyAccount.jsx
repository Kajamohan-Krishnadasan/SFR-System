import React, { useState } from "react";
import "../../Assets/Styles/AdminUserStyles/MyAccount.Module.css";
// import { userImage } from "../../Assets/Icons/index";
import { useRef } from "react";
import Axios from "axios";

const MyAccount = ({ setUserLog }) => {
  console.count("Admin Setting ");

  const userDetails = JSON.parse(sessionStorage.getItem("userDetails"));
  let fName = userDetails.name;
  let password = userDetails.password;
  let email = userDetails.email;

  // const getUserImage = async (email) => {
  //   try {
  //     const res = await Axios.get("http://localhost:3001/getAdminImage", email);
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getUserImage(email);
  // }, [email]);

  const [avatar, setAvatar] = useState(null);
  const hiddenFileInput = useRef(null);
  const [fileName, setFileName] = useState("");

  const openDirectory = () => {
    hiddenFileInput.current.click();
  };

  const uploadImage = (e) => {
    setAvatar(URL.createObjectURL(formRef.current[4].files[0]));
    setFileName(formRef.current[4].files[0].name);
  };

  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      firstName: formRef.current[0].value,
      lastName: formRef.current[1].value,
      emailaddress: email,
      password: formRef.current[3].value,
      imageFile: formRef.current[4].files[0],
      imageFileName: fileName,
    };

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("emailaddress", data.emailaddress);
    formData.append("password", data.password);
    formData.append("image", data.imageFile);
    formData.append("imageFileName", data.imageFileName);

    // console.log(URL.createObjectURL(fileUploaded));
    try {
      if (
        data.firstName &&
        data.lastName &&
        data.password &&
        data.imageFile
      ) {
        setUserLog(URL.createObjectURL(formRef.current[4].files[0]));
        const res = await Axios.post("http://localhost:3001/upload", formData, config);

        if (res.data.success) {
          console.log("Uploaded Successfully");
          alert("Uploaded Successfully");
        }
      } else {
        if(!data.firstName){
          console.log("Please enter your first name");
          alert("Please enter your first name");
        }else if(!data.lastName){
          console.log("Please enter your last name");
          alert("Please enter your last name");  
        }else{
          console.log("Please enter your first name and last name");
          alert("Please enter your first name and last name");
        }
        
      }
    } catch (err) {
      if (err.res !== undefined) {
        console.log("Not Uploaded");
        // console.log(err);
      } else {
        console.log("Server Not connected");
        alert("Server Not connected");
      }
    }
  };

  const clickOnsubmit = (e) => {
    e.preventDefault();
    handleSubmit(e);
  };

  return (
    <div className="MyAccount-Page">
      <form onSubmit={handleSubmit} ref={formRef} encType="multipart/form-data">
        <label htmlFor="fName">First Name</label>
        <input type="text" name="fName" id="fName" defaultValue={fName} />

        <label htmlFor="lName">Last Name</label>
        <input type="text" name="lName" id="lName" />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" defaultValue={email}  disabled/>

        <label htmlFor="pws">Password</label>
        <input type="text" name="pws" id="pws" defaultValue={password} />

        <i>Leave this blank if you don’t want to change the password.</i>

        <div className="custom-file" onClick={openDirectory}>
          <label
            className="custom-file-label"
            htmlFor="imageFile"
            onClick={openDirectory}
          >
            Choose file
          </label>

          <input
            type="file"
            id="avatar"
            name="imageFile"
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
        <button id="update-button" onClick={clickOnsubmit}>
          Update
        </button>
      </div>
    </div>
  );
};

export default MyAccount;
