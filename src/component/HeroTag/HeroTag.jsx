import React from 'react'
import { FaGamepad } from "react-icons/fa";
import { MdImportantDevices } from "react-icons/md";
import { TbCalendarMonth } from "react-icons/tb";
import { SiMuller } from "react-icons/si";
import './HeroTag.css'

const HeroTag = () => {
    return (
        <>
            <div className="tages">
                <div className="tag-content">
                <div className='box2'>
                    <div className="icon">
                        <FaGamepad />
                    </div>
                    <div>Make training immersive.</div>
                </div>
                <div  className='box2'>
                    <div className="icon">
                        <MdImportantDevices />
                    </div>
                    <div>Accessible across headsets & devices.</div>
                </div>
                <div  className='box2'>
                    <div className="icon">
                        <TbCalendarMonth />
                    </div>
                    <div>Launch fast. Scale instantly.</div>
                </div>
                <div  className='box2'>
                    <div className="icon">
                        <SiMuller />
                    </div>
                    <div>Simulate real-world challenges safely.</div>
                </div>
                </div>
            </div>
        </>
    );
}

export default HeroTag
