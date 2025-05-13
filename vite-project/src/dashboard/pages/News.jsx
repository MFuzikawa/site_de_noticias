import React from "react";
import { Link } from "react-router-dom";
import NewsContent from "../components/NewsContent";

const News = ()=>{

    const userInfo = {
        role : "admin"
    }

    return(
        <div className="bg-white rounded-md">
            <div className=" flex justify-between p-4">
                <h2 className="text-x1 font-medium">News</h2>
                {
                    userInfo.role ==='admin' &&
                <Link className="px-3 py-[6px] bg-purple-700 rounded-sm text-white hover:bg-purple-500 " to='/dashboard/news/create'>Create News</Link>
                }
            </div>

        </div>
    )
}
export default News