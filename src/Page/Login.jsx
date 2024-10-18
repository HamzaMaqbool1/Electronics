import React, { useState } from 'react'
import logo from '../Image/Logo.png'
import group from '../Image/group.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
const Login = () => {
  const [active,setActive]=useState("login")
  const handleActive=(option)=>{
    setActive(option)
  }
  return (
    <section id='login'>
      <div className="container-fluid" style={{backgroundColor:'#BCCDE0'}}>
        <div className="container m-lg-5 ms-md-3 mt-md-5 mt-3 " style={{backgroundColor:'white',borderRadius:'20px'}}>
        <div className="row">
          <div className="col">
          <nav className="navbar navbar-expand-lg" >
    <img src={logo} alt="Logo" className='img-fluid ms-3' style={{width:"70px",height:'70px'}}/>
    <button className="navbar-toggler me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
        <li className={`nav-item ${active === "home" ? "active":""}`}>
          <Link className="nav-link" style={active === "home"?{fontWeight:'bolder',color:'black'}:{}}  to="/" onClick={()=>handleActive("home")}>Home</Link>
        </li>
       
        <li className={`nav-item ${active === "contact" ? "active":""}`}>
          <Link className="nav-link" style={active === "contact"?{fontWeight:'bolder',color:'black'}:{}}  to="/contact" onClick={()=>handleActive("contact")}>Contact</Link>
        </li>
        <li className={`nav-item ${ active === "about" ? "active":""}`}>
          <Link className="nav-link" style={active === "about"?{fontWeight:'bolder',color:'black'}:{}}  to="/about" onClick={()=>handleActive("about")}>About</Link>
        </li>
        <li className={`nav-item ${active === "login" ? "active":""}`}>
          <Link className="nav-link" style={active === "login"?{fontWeight:'bolder',color:'black'}:{}}  to="/login" onClick={()=>handleActive("login")}>Login</Link>
        </li>
      </ul>
    </div>
</nav>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 my-md-5 my-3 order-md-1 order-2">
            <div className='d-flex'>
              <h3 style={{color:'#ec685d'}}>Sign in</h3>
              <h3 className='text-muted ms-auto'>Sign up</h3>
            </div>
            <input type="text" className="form-control my-3" id="exampleFormControlInput1" placeholder="Username" style={{borderColor:'#ec685d'}}></input>
            <input type="password" className="form-control mb-3" id="exampleFormControlInput2" placeholder="Password" style={{borderColor:'#ec685d'}}></input>
            <div className='d-flex'>
              <p className='fs-small text-muted'>Forgot password</p>
              <button type='button' className='border-0 rounded text-white px-lg-5 px-3 fw-bold ms-auto' style={{backgroundColor:'#ec685d'}}>Login</button>
            </div>
           <div className="d-flex">
            <hr style={{width:'150px'}}/>
            <p className='fs-samll text-muted px-3'>OR</p>
            <hr style={{width:'150px'}}/>
           </div>
           <div className='d-flex gap-3'>
            <FontAwesomeIcon icon={faGoogle} size='2x' className='ms-auto' style={{color:'#ec685d'}}/>
            <FontAwesomeIcon icon={faFacebook} size='2x' color='blue' className='me-auto'/>
           </div>
          </div>
          <div className="col-md-8 order-md-2 order-1">
            <img src={group} alt="" className='img-fluid' style={{width:'100%', height:'100%'}}/>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Login
