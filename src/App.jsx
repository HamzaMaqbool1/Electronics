import React,{ useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faXbox, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import logo from './Image/Logo.png'
import { BrowserRouter as Router,Routes,Route,Link,useLocation } from 'react-router-dom';
import Home from './Page/Home';
import img from './Image/headphone1.png'
import img1 from './Image/electronic.png'
import Login from './Page/Login';
import About from './Page/About';
import Contact from './Page/Contact';
function Navbar(){
  const {pathname}=useLocation();
  const [active,setActive]=useState("first")
  const handleState=(option)=>{
    setActive(option)
  }
  const newpath=pathname.split("/");
  const [newActive,setActive1]=useState("home")
  const handleActive1=(option1)=>{
    setActive1(option1)
  }

  const handleNav=()=>{
    switch(pathname){
    case '/about':
      return (
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg" >
    <img src={logo} alt="Logo" className='img-fluid' style={{width:"70px",height:'70px'}}/>
    <button className="navbar-toggler me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
      <li className={`nav-item ${newActive === "home" ? "active":""}`}>
          <Link className="nav-link" style={newActive ===  "home"?{fontWeight:'bolder',color:'black'}:{}}  to="/" onClick={()=>handleActive1("home")}>Home</Link>
        </li>
       
        <li className={`nav-item ${newActive === "contact" ? "active":""}`}>
          <Link className="nav-link" style={newActive === "contact"?{fontWeight:'bolder',color:'black'}:{}}  to="/contact" onClick={()=>handleActive1("contact")}>Contact</Link>
        </li>
        <li className={`nav-item ${newActive === "about" ? "active":""}`}>
          <Link className="nav-link" style={newActive === "about"?{fontWeight:'bolder',color:'black'}:{}}  to="/about" onClick={()=>handleActive1("about")}>About</Link>
        </li>
        <li className={`nav-item ${newActive === "login" ? "active":""}`}>
          <Link className="nav-link" style={newActive === "login"?{fontWeight:'bolder',color:'black'}:{}}  to="/login" onClick={()=>handleActive1("login")}>Login</Link>
        </li>
      </ul>
    </div>
</nav>
        </div>
      )
      case '/':
    
        return (
          <div className="container-fluid">
          <div className="row" style={{
    backgroundColor: '#BCCDE0'
  }}>
            <div className="col-12">
            <nav className="navbar navbar-expand-lg" >
    <img src={logo} alt="Logo" className='img-fluid' style={{width:"70px",height:'70px'}}/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
      <li className={`nav-item ${newActive === "home" ? "active":""}`}>
          <Link className="nav-link" style={newActive === "home"?{fontWeight:'bolder',color:'black'}:{}}  to="/" onClick={()=>handleActive1("home")}>Home</Link>
        </li>
        
        <li className={`nav-item ${newActive === "contact" ? "active":""}`}>
          <Link className="nav-link" style={newActive === "contact"?{fontWeight:'bolder',color:'black'}:{}}  to="/contact" onClick={()=>handleActive1("contact")}>Contact</Link>
        </li>
        <li className={`nav-item ${newActive === "about" ? "active":""}`}>
          <Link className="nav-link" style={newActive === "about"?{fontWeight:'bolder',color:'black'}:{}}  to="/about" onClick={()=>handleActive1("about")}>About</Link>
        </li>
        <li className={`nav-item ${newActive === "login" ? "active":""}`}>
          <Link className="nav-link" style={newActive === "login"?{fontWeight:'bolder',color:'black'}:{}}  to="/login" onClick={()=>handleActive1("login")}>Login</Link>
        </li>
      </ul>
    </div>
</nav>
            </div>
          </div>
          <div className="row" style={{paddingBottom:'50px'}}>
            <div className="col-md-7 headercol">
              <div id="carouselExampleIndicators" className="carousel slide">
 
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img1} className="d-block w-100 h-100" alt="..."/>
    </div>
  </div>
</div>
<div className="carousel-indicators" style={{bottom:'-10px'}}>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1" onClick={()=>handleState("first")} style={active === "first"?{width:'10px',height:'10px',borderRadius:'50%',backgroundColor:'#ec685d',opacity:'1'}:{width:'10px',height:'10px',borderRadius:'50%',backgroundColor:'#ec685d',opacity:'0.3'}}></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" onClick={()=>handleState("second")} style={active === "second"?{width:'10px',height:'10px',borderRadius:'50%',backgroundColor:'#ec685d',opacity:'1'}:{width:'10px',height:'10px',borderRadius:'50%',backgroundColor:'#ec685d',opacity:'0.3'}}></button>
  </div>
            </div>
            <div className="col-md-4 pt-5 px-5">
              <p className='fs-small' style={{color:'#ec685d'}}>In the spotlight</p>
              <h3 className='fw-bold text-black'>Your sound best
              for your life</h3>
              <p className='fs-samll text-muted'>
              These have large ear cups that encompass the ears, providing good sound isolation and often better sound quality.</p>
              <button type='button' className='border-0 rounded text-white ps-3 pe-3 py-2 mt-md-5 mt-3' style={{backgroundColor:'#ec685d'}}>Shop now <span><FontAwesomeIcon icon={faArrowRight} size='1x' className='arrow'/></span></button>
            </div>
          </div>
</div>
        )
      default:
        break;
 }
};
const navContent=handleNav()
  return(
    <section id='navbar'>
      {navContent}
    </section>
  )
}

