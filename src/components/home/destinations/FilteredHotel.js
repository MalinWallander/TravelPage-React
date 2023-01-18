const FilteredHotel = ({ imgPath, nameHotel }) => {
  return (
    <div className="hotelBoxCityPage">
      <img className="imageHotelCityPage" src={imgPath} alt="hotel" />
      <div className="hotelInfoCityPage">
        <div className="nameHotelCityPage">{nameHotel}</div>
      </div>
    </div>
  );
};

export default FilteredHotel;
