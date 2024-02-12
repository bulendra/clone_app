import React from "react";
import image from './assets/image-removebg-preview.png'
function Nav(){
    return(
        <>
        <div className="nav-bar serif text-[18px] font-[400] text-white  flex justify-between py-6 px-5 ">
            <div className="left-nav flex gap-[110px]">
                <div className="logo-text   flex gap-1">
                    <img src={image} className="rounded bg-white bg-origin-border h-[32px] w-[31px]" alt="" />
                    <h1 className="font-bold text-xl">OpenAI</h1>
                </div>
                <div className="links  hidden md:flex gap-9">
                    <a href="" className="hover:underline">Research</a>
                    <a href="" className="hover:underline">API</a>
                    <a href="" className="hover:underline">ChatGPT</a>
                    <a href="" className="hover:underline">Saftey</a>
                    <a href="" className="hover:underline">Company</a></div>
            </div>
            <div className="menu md:hidden"><a href="">Menu</a></div>
            <div className="right-nav hidden md:flex gap-9">
                <a href="" className="hover:underline">Search</a>
                <a href="" className="hover:underline">Log in</a>
                <a href="" className="border-[1px] rounded-sm hover:bg-white hover:text-black px-2"><button>Try ChatGPT</button></a>
            </div>
        </div>

        </>
    );
}
export default Nav;