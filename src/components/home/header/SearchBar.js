import SuggestionBar from './SuggestionBar'

import './SearchBar.css'

import { HiOutlineLocationMarker } from 'react-icons/hi'
import { RiCalendarEventFill } from 'react-icons/ri'
import { RiSearchLine } from 'react-icons/ri'
import { MdOutlinePeopleAlt } from 'react-icons/md'

export default function SearchBar({ searchState, setSearchState }) {

    const today = new Date();
    const todayISO = today.toISOString().substring(0, 10);

    return (
        <div className="search-bar-wrapper">
            <div className="search-bar">
                <div className="destination input-field">
                    <HiOutlineLocationMarker className='icon' />
                    <div className="text-container">
                        <label htmlFor="location">Location</label>
                        <input onChange={(e) => setSearchState(e.target.value)} className='input-text' type="text" name="location" value={searchState} placeholder='Search by Location' />
                    </div>
                </div>
                <div className="date input-field">
                    <RiCalendarEventFill className='icon' />
                    <div className="text-container">
                        <label htmlFor="date">When</label>
                        <input className='input-text' type="date" name="date" defaultValue={todayISO} />
                    </div>
                </div>
                <div className="guests input-field">
                    <MdOutlinePeopleAlt className='icon' />
                    <div className="text-container">
                        <label htmlFor="guests">Guests</label>
                        <div className="input-text">
                            <input className='input-text' type="number" name="guests" defaultValue="1" />
                        </div>
                    </div>
                </div>

                <button className='search-button'><RiSearchLine /></button>
            </div>


            {searchState.length > 0 && <SuggestionBar searchState={searchState} setSearchState={setSearchState} />}
        </div>
    )

}