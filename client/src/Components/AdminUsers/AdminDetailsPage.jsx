import { Search } from "@mui/icons-material";
import React, { useState } from "react";
import "../../Assets/Styles/AdminUserStyles/AdminCategoriesPage.Module.css";
import Axios from "axios";
import { useEffect } from "react";

const AdminDetailsPage = () => {
  console.count("Admin Admin Details ");
  const [tableItem, setTableItem] = useState([]);
  const [dataLength, setDataLength] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [isFound, setIsFound] = useState(false);
  // let No = 0;

  useEffect(() => {
    const getAllClients = async () => {
      const res = await Axios.get(
        `http://localhost:3001/allAdmins?q=${searchQuery}`
      );
      setTableItem(res.data);
      setDataLength(res.data.length);
      if (res.data.length > 0) {
        setIsFound(true);
      } else {
        setIsFound(false);
      }
    };
    getAllClients();
  }, [searchQuery]);

  const StatusStyle = {
    Active: {
      backgroundColor: "#00a600",
    },
    Inactive: {
      backgroundColor: "#fa0000",
    },
  };

  const specialStatus = (e) => {
    if (e === 1) {
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
            Action
          </option>
          <option value="edit"> Edit</option>
          <option value="delete"> Delete</option>
        </select>
      </div>
    );
  };

  const nextButton = React.useRef();

  const displaySearchName = (props) => {
    setSearchQuery(props.target.value);
  };

  const displayTable = (data) => {
    return data.filter(
      (val) =>
        val.name.toLowerCase().includes(searchQuery) ||
        val.email.toLowerCase().includes(searchQuery)
    );
  };
  const diplayAdminType = (data) => {
    if (data === "A") {
      return "Administrator";
    } else {
      return "Staff";
    }
  };
  return (
    <div className="Categories-Page">
      <div className="header-set">
        <span className="sub-Heading">List of Administrstors</span>
        <button className="Create-New-Button"> + Create New </button>
      </div>

      <hr className="hr-line-table" />

      <div className="search-set">
        Search :
        <input
          type="text"
          className="search-input"
          onChange={displaySearchName}
        />
        <Search fontSize="large" color="action" />
      </div>

      <table>
        <thead>
          <tr>
            <th> #No </th>
            <th> Date Created </th>
            <th> Name </th>
            <th> Contact </th>
            <th> Type </th>
            <th> Status </th>
            <th> Action </th>
          </tr>
        </thead>

        {isFound ? (
          <TableBody
            data={displayTable(tableItem)}
            specialStatus={specialStatus}
            actionButton={actionButton}
            diplayAdminType = {diplayAdminType}
          />
        ) : (
          <tbody>
            <tr>
              <td className="notFound" colSpan={7}>
                Not found
              </td>
            </tr>
          </tbody>
        )}
      </table>

      <div className="table-end">
        <div className="table-count-text">
          Showing 1 to {dataLength} of {dataLength} entries
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

export default AdminDetailsPage;

function TableBody({ data, specialStatus, actionButton, diplayAdminType }) {
  return (
    <tbody className="table-body-area">
      {data.map((val, key) => {
        if (key < 10) {
          return (
            <tr key={key}>
              <td className="center">{key + 1}</td>
              <td className="center">
                {Date(val.date_added).substring(3, 21)}
              </td>
              <td>{val.name}</td>
              <td className="contact">
                {val.email} <br />
                {val.mobile}
              </td>
              <td>{diplayAdminType(val.type)}</td>
              <td className="center">{specialStatus(val.status)}</td>
              <td className="Action center">{actionButton()}</td>
            </tr>
          );
        } else {
          return <></>;
        }
      })}
    </tbody>
  );
}
