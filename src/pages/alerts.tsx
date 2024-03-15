import {useState , useEffect}from 'react'
import axios from 'axios'

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

    const [alert,setAlert] =useState([])
  useEffect(()=>{
    const fetchAllAlert = async ()=>{
      try{
        const res = await axios.get("http://localhost:8800/albums")
        setAlert(res.data)
      }catch(err){
        console.log(err)
      }
    }
    fetchAllAlert()
  },[])

  return (
    <div>
        {alert.map((al)=>{
          return(
            <div className="alert alert-success">
            </div>
          )
        })}
      <h1>Select Your Area</h1>
    </div>
  )
}

export default Alerts
