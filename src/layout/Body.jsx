import { Outlet } from "react-router-dom";
import '../App.css';
import Footer from "../layout/Footer";
import Header from "../layout/Header";

export default function Body() {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  );
}
