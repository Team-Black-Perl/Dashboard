import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import fight1 from '../assets/fight1.jpeg'
import Header from './header';

// const DataComponent = () => {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//       fetchData();
//     }, []);

//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://example.com/api/data');
//         const sortedData = response.data.sort((a, b) => {
//           // Assuming 'location' is a string property in your data objects
//           return a.location.localeCompare(b.location);
//         });
//         setData(sortedData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };


const Alerts = () => {

    //     const [alert,setAlert] =useState([])
    //   useEffect(()=>{
    //     const fetchAllAlert = async ()=>{
    //       try{
    //         const res = await axios.get("http://localhost:8800/albums")
    //         setAlert(res.data)
    //       }catch(err){
    //         console.log(err)
    //       }
    //     }
    //     fetchAllAlert()
    //   },[])

    const [isPopupOpen , setIsPopupOpen] = useState(false)


    const handleClick = () =>{
        console.log("div clicked")
        setIsPopupOpen(!isPopupOpen);
        

    }

    return (
        <div className='h-screen flex flex-col'>
            <Header />
            <div className='flex-1 bg-stone-300 mt-4 mb-4 mx-40 rounded-xl'>
                <div className='p-6 flex space-x-20 justify-between'>
                    <div className='p-2 bg-gray-500 flex px-20 hover:cursor-pointer rounded-xl' onClick={handleClick}>
                        <img src={fight1} alt="fight.png" className='w-20 h-20 mr-4 -ml-10' />
                        <div>
                            <h2 className='px-6'>Location: Mumbai</h2>
                            <p>I.P. ADDRESS: 189.09.0801</p>
                        </div>
                    </div>
                    <div className='p-2 bg-gray-500 flex px-20 hover:cursor-pointer rounded-xl'  onClick={handleClick}>
                        <img src={fight1} alt="fight.png" className='w-20 h-20 mr-4 -ml-10' />
                        <div>
                            <h2 className='px-6'>Location: Thane</h2>
                            <p>I.P. ADDRESS: 127.01.02.08</p>
                        </div>
                    </div>
                    {isPopupOpen &&(
                        <div className=" p-10 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex-col items-center justify-center">
                        <div className="bg-white h-[580px] w-[1000px] p-6 flex justify-between space-x-10">
                        <div className=' bg-slate-500 h-[400px] w-[750px]'><h3><a href="https://www.openstreetmap.org/#map=6/22.807/76.069"></a></h3></div>
                        <div className=' flex-col '>
                            <div className=' bg-red-400 h-[190px] w-[400px] mb-5'>B</div>
                            <div className=' bg-red-500 h-[190px] w-[400px]'>C</div>
                        </div>
                        <button className=' mt-auto'>Mark as completed</button>

                        </div>
                        <button onClick={handleClick} className=''>Close</button>

                      </div>
                      
                    )}
                </div>
            </div>
        </div>


    )
}

export default Alerts
