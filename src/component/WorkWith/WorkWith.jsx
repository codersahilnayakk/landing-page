import React from 'react';
import './WorkWith.css'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const IconLottie = () => {
  return (
    <DotLottieReact
      src="https://lottie.host/53551254-6ecc-48cd-b089-9271585cfc16/toqJUuXVDc.lottie"
      loop
      autoplay
      style={{
        width: '582px',
        height: '582px',
      }}
    />
  );
};



const WorkWith = () => {

    return (
        <>
            <div className="ww-container">
                <div className="ww-left">
                    <div className="ww-box-1">
                        <div  >Built for the Real World</div>
                        <div className='ww-heading'  >Immersive VR for Every Industry</div>
                        <h3  >Virtual reality isn’t one-size-fits-all—and neither are your training needs. At The Wise Blend, we develop immersive VR solutions tailored to the unique demands of every industry. Train smarter, faster, and more impactfully with experiences designed to drive real results, no matter your sector.
                        </h3>
                    </div>
                </div>
                <div className="ww-right">
                    <div>
                      {/* <img style={{mixBlendMode:"difference"}} src="assets/by-1.gif" alt="" /> */}
                      <IconLottie/>
                    </div>

                </div>
            </div>
        </>
    )
}

export default WorkWith
