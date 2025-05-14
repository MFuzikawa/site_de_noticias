import React from "react";
import profile from "../../assets/profile.png"
import SearchInput from "../components/SearchInput";

const Header = ()=> {
    return(
        <div className="pl-4 fixed w-[calc(100vw-250px)] top-4 z-50"> {/* Corrigi o cálculo da largura */}
            <div className="w-full rounded h-[70px] flex justify-between items-center p-4 bg-white"> {/* Adicionei colchetes em h-70 */}
                <SearchInput />

                <div className="mr-4 flex items-center"> {/* Adicionei flex e items-center */}
                    <div className="flex flex-col justify-center items-end mr-2"> {/* Adicionei mr-2 para espaçamento */}
                        <span>Murilo </span>
                        <span>Admin</span>
                    </div>
                    <img className=' w-10 h-10 rounded-full' src={profile} alt="" />
                </div>
            </div>
        </div>
    )
}
export default Header