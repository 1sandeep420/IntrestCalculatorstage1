import { useState } from "react"
import './Calci.css'
export default function Calculator()
{
   
    const [PrincipleAmount , setPrincipleAmount ] = useState("")
    const [Years, setYears ] = useState("")
    const [IntrestRate , setIntrestRate] = useState("")

    function HandleClick()
    {
        console.log(PrincipleAmount)
        console.log(Years)
    }
   function HandleOption(e)
   {
    if(e.target.value === "HDFC")
    {
        setIntrestRate("2")
        console.log(IntrestRate)
    }
    if(e.target.value === "SBI")
        {
            setIntrestRate(()=>"3")
            console.log(IntrestRate)
        }
    if(e.target.value === "IDFC")
            {
                setIntrestRate(()=>"4")
                console.log(IntrestRate)
            } 
    if(e.target.value === "AXIS")
               {
                    setIntrestRate(()=>"5")
                    console.log(IntrestRate)
                }  
   }
    return(
        <>
       
        <div className="Container">
            <h2>Bank Balance Booster</h2>

                <label>Principle Amount</label>
                <input type="text" className="PrincipleAmountText" value={PrincipleAmount}  onChange={(e)=>setPrincipleAmount(e.target.value)}></input>
           
            <div className="IntrestSelectoption"  onClick={HandleOption}>
                <select>
                    <option>Banks</option>
                    <option> HDFC</option>
                    <option>SBI</option>
                    <option>IDFC</option>
                    <option>AXIS</option>
                </select>
            <select>
                <option>Houseloan</option>
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