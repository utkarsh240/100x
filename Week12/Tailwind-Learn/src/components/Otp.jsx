import { useRef, useState } from "react"
import { Button } from "./Buttons";

export function Otp(){
    const ref1= useRef();
    const ref2= useRef();
    const ref3= useRef();
    const ref4= useRef();
    const ref5= useRef();
    const ref6= useRef();

    const [disabled,setDisabled]= useState(true);

    

    return <div className="flex justify-center">
        <SubOtpBox reference={ref1} onDone={()=>{
            ref2.current.focus();
        }}/>
        <SubOtpBox reference ={ref2} onDone={()=>{
            ref3.current.focus();
        }}/>
        <SubOtpBox reference={ref3} onDone={()=>{
            ref4.current.focus();
        }}/>
        <SubOtpBox reference={ref4} onDone={()=>{
            ref5.current.focus();
        }}/>
        <SubOtpBox reference={ref5} onDone={()=>{
            ref6.current.focus();
        }}/>
        <SubOtpBox reference={ref6} onDone={()=>{
            setDisabled(false);
        }}/>
        <br />
        <Button disabled={disabled}>Sign Up</Button>
        

    </div>

}



function SubOtpBox({
    reference, onDone
}) {

    const [inputBoxVal, setInputBoxVal] = useState("");


    return <div>
        <input ref={reference} onChange={(e)=>{ 
            const val = e.target.value    
            onDone()
        }} type="text" className=" m-2 w-[40px] h-[50px] rounded-2xl bg-blue-500" text-white></input>
    </div>
}