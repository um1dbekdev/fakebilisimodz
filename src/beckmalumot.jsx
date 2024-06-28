


import { useState,useEffect} from "react"
import axios from "axios"


const Beck =  () =>{

    const [data,setData] = useState([])


    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then((resu)=> setData(resu.data))    
    },[])

    return(
        <div className="beck grid grid-cols-4 gap-[30px] ml-[50px] mt-[300px] ">
            {
            data.map((value)=>{
                return(
                 <img key={value.id} className="w-[300px]" src={value.url} alt="" />
                )
            })
            }
        </div>    
    )
}


export default Beck
