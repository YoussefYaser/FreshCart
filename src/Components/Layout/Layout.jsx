import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import './Layout.css'



export default function Layout() {
    return (
        <>
            {/* <div className="dark-mode position-fixed top-0 w-100 h-100"></div> */}
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}
