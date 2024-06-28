import { useState } from "react"

const Header = () =>{

    const [rve,setRve] = useState(true)
    const [burder,setBurder] = useState(true)

    function change(e){
      if(e.target.classList[0] === 'h'){
        setBurder(true)
      }
    }

    function umid(e){
        if(e.target.classList[0] === 'h'){
            setRve(true)
          }
    }
    return( 
        <div  onClick={change} className={`h  xl:static  absolute top-0  pl-[20px] xl:pr-[10px]  left-0 xl:w-auto duration-500 ease-linear z-10 xl:h-auto l:bg-transparent   ${!burder ? 'bg-[#00000028]  w-[100%] h-[100vh] x' : 'bg-transparent'} `}>
         <div className="ot flex gap-[50px] items-center justify-between mt-[20px]   " >
        <div className="flex items-center gap-[40px]">
            <img src="/logo.webp" className="w-[200px]" alt="eror 404 sorry " />
            <nav className={` fixed xl:static  top-0 right-0 w-[50%] z-[2] ${ !burder ? 'translate-x-[0]' : 'translate-x-[100%]'} xl:translate-x-0 duration-500 ease h-[100vh] bg-[#eeeeee]  xl:flex-row xl:h-auto xl:w-auto xl:bg-transparent  flex items-center flex-col justify-center gap-5 xl:flex xl:items-center xl:gap-[20px]`}>   
                <div className=" items-center gap-[10px]  hidden xl:flex ">
                    <div className="bg-[#006f4c23] w-[50px]   hidden xl:flex justify-center items-center rounded-[4px] h-[50px]">
                        <img src="/location.svg" alt="" />
                    </div>
                    <div className="flex flex-col   ">
                        <span className="ml-[4px] text-[#808080cb] text-[14px]">Shahar:</span>
                        <select className="text-[#006f4c] bg-[transparent] outline-none text-[19px] font-[500]">
                            <option  >Tashkent</option>
                            <option >Urganch</option>
                            <option >Xonka</option>
                        </select>
                    </div>
                </div>
                <div className="  items-center  hidden xl:flex gap-[10px]">
                    <div className="flex gap-[10px] justify-center items-center h-[50px] rounded-[4px] w-[87px] bg-[#006f4c23]">
                        <img src="public\phone.svg" className="w-[20px]" alt="eror 404 sorry" />
                        <span className=" font-700 text-[18px] text-[#006f4c] font-medium">1174</span>
                    </div>
                    <div className="">
                        <p className=" w-[90%] leading-4 text-[#808080cb] text-[14px] text-balance" >Yagona aloqa markazi</p>
                    </div>
                </div>
                <div className=" hidden xl:flex items-center gap-[10px] bg-[white] xl:bg-[#006f4c23] justify-center rounded-[4px] h-[50px]  w-[100%] xl:w-[260px]">
            <h1 className=" font-[700] text-[22px] text-[#006f4c] ">24<span className="font-[100]">/</span>7</h1>
            <span className="w-[150px] text-[12px] text-[#808080e0] leading-[15px]">Bepul yetkazish endi 24/7 mavjud</span>
             </div>

            </nav>
        </div>
    

        <div className="hidden gap-5 xl:flex  items-center">

            <div className=" flex flex-col ">
            
            <div className="flex items-center   gap-2 cursor-pointer" onClick={()=> setRve(!rve)}  >
               <img className="w-[15px]" src="https://cdn.iconscout.com/icon/free/png-256/free-uzbekistan-flag-country-nation-union-empire-33141.png?f=webp" alt="eror 404 sprry" /> 
               Uz
               <img src="public\str.png" alt="eror 404 sorry" className={`w-[8px] mt-[1px] duration-500 ease ${!rve ? "rotate-[180deg]" : "rotate-0"}`} />
            </div>

            <div className={` ${!rve ? "h w-[100%] bg-[#00000001] h-[100vh]  fixed left-[1324px] top-[31px] z-10 " : " hidden "} `} onClick={umid}>
            <div className={` ${!rve ? " opacity-100 flex absolute w-[60px] mt-[40px]" : " hidden opacity-0"} duration-500 ease-linear  items-center  cursor-pointer gap-2 bg-[#0000001c] p-[10px] rounded-[8px] `}>
               <img className="w-[15px]" src="https://vectorflags.s3.amazonaws.com/flags/ru-wave-01.png" alt="eror 404 sprry" /> 
                Ру
            </div>
            </div>

            </div>

            <img src="/halal.webp" alt="eror  404 sorry" />
            <button  className="bg-[#047857] active:scale-[.9] cursor-pointer  duration-500 ease w-[95px] h-[45px] text-white font-[700] tracking-[.6px] rounded-[70px]">Kirish</button>
        </div>

        <div className={`flex flex-col gap-2 xl:hidden fixed right-0 mr-[30px] ${ !burder ? 'top-[20px]' : '0'}  z-20`} onClick={()=> setBurder(!burder)}>
                <div className={`w-[40px] h-[3px] bg-black  ${ !burder ? 'rotate-[-50deg] relative top-[22px]' : 'rotate-0'} duration-500 ease-in-out`}>

                </div>
                <div className={`w-[35px] self-end h-[3px] bg-black ${ !burder ? 'opacity-0' : 'opacity-100'} duration-500 ease-in-out`}>

            </div>
            <div className={`w-[40px] h-[3px] bg-black  ${ !burder ? 'rotate-[50deg]' : 'rotate-0'} duration-500 ease-in-out`}>

            </div>
            </div>

        </div >
        </div>
    )
} 

export default Header