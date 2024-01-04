import { FaMessage } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import UserProfile from "./UserProfile";

const Sidebar = ({setShow}) => {
    return (
        <div className="">
          <div className="sticky">
          <div className="flex justify-between items-center px-3 pt-4 pb-3">
            <p className="text-base p-3 rounded-full justify-centern text-white inline-block text-center bg-[#17B67C]"><FaMessage/></p>
            <h1 className="text-2xl text-white font-semibold">Chat</h1>
            <p className="bg-[#252331] p-2 cursor-pointer text-lg rounded-sm text-white"><IoMdNotifications/></p>
            </div>
            <div className="my-2 relative px-3">
                <input type="text" className="w-full rounded-sm py-2.5 pl-3 text-white font-medium bg-[#252331] focus:outline-none" placeholder="Search here..." />
                <span className="absolute text-gray-600 right-6 top-2 border-l border-gray-600 pl-2 py-1 text-xl" ><FaSearch/></span>
            </div>
          </div>
            <div className="px-3 h-[calc(100vh-140px)] overflow-y-scroll bg-[#111] border-t space-y-2 border-gray-500 pt-2">
                <div onClick={()=>setShow(true)}><UserProfile/></div>
                <UserProfile/>
                <UserProfile/>
                <UserProfile/>
                <UserProfile/>
                <UserProfile/>
                <UserProfile/>
                <UserProfile/>
                <UserProfile/>
            </div>
        </div>
    );
};

export default Sidebar;