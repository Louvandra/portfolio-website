import { useState } from "react"


export const Navbar = () => {
    const [show, setShow] = useState(false);
   
   
        const handleClick = () =>{
         setShow(!show);
         console.log(show)
        };

        const handleSkillsClick = () => {
            const isAuthenticated = localStorage.getItem("isAuthenticated");
            if (isAuthenticated === "true") {
              navigate("/skills");
            } else {
              navigate("/login");
            }
          };
          
        let menuActive = show ? "left-0" : "-left-full";

    

  return (
    <div className="bg-gray-400 navbar fixed w-full transition-all py-4">
        <div className="container mx-auto px-4 ">
            <div className="navbar-box flex items-center justify-between">
                <div className="logo">
                    <h1 className="sm:text-2xl text-xl font-bold">Louvandra</h1>
                    </div>
                    <ul className={`flex lg:gap-12 md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-ful md:tanslate-y-0 md:text-black
                      gap-8  fixed ${menuActive} top-1/2 -translate-y-1/2 flex-col px-8 py-6 rounded shadow-lg shadow-slate-300
                      md:p-0 md:m-0 md:transition-none bg-sky-400 font-bold text-white transition-all`}>
             <li className="flex items-center gap-3">
                 <i className="ri-home-2-line text-3xl md:hidden block"></i>
                        <a href="#home" className="font-bold opacity-75">
                            Beranda</a>
                        </li>
                        <li className="flex items-center gap-3">
                        <i className="ri-information-line text-3xl md:hidden block"></i>
                            <a href="#about"  className="font-bold opacity-75">
                            About</a>
                        </li>
                        <li className="flex items-center gap-3">
                        <i className="ri-settings-3-line text-3xl md:hidden block"></i>
                            <a href="#services"  className="font-bold opacity-75">
                                Skills</a>
                        </li>
                        <li className="flex items-center gap-3">
                        <i class="ri-image-line text-3xl md:hidden block"></i>
                            <a href="#proyek"  className="font-bold opacity-75">
                                Project</a>
                        </li>
                    </ul>
                    <div className="social flex items-center gap-2">
                    <a href="#social" className="bg-sky-400 px-5 py-2 rounded-full text-white font-bold hover:bg-sky-500 transition-all">Social Media</a>
                    <i class="ri-menu-3-line text-3-xl md:hidden block cursor-pointer" onClick={handleClick}></i>
                    </div>
                </div>
            </div>
        </div>
  )
}
