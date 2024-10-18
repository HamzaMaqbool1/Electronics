import React, { useState } from 'react'
import group from '../Image/group.png'
import girl from '../Image/girl.png'
import accory from '../Image/accessory.png'
import iphone from '../Image/iphonebrand.png'
import bud from '../Image/sambuds.png'
import women from '../Image/women.png'
import men from '../Image/men1.png'
import men1 from '../Image/men.png'

const About = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Array of images and related text
  const images = [
    { src: women, text: 'This is the first image description' },
    { src: men, text: 'This is the second image description' },
    { src: men1, text: 'This is the third image description' },
  ];
  return (
    <section id='about'>
     <div className="container-fluid" style={{backgroundColor:'#bccde0'}}>
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          <p className='fs-small text-black text-center'>Are you university or school for an online partnership?
          </p>
        </div>
      </div>
      </div>
      <div className="container my-md-5 my-3">
        <div className="row">
          <div className="col-md-4 d-flex flex-column justify-content-center order-md-1 order-2">
            <h3 className='text-black fw-bold'>Open a Mobile Accessories Store Online</h3>
            <p className='fs-5 text-black'>Best Tips to Start an Online Business</p>
            <div><button type='button' className='border-0 rounded text-white px-3 fs-4 py-1' style={{backgroundColor:'#ec685d'}}>Shop Now</button></div>
          </div>
          <div className="col-md-8 order-md-2 order-1">
            <img src={group} alt="" className='img-fluid' style={{width:'100%',height:'100%'}}/>
          </div>
        </div>
        </div> 
        <div className="container-fluid my-md-5 my-3" style={{backgroundColor:'#bccde0'}}>
          <div className="row d-flex justify-content-around">
            <div className="col-md text-center">
              <h3 className='fw-bold text-black heading'>870</h3>
              <p className='text-black'>Shops</p>
            </div>
            <div className="col-md text-center">
              <h3 className='fw-bold text-black heading'>20,000+</h3>
              <p className='text-black'>Users</p>
            </div>
            <div className="col-md text-center">
              <h3 className='fw-bold text-black heading'>260</h3>
              <p className='text-black'>Subscriber</p>
            </div>
            <div className="col-md text-center">
              <h3 className='fw-bold text-black heading'>73,990</h3>
              <p className='text-black'>Active</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-6 text-center">
              <p style={{color:'#ec685d'}} className='fs-small'>Why choose us</p>
              <h3 className='text-black fw-bold'>Benifits of online buying service with us</h3>
            </div>
          </div>
        </div>
        <div className="container my-md-5 my-3">
          <div className="row d-flex justify-content-around">
            <div className="col-md-2 widecol my-md-0 my-2" style={{backgroundColor:'#b3b6b7',borderRadius:'30px'}}>
              <h6 className='text-black text-center'>Choose teaching</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nihil iure?</p>
            </div>
            <div className="col-md-2 widecol my-md-0 my-2" style={{backgroundColor:'#b3b6b7',borderRadius:'30px'}}>
              <h6 className='text-black text-center'>24/7 available</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nihil iure?</p>
            </div>
            <div className="col-md-2 widecol my-md-0 my-2" style={{backgroundColor:'#b3b6b7',borderRadius:'30px'}}>
              <h6 className='text-black text-center'>Whiteboard</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nihil iure?</p>
            </div>
            <div className="col-md-2 widecol my-md-0 my-2" style={{backgroundColor:'#b3b6b7',borderRadius:'30px'}}>
              <h6 className='text-black text-center'>Afterable price</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nihil iure?</p>
            </div>
          </div>
        </div>
        <div className="container-fluid" style={{backgroundColor:'#eeeded'}}>
        <div className="container" >
          <div className="row">
            <div className="col-md-4 overflow-hidden mt-md-5 mt-3" style={{paddingBottom:'50px'}}>
              <img src={girl} alt="" style={{width:'100%',height:'100%'}} className='img-fluid'/>
              <img src={accory} alt="" className='img-fluid imageaccory' style={{borderRadius:'50%',width:'50px',height:'50px'}} />
            </div>
            <div className="col-md-5 mt-md-5 mt-3">
              <p className='fs-small' style={{color:'#ec685d'}}>Customer your product us</p>
              <h3 className='text-black fw-bold'>Personilized profeissional online buying on your schedule</h3>
              <p className='text-black fs-small'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, sequi.</p>
              <button type='button' className='border-0 rounded px-3 text-white py-2' style={{backgroundColor:'#ec685d'}}>Get Started</button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="col-md-5">
            <p className='fs-small' style={{color:'#ec685d'}}>Customer your product us</p>
              <h3 className='text-black fw-bold'>Personilized profeissional online buying on your schedule</h3>
              <p className='text-black fs-small'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, sequi.</p>
              <button type='button' className='border-0 rounded px-3 text-white py-2' style={{backgroundColor:'#ec685d'}}>Get Started</button>
            </div>
            <div className="col-md-5 overflow-hidden my-md-5 my-3" style={{paddingBottom:'100px'}}>
              <img src={iphone} alt="" className='img-fluid' style={{width:'200px',height:'200px'}}/>
              <img src={bud} alt="" className='img-fluid imagerelate' style={{width:'200px',height:'200px'}}/>
            </div>
          </div>
        </div>
        </div>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-6 text-center">
              <p style={{color:'#ec685d'}} className='fs-small fw-bold'>Our Testimonial</p>
              <h3 className='text-black fw-bold'>What our User say about us</h3>
              <div className="d-flex justify-content-around" style={{ borderRadius: '50px' }}>
  {images.map((image, index) => (
    <img
      key={index}
      src={image.src}
      alt={`Image ${index + 1}`}
      className="gallery-image"
      onClick={() => setSelectedImage(index)}
      style={{
        cursor: 'pointer',
        width: '50px',
        height: '50px',
        border: selectedImage === index ? '2px solid blue' : 'none',
        margin: '0 10px' // Add spacing between images
      }}
    />
  ))}
</div>
         <div className="image-description">
        {selectedImage == 0 && (
       <>
          <h6 className='fs-small fw-bold text-black'>About Monica</h6> 
          <p className='fs-small fw-bold text-black'>Student at Finance</p>
          <p className='fs-small text-black'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias debitis enim voluptate qui, quidem pariatur!</p>
       </>
        )}
        {selectedImage == 1 && (
       <>
          <h6 className='fs-small fw-bold text-black'>About John</h6> 
          <p className='fs-small fw-bold text-black'>Student at Sociology</p>
          <p className='fs-small text-black'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias debitis enim voluptate qui, quidem pariatur!</p>
       </>
        )}
        {selectedImage == 2 && (
       <>
          <h6 className='fs-small fw-bold text-black'>About Smith</h6> 
          <p className='fs-small fw-bold text-black'>Student at Computer</p>
          <p className='fs-small text-black'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias debitis enim voluptate qui, quidem pariatur!</p>
       </>
        )}
      </div>
            </div>
          </div>
        </div>
       
    </section>
  )
}

export default About