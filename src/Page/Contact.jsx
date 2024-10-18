import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../Image/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [active,setActive]=useState("contact")
  const handleActive=(option3)=>{
    setActive(option3)
  }
  return (
    <section id='contact'>
      <div className="container-fluid" style={{backgroundColor:'#D8E2ED'}}>
      <div className="container m-lg-5 ms-md-3 mt-md-5 mt-3 " style={{backgroundColor:'#A8BDD4',borderRadius:'20px'}}>
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
          <div className="col-md-4 my-lg-5 my-2 ms-lg-5 ms-2">
            <h3 className='text-black fw-bold'>Contact Us</h3>
            <p className='fs-small text-muted'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum inventore mollitia et ad sed repudiandae ab adipisci quaerat odio quas.</p>
            <div className="d-flex">
            <FontAwesomeIcon icon={faEnvelope} size='2x' color='#D8E2ED'/>
            <p className='fs-small text-muted ms-3'>kashifhurmat893@gmail.com</p>
            </div>
            <div className='d-flex'>
              <FontAwesomeIcon icon={faPhone} size='2x' color='#D8E2ED'/>
              <p className='fs-small text-muted ms-3'>+92 302 5058 413</p>
            </div>
          </div>
          <div className="col-md-7 my-lg-5 my-3">
            <div className="row" style={{borderRadius:'30px',backgroundColor:'white'}}>
              <div className="col my-3">
                <h3 className='text-black fw-bold'>We’d love to hear from you!</h3>
                <h3 className='text-black fw-bold'>Lets get in touch</h3>
                <div className="row " >
                  <div className="col-md-6">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                  <input type="text" className="form-control" id="exampleFormControlInput1" style={{borderColor:'#ec685d'}}/>
                  </div>
                  <div className="col-md-6">
                  <label htmlFor="exampleFormControlInput1" className="form-label">User</label>
                  <input type="email" className="form-control" id="exampleFormControlInput1" style={{borderColor:'#ec685d'}}/>
                  </div>
                </div>
                <div className="row" >
                  <div className="col-md-6">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                  <input type="email" className="form-control" id="exampleFormControlInput1" style={{borderColor:'#ec685d'}}/>
                  </div>
                  <div className="col-md-6">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Phone #</label>
                  <input type="text" className="form-control" id="exampleFormControlInput1" style={{borderColor:'#ec685d'}}/>
                  </div>
                </div>
                <div className="row " >
                  <div className="col-md-6">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                  <input type="email" className="form-control" id="exampleFormControlInput1" style={{borderColor:'#ec685d'}}/>
                  </div>
                </div>
                <div className="row" >
                  <div className="col-12">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Message</label>
                  <textarea id="exampleFormControlInput1" className="form-control" style={{borderColor:'#ec685d'}} placeholder='Type Here' rows={5}></textarea>
                  </div>
                </div>
                <button type='button' className='border-0 rounded text-white px-3 py-2 mt-2' style={{backgroundColor:'#ec685d'}}>Send Message</button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
