import React from "react";
import { Link, useLocation } from 'react-router-dom'
import { AiFillDashboard, AiOutlinePlus } from 'react-icons/ai'
import {BiNews} from 'react-icons/bi'
import { ImProfile} from 'react-icons/im'
import { FiUser } from "react-icons/fi";
import Namoro from "../../assets/Namoro.png"


const Sidebar = () => {

    const { pathname } = useLocation()
    return (
        <div className='w-[250px] h-screen fixed left-0 top-0 bg-blue-50'>
            <div className='h-[70px] flex justify-center items-center'>

                {/* adicionar a logo aqui*/}
                <Link to='/'><img className='w-[170px] h-[35px]' src={Namoro} alt="imagem de namoro" /></Link>

            </div>

            <ul className='px-3 flex flex-col gap-y-3 font-medium '>
                <li>
                    <Link to='/dashboard/admin' className={`px-3 ${pathname === '/dashboard/admin' ? 'bg-indigo-900 text-white' : 'bg-white text-indigo-900'}  py-2 hover:shadow-lg hover:shadow-indigo-400 w-full rounded flex justify-start items-center gap-x-2 hover:bg-indigo-500 hover:text-white`}>
                        <span className='text-x1'><AiFillDashboard /></span>
                        <span>Dashboard</span>
                    </Link>
                </li>

                <li>
                    <Link to='/dashboard/news' className={`px-3 ${pathname === '/dashboard/news' ? 'bg-indigo-900 text-white' : 'bg-white text-indigo-900'}  py-2 hover:shadow-lg hover:shadow-indigo-400 w-full rounded flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
                        <span className='text-x1'><BiNews /></span>
                        <span>News</span>
                    </Link>
                </li>

                <li>
                    <Link to='/dashboard/writer/add' className={`px-3 ${pathname === '/dashboard/writer/add' ? 'bg-indigo-900 text-white' : 'bg-white text-indigo-900'}  py-2 hover:shadow-lg hover:shadow-indigo-400 w-full rounded flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
                        <span className='text-x1'><AiOutlinePlus /></span>
                        <span>Add Writer</span>
                    </Link>
                </li>

                <li>
                    <Link to='/dashboard/writers' className={`px-3 ${pathname === '/dashboard/writers' ? 'bg-indigo-900 text-white' : 'bg-white text-indigo-900'}  py-2 hover:shadow-lg hover:shadow-indigo-400 w-full rounded flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
                        <span className='text-x1'><FiUser /></span>
                        <span>Writers</span>
                    </Link>
                </li>

                <li>
                    <Link to='/dashboard/profile' className={`px-3 ${pathname === '/dashboard/profile' ? 'bg-indigo-900 text-white' : 'bg-white text-indigo-900'}  py-2 hover:shadow-lg hover:shadow-indigo-400 w-full rounded flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
                        <span className='text-x1'><ImProfile /></span>
                        <span>Profile</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
export default Sidebar