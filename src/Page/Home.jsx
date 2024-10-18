import React from 'react'
import img from '../Image/iphone2.png'
import img1 from '../Image/headphone2.png'
import img2 from '../Image/laptop.png'
import img3 from '../Image/speaker.png'
import img4 from '../Image/tablet.png'
import img5 from '../Image/camera.png'
import img6 from '../Image/appleaccory.png'
import img7 from '../Image/buds.png'
import img8 from '../Image/dish.png'
import img9 from '../Image/cameraphone.png'
import img10 from '../Image/iphone1.png'
import img12 from '../Image/iphone.png'
import img13 from '../Image/singlebud.png'
import img14 from '../Image/watch.png'
import img15 from '../Image/boy.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faHeart, faTag } from '@fortawesome/free-solid-svg-icons';
const Home = () => {
  const product=[
    {
      image:img1,
      title:"Headphone",
      price:99
    },
    {
      image:img2,
      title:"Laptop",
      price:99
    },
    {
      image:img4,
      title:"Tablet",
      price:99
    },
    {
      image:img5,
      title:"Camera",
      price:99
    },
    {
      image:img6,
      title:"Twoway_Pin",
      price:99
    },
    {
      image:img7,
      title:"Buds",
      price:99
    },
    {
      image:img8,
      title:"Dish",
      price:99
    },
    {
      image:img9,
      title:"Mobile_Stand",
      price:99
    }
  ]
  const products=[
    {
      image:img,
      title:"Iphone",
      price:49
    },
    {
      image:img12,
      title:"Iphone",
      price:39
    },
    {
      image:img,
      title:"Iphone",
      price:89
    },
    {
      image:img12,
      title:"Iphone",
      price:109
    }
  ]
  return (
    <section id='home'>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center my-md-5 my-3">
          <div className="col-3">
            <h3 className='fw-bold text-center text-black'>
              Feature's
            </h3>
          </div>
        </div>
        <div className="row d-flex justify-content-center" style={{ backgroundColor: '#bccde0' }}>
        <div className="col-lg-4 col-md-6 col-8 mx-5 my-5" id="headphoneimage" style={{ position: 'relative', zIndex: '2' }}>
  <div className="row d-flex flex-column">
    <div className="col-12" style={{ position: 'relative', zIndex: '-1',color: 'rgba(255, 255, 255, 0.9)' }}>
      <h1 className='bolder'>HEADPHONES</h1>
    </div>
    <div className="col-12" style={{ position: 'relative', zIndex: '-1',color: 'rgba(255, 255, 255, 0.6)'  }}>
      <h1 className='bold'>HEADPHONES</h1>
    </div>
    <div className="col-12" style={{ position: 'relative', zIndex: '-1',color: 'rgba(255, 255, 255, 0.4)'  }}>
      <h1 className='semibold'>HEADPHONES</h1>
    </div>
    <div className="col-12" style={{ position: 'relative', zIndex: '-1',color: 'rgba(255, 255, 255, 0.3)'  }}>
      <h1 className='light'>HEADPHONES</h1>
    </div>
    <div className="col-12" style={{ position: 'relative', zIndex: '-1',color: 'rgba(255, 255, 255, 0.2)'  }}>
      <h1 className='lighter'>HEADPHONES</h1>
    </div>
  </div>
</div>
  <div className="col-md-4 my-md-4 my-2">
    <h3 className='text-black'>Amazing Feature's</h3>
    <h6 className='text-black'>Touch Control</h6>
    <p className='fs-small text-muted'>Some headphones have touch- sensitive surfaces for controlling playback.</p>
    <h6 className='text-black'>Sound Quality</h6>
    <p className='fs-small text-muted'>Some headphones have touch- sensitive surfaces for controlling playback.</p>
    <h6 className='text-black'>Microphone</h6>
    <p className='fs-small text-muted'>Some headphones have touch- sensitive surfaces for controlling playback.</p>
  </div>
</div>

      </div>
      <div className="container">
      <div className="row d-flex justify-content-center my-md-5 my-3">
          <div className="col-md-6">
            <h3 className='fw-bold text-center' style={{color:'#ec685d'}}>
             Category
            </h3>
            <h3 className='text-black text-center'>Can we help you pick a headphone</h3>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 justify-content-around flex-wrap d-flex">
          <div className="card border-top-0 my-2" >
          <img src={img} className="card-img-top img-fluid" alt="..." />
          <div className="card-body overflow-hidden">
          <h5 className="card-title text-center fw-bold">IPhone</h5>
          </div></div>
          <div className="card border-top-0 my-2" >
          <img src={img1} className="card-img-top img-fluid mt-3" alt="..." />
          <div className="card-body overflow-hidden">
          <h5 className="card-title text-center mt-lg-5 mt-2 fw-bold">Headphone</h5>
          </div></div>
          <div className="card border-top-0 my-2">
          <img src={img2} className="card-img-top img-fluid mt-5" alt="..." />
          <div className="card-body overflow-hidden">
          <h5 className="card-title text-center mt-lg-5 mt-2 fw-bold">Laptop</h5>
          </div></div>
          <div className="card border-top-0 my-2" >
          <img src={img3} className="card-img-top img-fluid mt-3" alt="..."/>
          <div className="card-body overflow-hidden">
          <h5 className="card-title text-center mt-lg-5 mt-2 fw-bold">Speaker</h5>
        </div></div>
          <div className="card border-top-0 my-2" >
          <img src={img4} className="card-img-top img-fluid" alt="..."/>
          <div className="card-body overflow-hidden">
          <h5 className="card-title text-center fw-bold">Tablet</h5>
          </div></div>
          </div>
        </div>
      </div>
      <div className="container my-md-5 my-3">
        <div className="row ">
          <div className="col-lg-6">
          <div className="card mb-3 border-top-0 cardhorizontal" style={{width:'550px',height:'400px'}}>
      <div className="row g-0 ">
    <div className="col-lg-6 col-6">
      <img src={img5} className="img-fluid rounded-start mt-5" alt="..." style={{width:'100%'}}/>
    </div>
    <div className="col-lg-6 col-6">
      <div className="card-body mt-md-5 mt-0">
        <h3 className="card-title text-black fw-bold mt-5">25% off</h3>
        <p className="card-text fs-4">Catch hotest <span className='fw-bold text-black'>Deals</span> in Cameras category</p>
        <button type='button' className='border-0 rounded text-white px-sm-3 ps-0 pe-2 py-2 mt-md-5 mt-3' style={{backgroundColor:'#ec685d'}}>Shop now <span><FontAwesomeIcon icon={faArrowRight} size='1x' className='arrow'/></span></button>
      </div>
    </div>
  </div>
</div>
          </div>
          <div className="col-lg-6">
          <div className="card mb-3 border-top-0 cardhorizontal" style={{width:'550px',height:'400px'}}>
      <div className="row g-0 ">
    <div className="col-lg-6 col-6">
      <img src={img4} className="img-fluid rounded-start" alt="..." style={{height:'390px'}}/>
    </div>
    <div className="col-lg-6 col-6">
      <div className="card-body mt-5">
        <h3 className="card-title text-black fw-bold mt-5">25% off</h3>
        <p className="card-text fs-4">Catch hotest <span className='fw-bold text-black'>Deals</span> in Cameras category</p>
        <button className=' ps-3 pe-3 py-0 rounded bg-white mt-md-5 mt-3' style={{borderColor:'#ec685d'}}><span className='fw-bolder fs-3'style={{color:'#ec685d'}}>$789</span></button>
      </div>
    </div>
  </div>
</div>
          </div>
        </div>
      </div>
      <div className="container">
      <div className="row d-flex justify-content-center my-md-5 my-3">
          <div className="col-lg-4">
            <h3 className='fw-bold text-center text-black'>
              Top Rated Product
            </h3>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 d-flex flex-wrap justify-content-around">
            {product.map((product,index)=>(
              <div className="card my-3 border-top-0" key={index} style={{width: "18rem",height:'22rem'}}>
                <div className='d-flex mt-2 mx-2'>
                  <h6>Top Rated</h6>
                  <FontAwesomeIcon icon={faHeart} size='1x' className='ms-auto'/>
                </div>
              <img src={product.image} className="card-img-top img-fluid" alt="..." style={{width:'100%',height:'250px'
              }}/>
              <div className="card-body overflow-hidden">
                <h5 className="card-title text-center fw-bold">{product.title}</h5>
                <p className="card-text fs-5 fw-bold" style={{color:'#ec685d'}}>${product.price}</p>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container-fluid">
      <div className="row my-md-5 my-3 mx-2">
          <div className="col-lg-4">
            <h3 className='fw-bold text-black'>
            Shop Product By
            </h3>
          </div>
        </div>
      </div>
      <div className="container my-3" style={{position:'relative'}}>
        <div className="row d-flex justify-content-center mx-md-5 rowimage" style={{backgroundImage:`url(${img10})`,backgroundRepeat:'no-repeat',backgroundColor:'#bccde0',borderRadius:'50px',position:'relative'}}>
          <div className="col-lg-4 ps-md-5" style={{marginTop:'100px'}}>
            <h1 className='text-black fw-bold'>Define Yourself Be
            Different</h1>
            <p className='fs-small text-muted'>These have large ear cups that encompass the ears, providing good sound isolation and often better sound quality.</p>
            <button type='button' className='border-0 rounded text-white px-sm-3 ps-0 pe-2 py-2 mt-md-5 mt-3 mb-3 ms-md-0 ms-5' style={{backgroundColor:'#ec685d'}}>Shop now <span><FontAwesomeIcon icon={faArrowRight} size='1x' className='arrow'/></span></button>
          </div>
        </div>
      </div>
      <div className="container-fluid" >
      <div className="row mx-2">
          <div className="col-lg-4">
            <h3 className='fw-bold text-black'>
            NEW ARRIVAL
            </h3>
          </div>
        </div>
  <div className="row">
    <div className="col-lg-12">
      <div id="carouselExampleIndicators1" className="carousel slide overflow-hidden" style={{paddingTop:'50px'}} data-bs-ride="carousel">
        <div className="carousel-indicators ">
          <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">     
          <div className="d-flex justify-content-around flex-wrap ">
            {products.map((product, index) => (
              <div className="card border-top-0 my-3" style={{ width: '15rem', height: '22rem' }} key={index}>
                <img src={product.image} className="card-img-top img-fluid" alt="..." style={{width:'100%',height:'100%'}}/>
                <div className="card-body overflow-hidden">
                  <h5 className="card-title text-center fw-bold">{product.title}</h5>
                  <div className="d-flex my-2">
                  <p className="card-text fs-5 fw-bold" style={{ color: '#ec685d' }}>
                    ${product.price}
                  </p>
                  <button className='rounded bg-white ms-auto' style={{borderColor:'#ec685d'}}><span className='fs-small' style={{color:'#ec685d'}}>Add To Cart</span></button>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
          <div className="carousel-item">
          <div className="d-flex justify-content-around flex-wrap ">
            {products.map((product, index) => (
              <div className="card border-top-0 my-3" style={{ width: '15rem', height: '22rem' }} key={index}>
                <img src={product.image} className="card-img-top img-fluid" alt="..." style={{width:'100%',height:'100%'}}/>
                <div className="card-body overflow-hidden">
                  <h5 className="card-title text-center fw-bold">{product.title}</h5>
                  <div className="d-flex my-2">
                  <p className="card-text fs-5 fw-bold" style={{ color: '#ec685d' }}>
                    ${product.price}
                  </p>
                  <button className='rounded bg-white ms-auto' style={{borderColor:'#ec685d'}}><span className='fs-small' style={{color:'#ec685d'}}>Add To Cart</span></button>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
          <div className="carousel-item">
          <div className="d-flex justify-content-around flex-wrap ">
            {products.map((product, index) => (
              <div className="card border-top-0 my-3" style={{ width: '15rem', height: '22rem' }} key={index}>
                <img src={product.image} className="card-img-top img-fluid" alt="..." style={{width:'100%',height:'100%'}}/>
                <div className="card-body overflow-hidden">
                  <h5 className="card-title text-center fw-bold">{product.title}</h5>
                  <div className="d-flex my-2">
                  <p className="card-text fs-5 fw-bold" style={{ color: '#ec685d' }}>
                    ${product.price}
                  </p>
                  <button className='rounded bg-white ms-auto' style={{borderColor:'#ec685d'}}><span className='fs-small' style={{color:'#ec685d'}}>Add To Cart</span></button>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
          <div className="carousel-item">
          <div className="d-flex justify-content-around flex-wrap">
            {products.map((product, index) => (
              <div className="card border-top-0 my-3" style={{ width: '15rem', height: '22rem' }} key={index}>
                <img src={product.image} className="card-img-top img-fluid" alt="..." style={{width:'100%',height:'100%'}}/>
                <div className="card-body overflow-hidden">
                  <h5 className="card-title text-center fw-bold">{product.title}</h5>
                  <div className="d-flex my-2">
                  <p className="card-text fs-5 fw-bold" style={{ color: '#ec685d' }}>
                    ${product.price}
                  </p>
                  <button className='rounded bg-white ms-auto' style={{borderColor:'#ec685d'}}><span className='fs-small' style={{color:'#ec685d'}}>Add To Cart</span></button>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="container my-md-5 my-3">
  <div className="row gap-5">
    <div className="col-md-4" style={{backgroundColor:'#bccde0',borderRadius:'50px'}}>
      <div className="row">
        <div className="col-md-5">
          <img src={img13} alt="" className='img-fluid' style={{width:'100%',height:'100%'}}/>
        </div>
        <div className="col-md-7 mt-5">
        <h3 className='text-black fw-bold'>Awesome Airbuds</h3>
            <p className='fs-small text-muted'>These have large ear cups that encompass the ears, providing good sound.</p>
            <button type='button' className='border-0 rounded text-white px-lg-3 ps-0 pe-2 py-2  mb-3 ms-md-0 ms-2' style={{backgroundColor:'#ec685d'}}>Shop now <span><FontAwesomeIcon icon={faArrowRight} size='1x' className='arrow'/></span></button>
        </div>
      </div>
    </div>
    <div className="col-md-7" style={{backgroundColor:'#bccde0',borderRadius:'50px'}}>
    <div className="row ">
    <div className="col-md-6 px-md-5 px-2 pt-md-5 pt-0 pb-5 order-md-1 order-2">
        <h3 className='text-black fw-bold'>Smart Watches</h3>
            <p className='fs-small text-muted'>These have watch that encompass the time, providing good sound</p>
            <button type='button' className='border-0 rounded text-white px-lg-3 ps-0 pe-2 py-2 mb-3 ms-md-0 ms-2' style={{backgroundColor:'#ec685d'}}>Shop now <span><FontAwesomeIcon icon={faArrowRight} size='1x' className='arrow'/></span></button>
        </div>
        <div className="col-md-6 order-md-2 order-1">
          <img src={img14} alt="" className='img-fluid' style={{width:'100%',height:'100%'}}/>
        </div>
       
      </div>
    </div>
  </div>
</div>
<div className="container-fluid my-md-3 my-2" style={{backgroundColor:'#bccde0'}}>
  <div className="row my-5">
    <div className="col-md-8 col-10 d-flex">
      <h3 className='text-black fw-bold heading ms-md-auto'>10% off when playing debit card</h3>
    </div>
    <div className="col-md-4 col-2 d-flex">
    <FontAwesomeIcon icon={faTag} size='3x' color='black' className='ms-auto'/>
    </div>
  </div>
</div>

    <div className="container my-md-5 my-3">
      <div className="row" id='margin'>
        <div className="col-md-6 order-md-1 order-2 ms-4">
          <p style={{color:'#ec685d'}} className='fs-4 fw-semibold'>Comment level</p>
          <h1 className='fw-bold text-black'>A new style in your Ear</h1>
          <div className="row d-flex flex-wrap gap-sm-5 gap-4">
            <div style={{backgroundColor:'#bccde0',borderRadius:'30px'}} className='col-5 pt-3'>
              <h1 style={{color:'#ec685d'}} className='fw-bold text-center'>4M+</h1>
              <p className='fw-bold text-black fs-5 text-center'>Users's</p>
            </div>
            <div style={{backgroundColor:'#bccde0',borderRadius:'30px'}} className='col-5 pt-3'>
              <h1 style={{color:'#ec685d'}} className='fw-bold text-center'>153K</h1>
              <p className='fw-bold text-black fs-5 text-center'>Purchaser</p>
            </div>
            <div style={{backgroundColor:'#bccde0',borderRadius:'30px'}} className='col-5 pt-3'>
              <h1 style={{color:'#ec685d'}} className='fw-bold text-center'>53K</h1>
              <p className='fw-bold text-black fs-5 text-center'>Gallery</p>
            </div>
            <div style={{backgroundColor:'#bccde0',borderRadius:'30px'}} className='col-5 pt-3'>
              <h1 style={{color:'#ec685d'}} className='fw-bold text-center'>2M+</h1>
              <p className='fw-bold text-black fs-5 text-center'>Feedback</p>
            </div>
          </div>
        </div>
        <div className="col-md-5 order-md-2 order-1">
          <img src={img15} alt="" style={{width:'100%',height:'100%'}} className='img-fluid'/>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Home
