import Sidebar from "../../Components/Sidebar";


const Home = () => {
    return (
        <div className="bg-[#252331] w-full min-h-screen">
            <div className="container mx-auto">
                <div className="max-w-80 bg-[#111] h-screen">
                    <Sidebar/>
                </div>
            </div>
        </div>
    );
};

export default Home;