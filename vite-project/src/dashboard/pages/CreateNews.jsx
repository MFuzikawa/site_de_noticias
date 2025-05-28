import React from "react";
import { Link } from "react-router-dom";

const CreateNews = ()=>{
    return(
        <div className="bg-white rounded-md">
            <div className=" flex justify-between p-4">
                <h2 className="text-x1 font-medium">Add News</h2>
                <Link className="px-3 py-[6px] bg-purple-700 rounded-sm text-white hover:bg-purple-500 " to='/dashboard/news'>Add News</Link>
                
            </div>
            <NewsContent />
        </div>
    )
}
export default CreateNews