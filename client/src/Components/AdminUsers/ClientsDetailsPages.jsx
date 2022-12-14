import { Search } from "@mui/icons-material";
import React, { useState } from "react";
import "../../Assets/Styles/AdminUserStyles/AdminCategoriesPage.Module.css";
import Axios from "axios";
import { useEffect } from "react";

const ClientsDetailsPages = () => {
  console.count("Admin Clients Details ");
  const [tableItem, setTableItem] = useState([]);
  const [dataLength, setDataLength] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [isFound, setIsFound] = useState(false);

  useEffect(() => {
    const getAllClients = async () => {
      try {
        const res = await Axios.get(
          `http://localhost:3001/allClients?q=${searchQuery}`
        );
        setTableItem(res.data);
        setDataLength(res.data.length);
        if (res.data.length > 0) {
          setIsFound(true);
        }
      } catch (error) {
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

  return (
    <div className="Categories-Page">
      <div className="header-set">
        <span className="sub-Heading">Details of Clients</span>
      </div>

      <hr className="hr-line-table" />

      <div className="search-set">
        Search :
        <input
          type="text"
          className="search-input"
          placeholder="Name"
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
            <th className="Status-column-size"> Status </th>
            <th> Action </th>
          </tr>
        </thead>
        {isFound ? (
          <TableBody
            data={displayTable(tableItem)}
            specialStatus={specialStatus}
            actionButton={actionButton}
          />
        ) : (
          <tbody>
            <tr>
              <td className="notFound" colSpan={6}>
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

export default ClientsDetailsPages;

function TableBody({ data, specialStatus, actionButton }) {
  return (
    <tbody className="table-body-area">
      {data.map((val, key) => {
        if (key < 10) {
          return (
            <tr key={val.id}>
              <td className="center">{key + 1}</td>
              <td className="center">
                {Date(val.date_added).substring(3, 21)}
              </td>
              <td>{val.name}</td>
              <td>
                {val.email} <br />
                {val.mobile}
              </td>
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
