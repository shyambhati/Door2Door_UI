import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
export default function MainLayout() {
  return (
    <div className="min-h-screen w-full bg-[#e7eaf2] ">
      <Navbar />
      <div className="flex pt-16 min-h-[calc(100vh)]">
        <Sidebar />
        <main
          className="rounded-tl-md ml-64 w-full min-h-[calc(100vh-3.5rem)] p-4"
          style={{ boxShadow: "inset 8px 0px 10px -8px rgba(0,0,0,0.2), inset 0px 8px 10px -8px rgba(0,0,0,0.2)",}}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}