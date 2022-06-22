import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../assets/images/img1.jpg'

function Slider(props) {
  return (
    <div className='is-flex is-justify-content-center'>
         <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showStatus={false} centerMode={true}>
                <div>
                    <img src={props.img1 || 'https://via.placeholder.com/1280x300'}  width={150} />
                </div>
                <div>
                    <img src={props.img2 || 'https://via.placeholder.com/1280x300'} width={150}  />
                </div>
                <div>
                    <img src={props.img3 || 'https://via.placeholder.com/1280x300'} width={150}  />
                </div>
                <div>
                    <img src={props.img4 || 'https://via.placeholder.com/1280x300'} width={150}  />
                </div>
                <div>
                    <img src={props.img5 || 'https://via.placeholder.com/1280x300'} width={150}  />
                </div>
                <div>
                    <img src={props.img6 || 'https://via.placeholder.com/1280x300'} width={150}  />
                </div>
            </Carousel>
    </div>
  )
}

export default Slider