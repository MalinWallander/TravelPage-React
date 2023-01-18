import { useState } from "react";
import hotels from "../../../assets/hotels.json";
import Hotel from "./Hotel";
import "./Hotels.css";

const Hotels = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="popularHotels">
      <div className="hotelHeader">
        <h2 className="title">Hotels</h2>
        <button
          className="buttonMore"
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          <div className="labelButton">
            {expanded ? "View less" : "View more"}
          </div>
          <img src="../Images/Group.png" alt="" />
        </button>
      </div>
      <div className="hotelsContainer">
        {hotels.slice(0, expanded ? 8 : 4).map((hotel) => {
          return (
            <Hotel
              key={hotel.nameHotel}
              nameHotel={hotel.nameHotel}
              city={hotel.cityName}
              country={hotel.countryName}
              imgPath={hotel.imgPath}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Hotels;
