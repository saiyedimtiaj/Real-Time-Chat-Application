import { FaMessage } from "react-icons/fa6";
import { MdOutlineEmail, MdLockOpen  } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="bg-[#252331] text-white w-full h-screen">
            <div className="max-w-md pt-5 px-4 mx-auto">
                <div className="flex justify-center">
                <p className="text-3xl p-6 rounded-full justify-center inline-block text-center bg-[#17B67C]"><FaMessage/></p>
                </div>
                <h1 className="text-2xl font-bold text-center my-3">Chat Room</h1>
                <p className="mt-4 mb-2 text-center" >Login Your Account</p>
                <form>
                    <div className="w-full relative mt-4">
                        <input type="email" name="email" placeholder="Email Address" className="w-full bg-[#1B1927] py-2.5 pl-10 border border-[#697892] text-lg"/>
                        <span className="absolute left-2.5 text-[22px] text-[#697892] top-[15px]" ><MdOutlineEmail/></span>
                    </div>
                    <div className="w-full relative mt-3">
                        <input type="password" name="password" placeholder="Password" className="w-full bg-[#1B1927] py-2.5 pl-10 border border-[#697892] text-lg"/>
                        <span className="absolute left-2.5 text-[22px] text-[#697892] top-[15px]" ><MdLockOpen /></span>
                    </div>
                    <input type="submit" className="bg-[#17B67C] text-white py-3 w-full rounded-md mt-4 cursor-pointer text-lg font-medium" />
                </form>
                <p className="my-3 text-center" >or continue with</p>
                <button className="bg-[#1B1927] flex items-center justify-center gap-2 text-white py-3 w-full rounded-md mt-4 cursor-pointer text-lg font-medium" ><FcGoogle className="text-xl" />Google</button>
                <p className="mt-3 text-center" >Don't have an account?<Link className="text-red-400 ml-1" to='/register'>Sign Up</Link></p>
            </div>
        </div>
    );
};

export default Login;