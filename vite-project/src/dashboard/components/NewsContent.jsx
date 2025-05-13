import React from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

const NewsContent = () => {

    return (
        <div>

            <div className="px-4 py-3 flex gap-x-3">
                <select name="" className="px-3 py-2 rounded-md outline 0 border border-gray-400 focus:border-green-500 h-10" id="">
                    <option value="">Select Type</option>
                    <option value="active">Active</option>
                    <option value="pending">Pending</option>
                    <option value="deactive">Deactive</option>
                </select>
                <input type="text" placeholder="Search News" className="px-3 py-2 rounded-md border outline-0 border-gray-300 focus:border-green-500 h-10" />
            </div>
            <div className="relative overflow-x-auto p-4">
                <table className="w-full text-sm text-legt text-slate-700">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th className="px- py-3">no</th>
                            <th className="px- py-3">Title</th>
                            <th className="px- py-3">Image</th>
                            <th className="px- py-3">Category</th>
                            <th className="px- py-3">Description</th>
                            <th className="px- py-3">Date</th>
                            <th className="px- py-3">Status</th>
                            <th className="px- py-3">Date</th>
                            <th className="px- py-3">Active</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b">
                            <td className="px=6 py-4">1</td>
                            <td className="px=6 py-4">Eu amo muito minha namorada</td>
                            <td className="px=6 py-4"><img className="w-[40] h-[40]" src="../../assets/namoro.jpg" alt="imagem fofa" /></td>
                            <td className="px=6 py-4">Relationship</td>
                            <td className="px=6 py-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus ipsa dolor ab quidem facilis amet, quia asperiores! Veniam quam deserunt, veritatis expedita nesciunt reiciendis neque tenetur voluptatum, asperiores molestias architecto!</td>
                            <td className="px=6 py-4">17 de Junho de 2025</td>
                            <td className="px=6 py-4">
                                <span className="px-2 py-[2px] bg-green-100 text-green-800 rounded-lg text-xs cursor-pointer">Active</span>
                            </td>
                            <td className="px=6 py-4">
                                <div className="flex justify-start items-center gap-x-4 text-white">
                                    <Link className="p-[6] bg-green-600 rounded hover:shadow-lg hover: shadow-green-500"><FaEye /></Link>
                                    <Link className="p-[6] bg-yellow-600 rounded hover:shadow-lg hover: shadow-yellow-500"><FaEdit /></Link>
                                    <div className="p-[6] bg-red-600 rounded hover:shadow-lg hover: shadow-red-500"> <FaTrash /></div>

                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
}
export default NewsContent