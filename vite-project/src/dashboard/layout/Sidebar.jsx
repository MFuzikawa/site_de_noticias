import React from 'react';
import { HashRouter as Router, Link, useLocation } from 'react-router-dom'; 
import { AiFillDashboard, AiOutlinePlus } from 'react-icons/ai'; 
import { BiNews } from 'react-icons/bi';
import { ImProfile } from 'react-icons/im';
import { FiUser } from 'react-icons/fi';
import { FaPlus } from 'react-icons/fa';



const Sidebar = () => {
  const { pathname } = useLocation();
  const userInfo = {
    role: 'writer', 
  };

  return (
    <div className="w-[250px] h-screen fixed left-0 top-0 bg-blue-50 shadow-lg">
      <div className="h-[70px] flex justify-center items-center border-b border-gray-200">
        <Link to="/" className="text-2xl font-bold text-indigo-900">
          MySite
        </Link>
      </div>

      <ul className="px-3 flex flex-col gap-y-3 font-medium py-4">
        {userInfo.role === 'admin' ? (
          <>
            <li>
              <Link
                to="/dashboard/admin"
                className={`px-3 ${
                  pathname === '/dashboard/admin' ? 'bg-indigo-900 text-white' : 'bg-white text-indigo-900'
                } py-2 hover:shadow-lg hover:shadow-indigo-400 w-full rounded-md flex justify-start items-center gap-x-2 transition-all duration-200`}
              >
                <span className="text-xl">
                  <AiFillDashboard />
                </span>
                <span>Dashboard</span>
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard/writer/add"
                className={`px-3 ${
                  pathname === '/dashboard/writer/add' ? 'bg-indigo-900 text-white' : 'bg-white text-indigo-900'
                } py-2 hover:shadow-lg hover:shadow-indigo-400 w-full rounded-md flex gap-x-2 justify-start items-center transition-all duration-200`}
              >
                <span className="text-xl">
                  <AiOutlinePlus />
                </span>
                <span>Add Writer</span>
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard/writers"
                className={`px-3 ${
                  pathname === '/dashboard/writers' ? 'bg-indigo-900 text-white' : 'bg-white text-indigo-900'
                } py-2 hover:shadow-lg hover:shadow-indigo-400 w-full rounded-md flex gap-x-2 justify-start items-center transition-all duration-200`}
              >
                <span className="text-xl">
                  <FiUser />
                </span>
                <span>Writers</span>
              </Link>
            </li>
          </>
        ) : (
          <>
                      <li>
              <Link
                to="/dashboard/writer"
                className={`px-3 ${
                  pathname === '/dashboard/writer' ? 'bg-indigo-900 text-white' : 'bg-white text-indigo-900'
                } py-2 hover:shadow-lg hover:shadow-indigo-400 w-full rounded-md flex justify-start items-center gap-x-2 transition-all duration-200`}
              >
                <span className="text-xl">
                  <AiFillDashboard />
                </span>
                <span>Dashboard</span>
              </Link>
            </li>

                  <li>
          <Link
            to="/dashboard/news/create"
            className={`px-3 ${
              pathname === '/dashboard/news/create' ? 'bg-indigo-900 text-white' : 'bg-white text-indigo-900'
            } py-2 hover:shadow-lg hover:shadow-indigo-400 w-full rounded-md flex gap-x-2 justify-start items-center transition-all duration-200`}
          >
            <span className="text-xl">
              <FaPlus />
            </span>
            <span>Add News</span>
          </Link>
        </li>
          </>
        )}

        <li>
          <Link
            to="/dashboard/news"
            className={`px-3 ${
              pathname === '/dashboard/news' ? 'bg-indigo-900 text-white' : 'bg-white text-indigo-900'
            } py-2 hover:shadow-lg hover:shadow-indigo-400 w-full rounded-md flex gap-x-2 justify-start items-center transition-all duration-200`}
          >
            <span className="text-xl">
              <BiNews />
            </span>
            <span>News</span>
          </Link>
        </li>

        <li>
          <Link
            to="/dashboard/profile"
            className={`px-3 ${
              pathname === '/dashboard/profile' ? 'bg-indigo-900 text-white' : 'bg-white text-indigo-900'
            } py-2 hover:shadow-lg hover:shadow-indigo-400 w-full rounded-md flex gap-x-2 justify-start items-center transition-all duration-200`}
          >
            <span className="text-xl">
              <ImProfile />
            </span>
            <span>Profile</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar; // Exporting App as the default component
