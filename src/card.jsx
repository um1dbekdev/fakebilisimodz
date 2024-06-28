import CardKolipi from "./CardNIKOLIPI"
import { prd } from "./prd"
const Card =  () =>{

    return( 
        <div className="mt-[70px] mb-[30px] gap-[100px] justify-center grid grid-cols-[repeat(4,259px)]">
            {
                prd.map((value,i)=>{
                    return(
                        <CardKolipi key={i} prd={value} />
                    )
                })
            }
        </div>
    )
}


export default Card