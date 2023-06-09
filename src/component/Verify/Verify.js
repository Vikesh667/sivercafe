import React from 'react'
import { useParams } from 'react-router-dom'

const Verify = async() => {
  const user_id=useParams()
  
    const res=await fetch(`http://localhost:8000/api/verify?${user_id}`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    })
  return (
    <div>Your mail is verified</div>
  )
}

export default Verify