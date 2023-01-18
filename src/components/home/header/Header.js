import './Header.css'
import NavMenu from './NavMenu'
import SearchBar from './SearchBar'

export default function Header({ searchState, setSearchState }) {

    return (
        <header className='header'>
            <div className="top-div">
                <NavMenu></NavMenu>

            </div>
            <h1>Discover the most engaging places</h1>
            <SearchBar searchState={searchState} setSearchState={setSearchState} />
        </header>
    )
}