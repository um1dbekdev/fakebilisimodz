import { useState } from "react"



const Left =  () =>{
    const [open,setOpen] = useState(false)

    return(
<div className="flex items-center justify-between mr-[10px] mt-[30px] gap-[155px]">
<div className="w-[35%] bg-[#F4F4F4] rounded-[50px] flex items-center  pr-[13px] pb-[2px] h-[47px]">
           <div className="flex justify-between items-center w-[100%]">
            <h1 className={`cursor-pointer relative z-10  ml-[50px] ${!open ? 'text-[grey]' : 'text-[black]'}`} onClick={()=>setOpen(true)}>Yetkazib berish</h1>
            <h1 className={`cursor-pointer relative z-10 mr-[50px] ${!open ? 'text-[black]' : 'text-[grey]'}`} onClick={()=>setOpen(false)}>Olib ketish</h1>
            <div className={`bg-[white] w-[200px] rounded-[50px] mt-[2px] duration-200  absolute h-[40px] ${!open ? 'translate-x-[321px]' : 'translate-x-[2px]'}`}>
            </div>
           </div>
        </div>
    
    <div className="bg-[#ffc8001c] justify-between border-[#ffc600] border border-solid h-[40px] pr-[15px] text-[#ffba25] flex items-center rounded-[10px] pl-[25px] p-[20px]  w-[50%]">
    {!open ? <h1>Filialni tanlang</h1> : <h1>Yetkazib berish manzilini tanlang</h1>} <img src="/krd.svg" alt="eror 404 sorry" />
    </div>

</div>
    )
}

export default Left