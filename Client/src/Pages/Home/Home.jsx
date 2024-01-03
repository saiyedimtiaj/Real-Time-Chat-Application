import RigttSidebar from "../../Components/RigttSidebar";
import Sidebar from "../../Components/Sidebar";


const Home = () => {
    return (
        <div className="bg-[#252331] w-full min-h-screen text-white">
            <div className="container mx-auto flex">
                <div className="max-w-80 bg-[#111] h-screen">
                    <Sidebar/>
                </div>
                <div className="flex-1">
                    <RigttSidebar/>
                </div>
            </div>
        </div>
    );
};

export default Home;