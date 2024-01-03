import { IoCall } from "react-icons/io5";
import { FaVideo,FaExclamationCircle  } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
const RigttSidebar = () => {
  return (
    <div>
      <div className="py-4 border-b border-white flex items-center px-5 justify-between">
        <div className="flex items-center gap-2">
          <img
            className="w-10 bg-cover border-2 border-white rounded-full h-10"
            src="./profile.png"
            alt=""
          />
          <h1 className="text-lg font-semibold">Rofiqul Islam</h1>
        </div>
        <div className="flex gap-3">
            <span className="text-xl text-blue-600 cursor-pointer"><IoCall/></span>
            <span className="text-xl text-blue-600 cursor-pointer"><FaVideo/></span>
            <span className="text-xl text-blue-600 cursor-pointer"><FaExclamationCircle/></span>
        </div>
      </div>
      {/* message start */}
      <div className="h-[calc(100vh-136.67px)] px-4">
        sytfref
      </div>
      {/* message end */}

        <div className="w-full px-4 pb-4 relative">
            <input type="text" className="w-full bg-black rounded-lg focus:outline-none py-3 pr-16 pl-5" placeholder="Write your message...." />
            <button className="bg-[#199f6e] absolute right-8 top-2 text-white p-2 rounded"><BsFillSendFill/></button>
        </div>
    </div>
  );
};

export default RigttSidebar;
