import { Outlet } from "react-router"
import Footer from "../home/footer/Footer"
import Header from "../home/header/Header"
import { useState } from "react";


export default function Layout() {
    const [searchState, setSearchState] = useState("");


    return (<>
        <Header searchState={searchState} setSearchState={setSearchState} />
        <Outlet />
        <Footer />
    </>)
}