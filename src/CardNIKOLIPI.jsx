import { useState } from "react"

const CardKolipi = ({prd}) =>{

const [change,setChange] = useState(true)

function chg(e){
    if(e.target.classList[0] === 'f'){
        setChange(true)
    }
}
    return(
        <div className={`big shadow-[#0000004d]  rounded-[10px]     shadow-lg`}>
     
            <div className="uzi cursor-pointer  p-[4px] w-[380px] h-[330px] pl-[5px] " onClick={()=>setChange(false)}>
                <img src={prd.img} className="w-[250px]" alt="eror 440 sorry" />
                <h1 className="font-[500] text-[18px]">{prd.title}</h1>
                <p className="w-[240px] mt-[10px] text-[14px]">{prd.font}</p>
                <h4 className="mt-[10px] text-[15px] font-[700]">{prd.price}</h4>    
            </div>

            <div onClick={chg} className={`f  bg-[#0000005d] duration-500 ease-in  backdrop-blur-[5px] w-[100%] h-[100vh] flex justify-center items-center fixed left-0 z-20 top-0
                 ${!change ? 'opacity-100 translate-x-0' : 'opacity-0 mt-[300px] translate-x-[100%]'}`}>
                <div className={`absolute bg-[#ffffff] w-[60%] h-[90vh] rounded-[20px]`}>
                <div className="x flex justify-end mr-[20px] mt-[20px]" onClick={()=>setChange(true)}>
            <img className="rounded-[50%]  border-solid border-black border-[2px] w-[50px]" src="https://t4.ftcdn.net/jpg/00/75/69/13/360_F_75691329_CLLuXHPb6zqvgBnFkQjVnufsLEtmbL3e.jpg" alt="eror 404 sorry" />
            </div>

                <div className="flex items-center">
                <div className="left w-[50%] flex flex-col items-center">
                    <img src={prd.caimg} className="w-[500px]" alt="eror 404 sorry" />
                    <h1 className="self-start ml-[50px] text-[30px] font-[700]">{prd.catitle}</h1>
                    <p className="text-[20px] w-[400px]">{prd.cafont}</p>
                    <h1 className="self-start mt-[10px] ml-[54px] text-black text-[30px] m">{prd.caprice}</h1>
                </div>
                <div className="right w-[50%] ">
                <h1>{prd.katitle}</h1>
                    <div className="top">
                        <div className="wan">
                            <h1>{prd.wantitle}</h1>

                        </div>
                    </div>

                <div className="sri cursor-pointer" onClick={()=>setChange(true)} >
                    <h1>Savatga qo'shish</h1>
                </div>
                
                </div>
                </div>

                </div>
            </div>
        
        </div>
    )
}

export default CardKolipi