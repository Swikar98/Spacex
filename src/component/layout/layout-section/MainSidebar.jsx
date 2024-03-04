import { useContext } from 'react'
import { AiOutlineHome, AiOutlineClose } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { FaAngleRight, FaCheck, FaCheckDouble } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { SiHelpscout , SiSinglestore } from "react-icons/si";
import Link from "next/link";
import { MenuContext } from "../../../../context/MenuContext";



const MainSidebar = () => {
    const { open, toggle } = useContext(MenuContext);
  const closesideBarHandler = () =>{
    toggle();
  }
  return (
    <aside
    className={`bg-white top-4 left-4 lg: fixed lg:block lg:top-16 lg:left-8  rounded-lg transition-all duration-200 overflow-hidden ${
      open ? "w-60 p-4 block fixed" : "w-0 hidden"
    } lg:w-60 lg:p-4 shadow-sm  z-50`}
  >
    <ul>
    <li className="flex items-center justify-end lg;hidden">
        <AiOutlineClose onClick={closesideBarHandler}className="text-red-500 hover:text-red-800 cursor-pointer "/>
       
      </li>
      <li className="flex items-center justify-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
        <AiOutlineHome className="mr-2" />
        <Link href="/" onClick={closesideBarHandler}>Home</Link>
      </li>
      <li className="flex items-center justify-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
        <GrProjects className="mr-2" />
        <h3 className="flex-1" onClick={closesideBarHandler}>Projects</h3>
        <FaAngleRight />
      </li>
      <li className="flex flex-col items-start justify-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
        <div className="w-full flex flex-row justify-center items-center">
          <FaCheck className="mr-2" />
          <h3 className="flex-1">Singular</h3>
          <FaAngleRight />
        </div>
        <ul className="ml-8 mt-4">
          <li className="flex justify-center gap-3">
              <SiSinglestore/>
              <Link href="/singular/selectbox"onClick={closesideBarHandler}>Select Box</Link>

          </li>
        </ul>
      </li>
      <li className="flex items-center justify-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
        <FaCheckDouble className="mr-2" />
        <h3 className="flex-1" onClick={closesideBarHandler}>Complex</h3>
        <FaAngleRight />
      </li>
      <li className="flex items-center justify-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
        <SiHelpscout className="mr-2" />
        <Link href="/about" onClick={closesideBarHandler}>About us</Link>
      </li>
      <li className="flex items-center justify-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
        <LuPhoneCall className="mr-2" />
        <Link href="/contactus" onClick={closesideBarHandler}>Contact us</Link>
      </li>
    </ul>
  </aside>
    
  )
}

export default MainSidebar