import React, { useState } from 'react'
import style from "../Register/Register.module.css"
const Register = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [username,setUserName]=useState("")
    const [phoneNo,setPhoneNo]=useState("")
    const [password,setPassword]=useState("")
    const submitForm=async(e)=>{
      e.preventDefault()
      const res=await fetch("http://localhost:8000/api/register",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({name,username,email,phoneNo,password})
      })
        const data=await res.json()
          if(data.Success==true){
            alert(data.message)
          }else{
            alert(data.message)
          }
    }
  return (
    <div className={style.container}>
        <form onSubmit={submitForm}>
            <input type="text" placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="email" placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="text" placeholder='Enter your username' value={username} onChange={(e)=>setUserName(e.target.value)}/>
            <input type="phone" placeholder='Enter your phone no' value={phoneNo} onChange={(e)=>setPhoneNo(e.target.value)}/>
            <input type="password" placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <button type="submit">Register</button>
        </form>
    </div>
  )
}

export default Register