import { useState } from "react";
import RigttSidebar from "../../Components/RigttSidebar";
import Sidebar from "../../Components/Sidebar";


const Home = () => {
    const [show,setShow] = useState(false)
    return (
        <div className="bg-[#252331] w-full min-h-screen text-white">
            <div className="container mx-auto flex">
                <div className={show === true ? "hidden md:block" : "md:max-w-80 w-full bg-[#111] h-screen"}>
                    <Sidebar setShow={setShow} />
                </div>
                <div className={show === true ? 'block' : show === false ? 'hidden md:block md:w-full' : 'flex-1'}>
                    <RigttSidebar setShow={setShow} />
                </div>
            </div>
        </div>
    );
};

export default Home;