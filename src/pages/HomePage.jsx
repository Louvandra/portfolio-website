import HeroImage from "../assets/images/profil.jpeg";
import AboutImage from "../assets/images/profil2.jpeg";
import Proyek4 from "../assets/images/proyek-4.webp";
import { db } from "../firebase";
import { uid } from "uid";
import { set, ref, onValue, remove, update } from "firebase/database";
import { useState, useEffect } from "react";

export const HomePage = () => {
  
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [tempUuid, setTempUuid] = useState("");
  
  const handleSkillChange = (e) => {
    setSkill(e.target.value);
    };
  
    //read
    useEffect(() => {
      onValue(ref(db), (snapshot) => {
          setSkills([]);
          const data = snapshot.val();
          if (data !== null) {
              Object.values(data).map((skill) => {
                  setSkills((oldArray) => [...oldArray, skill]);
              });
          }
      });
  }, []);
  
    //write
    const writeToDatabase = () => {
      const uuid = uid();
      set(ref(db, `/${uuid}`), {
          skill,
          uuid,
      });

      setSkill("");
  };
  
    //update
    const handleUpdate = (skill) => {
      setIsEdit(true);
      setTempUuid(skill.uuid);
      setSkill(skill.skill);
  };

  const handleSubmitChange = () => {
      update(ref(db, `/${tempUuid}`), {
          skill,
          uuid: tempUuid,
      });

      setSkill("");
      setIsEdit(false);
  };

  // Delete skill
  const handleDelete = (skill) => {
      remove(ref(db, `/${skill.uuid}`));
  };
  return (
    <div className="homepage pb-10">
      <div className="container mx-auto px-4">
        <div className="hero grid md:grid-cols-2 grid-cols-1 items-center md:gap-20 gap-10 pt-32" id="home">
          <div className="box">
          <h1 className="lg:text-5xl/tight font-bold mb-7 ">Hi, I'm Louvandra, </h1>
          <h1 className="lg:text-5xl/tight animate-typing overflow-hidden whitespace-nowrap border-r-4 font-bold mb-7 text-sky-400 ">Frontend Development.</h1>
            <p className="text-base/8 mb-7 font-semibold">seorang Full Stack Developer yang memiliki keahlian mendalam dalam frontend development,
            backend development, serta desain UI/UX. Dalam frontend development . mahir menggunakan teknologi seperti HTML, CSS, JavaScript, dan framework</p>
              <a href="#about" className="bg-sky-400 hover:bg-sky-500 transition-alll py-2 px-4 text-white shadaw rounded-full">Tentang Saya <i className="ri-eye-line ms-1"></i></a> <br></br>
              <br></br></div>
          <div className="box">
            <img src={HeroImage} alt="Hero Image" className="rounded-full  border-8 border-gray-300  md:w-[450px] md:m-0 "/>
          </div>
        </div>
        <div className="about grid md:grid-cols-2 grid-cols-1 items-center md:gap-30 gap-10 mb:pt-20 pt-32" id="about">
          <div className="box md:order-1 order-2  flex justify-center">
          <img src={AboutImage} alt="About Image" className="rounded-full border-8 border-gray-300  w-[450px]  md:m-0 mx-auto"/>
          </div>
          <div className="box md:order-2 order-1">
          <h1 className="lg:text-5xl/tight font-bold mb-7">I'm Louvandra</h1>
          <p className="text-base/loose font-semibold">seorang Full Stack Developer yang memiliki keahlian mendalam dalam frontend development,
            backend development, serta desain UI/UX. Dalam frontend development,
             mahir menggunakan teknologi seperti HTML, CSS, JavaScript, dan framework modern seperti React atau Vue.js untuk menciptakan antarmuka yang responsif dan
             interaktif. Dalam backend development, Saya juga memiliki pemahaman yang baik tentang prinsip-prinsip UI/UX design, 
            memastikan aplikasi yang Anda kembangkan tidak hanya fungsional tetapi juga intuitif dan user-friendly.</p>
          
        
          <div className="social-footer space-x-5">
        <i className="ri-facebook-circle-fill text-5xl"></i>
        <i className="ri-twitter-fill text-5xl"></i>
        <i className="ri-youtube-fill text-5xl"></i>
        <i className="ri-linkedin-box-fill text-5xl"></i>
        <i className="ri-reddit-fill text-5xl"></i>
        </div>
          </div>
          </div>
         

          <div className="services pt-32" id="services">
                    <h1 className="text-center lg:text-5xl/tight text-3xl font-bold mb-2">Skills</h1>
                    <p className="text-center">Berikut adalah daftar keahlian saya:</p>
                    <div className="services-box pt-12 grid md:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                        {skills.map((skill) => (
                            <div key={skill.uuid} className="box bg-gray-300 rounded-lg shadow p-4">
                                <h3 className="text-xl font-bold text-black mt-6 mb-2">{skill.skill}</h3>
                                <button onClick={() => handleUpdate(skill)} className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-1 px-2 rounded">Edit</button>
                                <button onClick={() => handleDelete(skill)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-2">Delete</button>
                            </div>
                        ))}
                    </div>
                </div>
          
        <div className="skill-input pt-12">
                    <input type="text" value={skill} onChange={handleSkillChange} placeholder="Enter a skill" className="border border-gray-400 p-2 rounded" />
                    {isEdit ? (
                        <>
                            <button onClick={handleSubmitChange} className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded ml-2">Submit Change</button>
                            <button
                                onClick={() => {
                                    setIsEdit(false);
                                    setSkill("");
                                }}
                                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded ml-2"
                            >
                                Cancel
                            </button>
                        </>
                    ) : (
                        <button onClick={writeToDatabase} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-2">Add Skill</button>
                    )}
                </div>



        <div className="proyek pt-32" id="proyek">
        <h1 className="text-center lg:text-5xl/tight text-3xl font-bold mb-2">Project</h1>
        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <div className="proyek-box  pt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          <div className="box p-2  bg-gray-300 shadaw">
            <img src={Proyek4} alt="Proyek Image" className="w-fu h-[220px]" />
            <h3 className="text-xl font-bold mt-6 mb-2">Project 1</h3>
            <p className=" text-base/loose">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt debitis nobis, impedit ad voluptates ab!</p>
          </div>
          <div className="box p-2  bg-gray-300 shadaw">
            <img src={Proyek4} alt="Proyek Image" className="w-fu h-[220px]"/>
            <h3 className="text-xl font-bold mt-6 mb-2">Project 2</h3>
            <p className=" text-base/loose">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt debitis nobis, impedit ad voluptates ab!</p>
          </div>
          <div className="box p-2  bg-gray-300 shadaw">
            <img src={Proyek4} alt="Proyek Image" className="w-fu h-[220px]"/>
            <h3 className="text-xl font-bold mt-6 mb-2">Project 3</h3>
            <p className=" text-base/loose">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt debitis nobis, impedit ad voluptates ab!</p>
          </div>
          <div className="box p-2  bg-gray-300 shadaw">
            <img src={Proyek4} alt="Proyek Image" className="w-fu h-[220px]"/>
            <h3 className="text-xl font-bold mt-6 mb-2">Project 4</h3>
            <p className=" text-base/loose">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt debitis nobis, impedit ad voluptates ab!</p>
          </div>
          <div className="box p-2  bg-gray-300 shadaw">
            <img src={Proyek4} alt="Proyek Image" className="w-fu h-[220px]" />
            <h3 className="text-xl font-bold mt-6 mb-2">Project 5</h3>
            <p className=" text-base/loose">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt debitis nobis, impedit ad voluptates ab!</p>
          </div>
          <div className="box p-2  bg-gray-300 shadaw">
            <img src={Proyek4} alt="Proyek Image" className="w-fu h-[220px]" />
            <h3 className="text-xl font-bold mt-6 mb-2">Project 5</h3>
            <p className=" text-base/loose">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt debitis nobis, impedit ad voluptates ab!</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
