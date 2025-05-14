import React from "react";
import { Link } from "react-router-dom";
import business from "../../assets/Business.png"
import { FaEye } from "react-icons/fa";

const Writers = ()=> {

    return(

        <div className="bg-white rounded-md">
            <div className="flex justify-between p-4">
                <h2 className="text-x1 font-medium">Add Writer</h2>
                <Link className="px-3 py-[6px] bg-purple-700 rounded-sm text-white hover:bg-purple-500 " to='/dashboard/writer/add'>Add Writer</Link>
            </div>
  <div className="relative overflow-x-auto p-4">
                 <table className="w-full text-sm text-leght text-slate-700">
                     <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                         <tr>
                             <th className="px-7 py-3">No</th>
                             <th className="px-7 py-3">Name</th>
                             <th className="px-7 py-3">Category</th>
                             <th className="px-7 py-3">Role</th>
                             <th className="px-7 py-3">Image</th>
                             <th className="px-7 py-3">Email</th>
                             <th className="px-7 py-3">Status</th>
                            
                         </tr>
                     </thead>
                     
                     <tbody>
                         {
                         [1,2,3,4,5,6,7].map((n,i) => <tr key={i} className="bg-white border-b">
                         <td className="p-6 py-4">{i+1}</td>
                         <td className="px-6 py-4">Murilo Fuzikawa </td>
                         <td className="px-6 py-4">Business</td>
                         <td className="px-6 py-4">Writer</td>
                         <td className="px-6 py-4"><img className="w-[40px] h-[40px]" src={business} alt="imagem fofa" /></td>
                         <td className="px-6 py-4">123456@gmail.com</td>
                         <td className="px-6 py-4">
                             <span className="px-2 py-[2px] bg-green-100 text-green-800 rounded-lg text-xs cursor-pointer">Active</span>
                         </td>
                         <td className="px-6 py-4">
                             <div className="flex justify-start items-center gap-x-4 text-white">
                                 <Link className="p-[6px] bg-green-600 rounded hover:shadow-lg hover: shadow-green-500"><FaEye /></Link>
                             </div>
                         </td>
                     </tr>)
                         }
                     </tbody>
                 </table>
             </div>

        </div>
    
    )
}
export default Writers