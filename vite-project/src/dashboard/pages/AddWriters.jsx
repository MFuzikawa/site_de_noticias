import React from "react";
import { Link } from "react-router-dom";

const AddWriters = () => {
    return (
        <div className="bg-white rounded-md">
            <div className="flex justify-between p-4">
                <h2 className="rext-x1 font-medium">Add Writer</h2>
                <Link className="px-3 py-[6px] bg-purple-700 rounded-sm text-white hover:bg-purple-500 " to='/dashboard/writer'>Writer</Link>
            </div>
            <div className="p-4">
                <form>
                    <div className="grid grid-cols-2 gap-x-8 mb-3">
                        <div className="flex flex-col gap-y-2 mb-2">
                            <label className="text-md font-medium text-gray-600" htmlFor="name">Name</label>
                            <input type="text" placeholder="name" name="name" className="px-3 py-2 rounded-md border outline-0 border-gray-300 focus:border-green-500 h-10" id="name" />                        </div>
                        <div className="flex flex-col gap-y-2 mb-2">
                            <label className="text-md font-medium text-gray-600" htmlFor="Category">Category</label>
                            <select name="category" id="category" placeholder="search" className="px-3 py-2 rounded-md border outline-0 border-gray-300 focus:border-green-500 h-10" >
                                <option value="">Select</option>
                                <option value="education">Education</option>
                                <option value="health">Health</option>
                                <option value="travel">Travel</option>
                                <option value="international">International</option>
                                <option value="sports">Sports</option>
                                <option value="technology">Technology</option>
                                <option value="economy">Economy</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-8 mb-3">
                        <div className="flex flex-col gap-y-2 mb-2">
                            <label className="text-md font-medium text-gray-600" htmlFor="email">Email</label>
                            <input type="text" placeholder="name" name="name" className="px-3 py-2 rounded-md border outline-0 border-gray-300 focus:border-green-500 h-10" id="name" />
                        </div>
                        <div className="flex flex-col gap-y-2 mb-2">
                            <label className="text-md font-medium text-gray-600" htmlFor="password">Password</label>
                            <input type="password" placeholder="password" name="password" className="px-3 py-2 rounded-md border outline-0 border-gray-300 focus:border-green-500 h-10" id="password" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <button className="px-3 py-[6px] bg-purple-700 rounded-sm text-white hover:bg-purple-500 " to='/dashboard/writer'>Add Writer</button>
                    </div>

                </form>
            </div>

        </div>
    )
}
export default AddWriters