import "./HotelPage.css";
import hotels from "../../assets/hotels.json";
import { useParams } from "react-router-dom";

const HotelPage = () => {
  const params = useParams();
  const city = params.city;
  const country = params.country;
  const nameHotel = params.nameHotel;

  const hotelObject = hotels.filter(
    (hotel) => nameHotel === hotel.nameHotel && city === hotel.cityName
  )[0];
  const imgPath = "../../" + hotelObject.imgPath;
  const infoHotel = hotelObject.info;

  return (
    <div className="page">
      <img className="imgHotelPage" src={imgPath} alt="Hotel" />
      <div className="boxHotelPage">
        <div className="infoHotelPage">
          <div className="hotelNameHotelPage">{nameHotel}</div>
          <div className="cityCountryHotelPage">
            {city}, {country}
          </div>
        </div>
        <div className="infoHotelHotelPage">{infoHotel}</div>
        <button className="buttonBookNow">Book now</button>
      </div>
    </div>
  );
};

export default HotelPage;
