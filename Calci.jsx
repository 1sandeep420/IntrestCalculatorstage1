import { useState } from "react"
import './Calci.css'
export default function Calculator()
{
   
    const [PrincipleAmount , setPrincipleAmount ] = useState("")
    const [Years, setYears ] = useState("")
    const [IntrestRate , setIntrestRate] = useState(0)
    const [BaseIntrestRate ,  setBaseIntrestRate] = useState(0)
    

    function HandleClick()
    {
        console.log(PrincipleAmount)
        console.log(Years)
    }
   function HandleOption(e)
   {

    let base = 0;
    if(e.target.value === "HDFC")
    {
        base =0.05
    }
    if(e.target.value === "SBI")
        {
            base = 0.38
        }
    if(e.target.value === "IDFC")
            {
                base =0.62
            } 
    if(e.target.value === "AXIS")
               {
                base =0.225
                } 
    setBaseIntrestRate(base)
    setIntrestRate(base);
    console.log(base)
                
   }

   function HandleIntrest(e)
   {

    let updteIntrest = BaseIntrestRate;

    if(e.target.value === "Homeloan")
        {

            updteIntrest +=0.55
            
        }
    
    if(e.target.value === "vechileloan")
            {

                updteIntrest +=0.66

                
            }
    if(e.target.value === "Goldloan")
                {
                    updteIntrest +=0.89
                }

            setIntrestRate(updteIntrest)
            console.log(BaseIntrestRate)
   }
    return(
        <>
       
        <div className="Container">
            <h2>Bank Balance Booster</h2>

                <label>Principle Amount</label>
                <input type="text" className="PrincipleAmountText" value={PrincipleAmount}  onChange={(e)=>setPrincipleAmount(e.target.value)}></input>
           
            <div className="IntrestSelectoption">
                <select   onChange={HandleOption}>
                    <option>Banks</option>
                    <option> HDFC</option>
                    <option>SBI</option>
                    <option>IDFC</option>
                    <option>AXIS</option>
                </select>
            <select onChange={HandleIntrest}>
                <option>LoanType</option>
                <option>Homeloan</option>
                <option>vechileloan</option>
                <option>Goldloan</option>
            </select>
            </div>
                <label >Number of years</label>
                <input type="text" value={Years} onChange={(e)=>setYears(e.target.value)}></input>
      
            <span>Your inrest would be :- {(PrincipleAmount * Years * IntrestRate )/100} </span>
           
            <br></br>
            <button className="Calculate" onClick={HandleClick}>Calculate</button>
       
        </div>
       
        </>
    )
}   