import { Search } from "@mui/icons-material";
import React, { useState } from "react";
import "./Facilities.Module.css";
import imgNotAvailable from "../../Assets/Images/Content_Images/no-image-available.png";

const Facilities = () => {
  const [isSearch, setIsSearch] = React.useState(false);
  const [searchFacility, setSearchFacility] = useState("");

  const handleOnchange = (props) => {
    const searchItem = props.target.value;
    if (searchItem !== "") {
      setSearchFacility(searchItem);
      setIsSearch(true);
      console.log(searchItem);
    } else {
      setSearchFacility("");
      setIsSearch(false);
      console.log(searchItem);
    }
  };
  const displayResults = (e) => {
    if (e !== "") {
      return (
        <div>
          <div className="search-Name">
            Results of "<b>{e}</b>" ,
          </div>
          <div className="facilities-content">
            <img
              src={imgNotAvailable}
              alt="sports related"
              className="facility-image"
            />
            <div className="figure-Name">Football</div>
            <div className="fig-description">
              aut sit reiciendis quod. Deleniti amet optio, unde quibusdam totam
              voluptas nobis dolores aspernatur. Sint quis sapiente est, unde
              vel eum? Provident, dolores. Vel incidunt rem eaque iste nemo
              itaque. Cumque rem hic earum.
            </div>
          </div>
        </div>
      );
    }
  };
  return (
    <div className="user-facilities-main">
      <div className="search-main">
        <input
          type="search"
          name="searchBox"
          id="Search-Box"
          onChange={handleOnchange}
          placeholder=" Search Here"
        />
        <button className="Search-Icon-box">
          <Search />
        </button>
      </div>
      {isSearch ? (
        displayResults(searchFacility)
      ) : (
        <div className="facilities-details">
          <div className="facilities-content">
            <img
              src={imgNotAvailable}
              alt="sports related"
              className="facility-image"
            />
            <div className="figure-Name">Football</div>
            <div className="fig-description">
              aut sit reiciendis quod. Deleniti amet optio, unde quibusdam totam
              voluptas nobis dolores aspernatur. Sint quis sapiente est, unde
              vel eum? Provident, dolores. Vel incidunt rem eaque iste nemo
              itaque. Cumque rem hic earum.
            </div>
          </div>

          <div className="facilities-content">
            <img
              src={imgNotAvailable}
              alt="sports related"
              className="facility-image"
            />
            <div className="figure-Name">Football</div>
            <div className="fig-description">
              aut sit reiciendis quod. Deleniti amet optio, unde quibusdam totam
              voluptas nobis dolores aspernatur. Sint quis sapiente est, unde
              vel eum? Provident, dolores. Vel incidunt rem eaque iste nemo
              itaque. Cumque rem hic earum.
            </div>
          </div>

          <div className="facilities-content">
            <img
              src={imgNotAvailable}
              alt="sports related"
              className="facility-image"
            />
            <div className="figure-Name">Football</div>
            <div className="fig-description">
              aut sit reiciendis quod. Deleniti amet optio, unde quibusdam totam
              voluptas nobis dolores aspernatur. Sint quis sapiente est, unde
              vel eum? Provident, dolores. Vel incidunt rem eaque iste nemo
              itaque. Cumque rem hic earum.
            </div>
          </div>

          <div className="facilities-content">
            <img
              src={imgNotAvailable}
              alt="sports related"
              className="facility-image"
            />
            <div className="figure-Name">Football</div>
            <div className="fig-description">
              aut sit reiciendis quod. Deleniti amet optio, unde quibusdam totam
              voluptas nobis dolores aspernatur. Sint quis sapiente est, unde
              vel eum? Provident, dolores. Vel incidunt rem eaque iste nemo
              itaque. Cumque rem hic earum.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Facilities;
