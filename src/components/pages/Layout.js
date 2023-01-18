import { Outlet } from "react-router";
import Footer from "../home/footer/Footer";

export default function Layout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}
