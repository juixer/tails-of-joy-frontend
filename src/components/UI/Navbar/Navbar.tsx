import Image from "next/image";
import Link from "next/link";
import { FaBars, FaUser } from "react-icons/fa";
import {
  FaCircleInfo,
  FaFileContract,
  FaHeadset,
  FaHouse,
} from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="drawer lg:drawer-open z-50">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-start justify-start p-1">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn drawer-button lg:hidden bg-black bg-opacity-30"
        >
          <FaBars />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu border-r-2 lg:bg-white bg-base-200 bg-opacity-80 text-base-content min-h-full w-80 p-4">
          <div className="my-2">
            <h1 className="text-2xl font-bold text-center">Tails of Joy</h1>
          </div>
          <div className="flex flex-col gap-2 min-h-[calc(100vh-25vh)]">
            <Link href={"/"}>
              <h1 className="flex items-center gap-2 text-xl font-medium hover:bg-black p-2 rounded-md hover:bg-opacity-30 duration-300">
                <FaHouse />
                Home
              </h1>
            </Link>
           
            {/* user */}
            <div className="dropdown dropdown-hover">
              <div
                tabIndex={0}
                role="button"
                className="flex items-center gap-2 text-xl font-medium hover:bg-black p-2 rounded-md hover:bg-opacity-30 duration-300"
              >
                <FaFileContract />
                Dashboard
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li>
                  <Link href={"/dashboard/posts"}>My Posts</Link>
                </li>
                <li>
                  <Link href={"/dashboard/followed"}>Followed</Link>
                </li>
                <li>
                  <Link href={"/dashboard/followers"}>Followers</Link>
                </li>
              </ul>
            </div>
            {/* admin */}
            {/* <div className="dropdown dropdown-hover">
              <div
                tabIndex={0}
                role="button"
                className="flex items-center gap-2 text-xl font-medium hover:bg-black p-2 rounded-md hover:bg-opacity-30 duration-300"
              >
                <FaFileContract />
                Dashboard
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li>
                  <Link href={"/dashboard/contents"}>Contents</Link>
                </li>
                <li>
                  <Link href={"/dashboard/users"}>Users</Link>
                </li>
                <li>
                  <Link href={"/dashboard/payment"}>Payments</Link>
                </li>
              </ul>
            </div> */}
            <Link href={"/profile"}>
              <h1 className="flex items-center gap-2 text-xl font-medium hover:bg-black p-2 rounded-md hover:bg-opacity-30 duration-300">
                <FaUser />
                Profile
              </h1>
            </Link>
            <Link href={"/about"}>
              <h1 className="flex items-center gap-2 text-xl font-medium hover:bg-black p-2 rounded-md hover:bg-opacity-30 duration-300">
                <FaCircleInfo />
                About Us
              </h1>
            </Link>
            <Link href={"/contact"}>
              <h1 className="flex items-center gap-2 text-xl font-medium hover:bg-black p-2 rounded-md hover:bg-opacity-30 duration-300">
                <FaHeadset />
                Contact Us
              </h1>
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-1">
              <div>
                <Image
                  width={50}
                  height={50}
                  alt="user pic"
                  src={"https://i.ibb.co.com/Xjjd68g/default-user.jpg"}
                />
              </div>
              <div>
                <h1 className="font-bold text-lg">Ashfakul Islam</h1>
                <h1>Shantoking3@gmail.com</h1>
              </div>
            </div>
            <div>
              <button className="flex items-center gap-2 text-xl font-medium p-2 rounded-md bg-red-500 hover:bg-red-800 text-white duration-300 w-full btn">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
