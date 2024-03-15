import { Link } from "react-router-dom"
import icon1 from "../assets/icon1.png"
import fight1 from "../assets/fight1.jpeg"
import fight2 from "../assets/fight2.jpg"
import fight3 from "../assets/fight3.jpg"
import fight4 from "../assets/fight4.jpg"
import fight5 from "../assets/fight5.jpg"
import icon2 from "../assets/icon2.png"
import Header from "./header"
import gife from "../assets/map.webp"

function Home() {
    return (
        <div className=" bg-stone-300 h-screen">

            {/* <nav className=" flex justify-center p-5 bg-stone-300">
                <img src={icon1} alt="img.png" className=" " />
                <ul className=" flex">
                    <li>
                        <Link to="/home" className=" mx-4 text-black"><button className=" rounded-full bg-neutral-300 hover:bg-gray-600 hover:text-white hover:border-black">HOME</button></Link>
                    </li>
                    <li>
                        <Link to="/alerts" className=" mx-4 text-black"><button className=" rounded-full bg-neutral-300 hover:bg-gray-600 hover:text-white hover:border-black">ALERTS</button></Link>
                    </li>
                    <li>
                        <Link to="/history" className=" mx-4 text-black"><button className=" rounded-full bg-neutral-300 hover:bg-gray-600 hover:text-white hover:border-black">HISTORY</button></Link>
                    </li>
                </ul>
            </nav> */}
            <Header />
            <div className="mb-0">
                <div>
                    <h1 className="text-4xl font-bold text-center text-gray-800">Welcome to the Dashboard!</h1>
                    <h2 className="text-center text-3x1 text-gray-800 ">Violence is a punishable CRIME</h2>
                </div>
                {/* <div className="flex justify-center bg-stone-300">
                    {[fight1, fight3, fight5, fight4, fight2].map((image, index) => (
                        <img key={index} src={image} alt={`fight${index + 1}.png`} className="w-1/5 mx-1/3" /> // Adjust width and margin as needed
                    ))}
                </div> */}
                <div>
                <img src={gife} alt="gg" className=" object-contain width-[1024px]" />

                </div>
                
                <div>
                    <p>
                        <h2 className="text-4xl text-center text-gray-800">Violence is the last refuge of the incompetent.</h2>
                        <h3 className="text-1xl text-center text-gray-800">             ~Isaac Asimov</h3>
                    </p>
                </div>
                <footer className=" flex justify-between items-center px-8 bg-gray-700 mt-14">
                    <div className=" flex items-center">
                        <div>
                            <img src={icon2} alt="icon2.png" className=" h-20 w-20" />
                        </div>
                        <div className=" ml-2">
                            <h3>Made by BlackPerl</h3>
                        </div>
                    </div>
                    <div className=" text-center">
                        <h3>Copyright &#169;TeamBP</h3>
                    </div>
                </footer>
            </div >
        </div>
    )
}

export default Home
