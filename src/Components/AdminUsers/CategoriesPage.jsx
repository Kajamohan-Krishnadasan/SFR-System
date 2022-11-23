import { Search } from "@mui/icons-material";
import React from "react";
import "../../Assets/Styles/AdminUserStyles/AdminCategoriesPage.Module.css";
import data from "../Samples/Category";

const CategoriesPage = () => {
  const StatusStyle = {
    Active: {
      backgroundColor: "#00a600",
    },
    Inactive: {
      backgroundColor: "#fa0000",
    },
  };

  const specialStatus = (e) => {
    if (e === "Active") {
      return (
        <div className="Status-Text" style={StatusStyle.Active}>
          Active
        </div>
      );
    } else {
      return (
        <div className="Status-Text" style={StatusStyle.Inactive}>
          Inactive
        </div>
      );
    }
  };

  const actionButton = () => {
    return (
      <div>
        <select className="Action-Selection">
          <option defaultValue={true} value="action">
            {" "}
            Action
          </option>
          <option value="view"> View</option>
          <option value="edit"> Edit</option>
          <option value="delete"> Delete</option>
        </select>
      </div>
    );
  };

  let No = 0;
  // let len = data.length;
  const nextButton = React.useRef();
  // const nextBtn = document.getElementsByClassName("next-button");


  return (
    <div className="Categories-Page">
      <div className="header-set">
        <span className="sub-Heading">List of Categories</span>
        <button className="Create-New-Button"> + Create New </button>
      </div>

      <hr className="hr-line-table" />

      <div className="search-set">
        Search : <input type="text" className="search-input" />{" "}
        <Search fontSize="large" color="action" />
      </div>

      <table>
        <thead>
          <tr>
            <th> #No </th>
            <th> Date Created </th>
            <th> Category </th>
            <th> Description </th>
            <th className="Status-column-size"> Status </th>
            <th> Action </th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, key) => {
            if (No < 10) {
              return (
                <tr key={key}>
                  <td>{++No}</td>
                  <td>{val.DateCreated}</td>
                  <td>{val.Category}</td>
                  <td>{val.Description}</td>
                  <td>{specialStatus(val.Status)}</td>
                  <td className="Action">{actionButton()}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>

      <div className="table-end">
        <div className="table-count-text">
          Showing 1 to {data.length} of {data.length} entries
        </div>
        <div className="next-and-previous-button">
          <button className="Previous-button">Previous</button>
          <div className="current-page-number">1</div>
          <button className="next-button" ref={nextButton}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
