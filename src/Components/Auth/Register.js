import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";


const Register =()=>{

    const [username, setUsername]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [conform, setConform]=useState("")
    // const [error, setError]=useState(null)
    // const [fields, setfield]=useState("")
  

    const auth = useAuth
    const submitHandler = (e)=>{
        e.preventDefault()
       
        // api call
        const data = {
            "email":email,
            "name":username,
            "password":password,
            "password2":conform,
            
            
            
          }
        axios.post("https://eventplanner.pruthviraj2121.repl.co/auth/register/",data )
        .then(
            (res)=>{
                console.log(res)
                
                
                navigate("/login")
            }
        )
        .catch(
            (error)=>{
                console.log(error)
                console.log(error.response.data.error)
                
               
              
            }
        )


    }

    const navigate = useNavigate()

    return(
        
        <div className=" flex flex-col items-center h-screen mx-auto justify-center  ">
            <div className="bg-[#475578ca] bg-opacity-0 rounded-xl  px-24 py-20">

                <h1 className="text-4xl font-bold ">Register </h1>
                
                <form onSubmit={submitHandler}>
                    <div className="mt-5">
                        <label className="font-bold mr-[23px] text-slate-50">Username</label>
                        <input className="rounded px-3 focus:outline-none" type="text" onChange={ (e) => {setUsername(e.target.value) }} placeholder="Enter Username" />
                        {/* {fields.error.hasOwnProperty(['name'])?<h1 className=" text-red-800 font-medium ">{error} </h1>:null} */}
                    </div>

                    <div className="mt-5">
                        <label className="font-bold mr-[58px] text-slate-50">Email</label>
                        <input className="rounded px-3 focus:outline-none" type="Email" onChange={ (e) => {setEmail(e.target.value) }} placeholder="Enter Email" />
                        {/* {fields.hasOwnProperty(['email'])?<h1 className=" text-red-800 font-medium ">{error} </h1>:null} */}
                    </div>

                    <div className="mt-5">
                        <label  className="font-bold mr-7 text-slate-50" >Password</label>
                        <input className="rounded px-3 focus:outline-none" type="password" onChange={ (e) => {setPassword(e.target.value) }} placeholder="Enter password" />
                        {/* {fields.hasOwnProperty(['password'])?<h1 className=" text-red-800 font-medium ">{error} </h1>:null} */}
                    </div>

                    <div className="mt-5">
                        <label  className="font-bold mr-8 text-slate-50" >Conform</label>
                        <input className="rounded px-3 focus:outline-none" type="password" onChange={ (e) => {setConform(e.target.value) }} placeholder="Enter password again" />
                        {/* {fields.hasOwnProperty(['password2'])?<h1 className="text-red-800 font-medium ">{error} </h1>:null} */}
                    </div>
                    
                    <div className="flex justify-center">
                    <button className="w-[300px] mt-5 shadow-2xl text-white font-semibold bg-[#000300] py-3 rounded-md hover:bg-[#202020]">Register</button>
                    </div>
                </form>

                <p onClick={()=>{navigate('/login')}} className="text-right font-semibold cursor-pointer hover:text-[#202020]">Aready have account</p> 
               
            </div>
        </div>
    )
}

export default Register