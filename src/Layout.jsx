import { Outlet } from "react-router-dom";
import Header from "./Partials/Header/Header";
import SideBar from "./Partials/Sidebar/SideBar";

export default function Layout() {
    return (
      <div>
        <Header />
        <SideBar />
        <Outlet />
      </div>
    );
}
