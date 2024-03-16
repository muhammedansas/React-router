import { Button } from 'react-bootstrap'
import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function Home() {
    const nav=useNavigate()
    const {id} = useParams()
    console.log(id);
  return (
    <div>
        <h1 className='bg-primary text-white'>Home page</h1>
        <Button className="bg-primary" onClick={()=>nav("/login")}>Sign in</Button>
        
    </div>
  )
}

export default Home