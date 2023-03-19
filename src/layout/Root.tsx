import { Outlet } from "react-router-dom";
import Topbar from "../components/Topbar";
function Root() {
  return (
    <div className="h-full flex flex-col">
      <Topbar />
      <div className="container flex flex-col mx-auto h-full">
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
