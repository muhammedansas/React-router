import React from 'react'
import { Button, Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function Login() {
  const nav = useNavigate()
  return (
    <container>
        <div className='lgn-main'>
          <div>
            <h1 className='lgn-heading'>Login</h1>
          </div>
          <br/>
          <div>
            <input className='lgn-details' type="text" placeholder='Enter username' />
            <br/>
            <br/>
            <input className='lgn-details' type="email" placeholder='Enter email address' />
            <br/>
            <br/>
            <input className='lgn-details' type="password" placeholder='Enter password' />
            <br/>
            <br/>
            <div>
              <Button className='bg-primary' onClick={()=>nav("/home")} style={{width:90, height:40}}>Login</Button>
              </div>
          </div>
        </div>
    </container>
  )
}

export default Login