function Footer(){
  const {pathname}=useLocation()
  const showNavbar = ['/','/home'].includes(pathname);
  return(
    <section id='footer'>
      {showNavbar && (
        <div className="container-fluid p-0" style={{backgroundColor:'#bccde0'}}>
        <div className="row mx-lg-5 mx-0" id='row'>
          <div className="col-md-4 mt-4">
            <p className='fs-md-5 fs-6 text-center'>YOUR GATEWAY TO SUCCESS START</p>
          </div>
          <div className="col-md-2 col-3 mt-4">
            <p className='fs-md-5 fs-6 fw-light'>Pages</p>
          </div>
          <div className="col-md-2 col-3 mt-4">
          <p className='fs-md-5 fs-6 fw-light'>Other</p>
          </div>
          <div className="col-md-2 col-3 mt-4">
          <p className='fs-md-5 fs-6 fw-light'>Utility</p>
          </div>
          <div className="col-md-2 col-3 mt-4">
          <p className='fs-md-5 fs-6 fw-light'>Help</p>
          </div>
        </div>
        <hr style={{height:'2px',color:'white',backgroundColor:'white'}} className='m-0'/>
        <div className="row mx-lg-5 mx-0 my-3">
          <div className="col-md-4 d-flex flex-column order-md-0 order-2">
            <p className='fs-6 text-md-start text-center'>Here!</p>
            <div className="d-flex justify-content-md-start justify-content-center">
            <FontAwesomeIcon icon={faArrowRight} size='1x' color='white' className='p-1' style={{backgroundColor:'#e7814d',borderRadius:'50%'}}/>
            <p className='fs-6 ms-2 '>hello@webflow.com</p>
            </div>
            <div className='mt-auto text-center text-md-start'>
              <FontAwesomeIcon  icon={faYoutube} size='2x' color='black' className='me-2'/>
              <FontAwesomeIcon icon={faLinkedin} size='2x' color='black' className='me-2'/>
              <FontAwesomeIcon icon={faXbox} size='2x' color='black' className='me-2'/>
              <FontAwesomeIcon icon={faFacebook} size='2x' color='black'/>
            </div>
          </div>
          <div className="col-md-2 col-3 " id='column'>
            <p className='fw-lighter fs-lg-5 fs-6 m-1'>Demo<span className='span'>(Sales)</span></p>
            <p className='fw-lighter fs-lg-5 fs-6 m-1'>Home</p>
            <p className='fw-lighter fs-lg-5 fs-6 m-1'>Services</p>
            <p className='fw-lighter fs-lg-5 fs-6 m-1'>About</p>
            <p className='fw-lighter fs-lg-5 fs-6 m-1'>Blog</p>
            <p className='fw-lighter fs-lg-5 fs-6 m-1'>Work</p>
            <p className='fw-lighter fs-lg-5 fs-6 m-1'>Shop</p>
          </div>
          <div className="col-md-2 col-3" id='column'>
            <p className='fw-lighter fs-lg-5 fs-6 m-1'>404</p>
            <p className='fw-lighter fs-lg-5 fs-6 m-1'>Password</p>
            <p className='fw-lighter fs-lg-5 fs-6 m-1'>Checkout</p>
            <p className='fw-lighter fs-lg-5 fs-6 m-1'>Blog Details</p>
            <p className='fw-lighter fs-lg-5 fs-6 m-1'>Work Details</p>
            <p className='fw-lighter fs-lg-5 fs-6 m-1'>Shop Details</p>
          </div>
          <div className="col-md-2 col-3" id='column'>
          <p className='fw-lighter fs-lg-5 fs-6 m-1'>Style Guide</p>
            <p className='fw-lighter fs-lg-5 fs-6 m-1'>Licencing</p>
            <p className='fw-lighter fs-lg-5 fs-6 m-1'>Changelog</p>
            <p className='fw-lighter fs-lg-5 fs-6 m-1'>Instruction</p>
          </div>
          <div className="col-md-2 col-3" id='column'>
          <p className='fw-lighter fs-lg-5 fs-6 m-1'>All Templates</p>
          <p className='fw-lighter fs-lg-5 fs-6 m-1'>Supports</p>
          </div>
        </div>
        <hr style={{height:'2px',color:'white',backgroundColor:'white'}} className='m-0'/>
        <div className="row mx-lg-5 mx-0">
          <div className="col-md-6 col-4 my-3">
            <img src={logo} alt="" style={{width:'70px', height:'70px'}} className='img-fluid'/>
          </div>
          <div className="col-md-4 col-8 d-flex align-items-center">
            <p className='fs-small fw-lighter' id='copytext'><span style={{color:'white'}}>&copy;</span>
            2024-Powered by Webflow</p>
          </div>
        </div>
      </div>
      )}
    </section>
  )
}
function App() {
  
  return (
    <>
    <Router basename='/Electronics/'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
    <Footer/>
    </Router>
    </>
  )
}

export default App
