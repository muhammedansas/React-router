import React from 'react'
import "./main.css"
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Registration() {
    const nav = useNavigate()
  return (
        <container>
            <div className='main-div'>
            <div>
                <h1 className='bg-reg'>Registration</h1>
            </div>
            <br/>
                <input className='reg-1name' type='text' placeholder='first name' />
                <input className='reg-2name' type='text' placeholder='last name' />
                <br/>
            
            <br/>
            <div>
            <input className='reg-detailes' type="email" placeholder='Enter email address' />
            <br/>
            <br/>
            <input className='reg-detailes' type="password" placeholder='Enter password' />
            <br/>
            <br/>
            <input className='reg-detailes' type='password' placeholder='Confirm password' />
            </div>
            <br/>
            <Button className='bg-primary' onClick={()=>nav("/login")}>Submit</Button>
            </div>
            <div>
                
            </div>
        </container>
        
  )
}

export default Registration