import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass,faAngleDown} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function SideBar({sideClose,side}) {
    const egf=["Men - Eye Glasses Frames","Women - Eye Glasses Frames","Kids - Eye Glasses Frames"];
    const [drop1,setDrop1]=useState(false);
    const [drop2,setDrop2]=useState(false);
    const handleClick=()=>{
        drop1?setDrop1(false):setDrop1(true);
    }
    const handleClick2=()=>{
        drop2?setDrop2(false):setDrop2(true);
    }
    const handleSide=()=>{
        sideClose();
    }
  return (
    <div className='slider1-container'>
   <div className={side?"inner-side active":"inner-side"}>
        <div className='d-flex search-contain'>
            <span className='search-wrap'>
                <input type="text" placeholder='Search Products.....' className="search-bar"/>
                <button className='search-icon'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </span>
        </div>
        <ul className='list-links'>
            <li className='link-contain'>
                <a href="/Home/" className='side-link'>Home</a>
            </li>
            <li className='link-contain'>
                <a href="/EyeGlassesFrames/" className='side-link'>Eye Glasses Frames</a>
                <span className='d-icon' onClick={handleClick}><FontAwesomeIcon icon={faAngleDown} /></span>
            </li>
            <li>
                <div className={drop1?"wrapper is-open":"wrapper"}>
                    <div className='flex'>
                        <div className="inner">
                        <ul className='drop-menu'>
                            {egf.map((e,i)=>{
                                return(
                                    <li className='link-contain' key={i}>
                                        <a href={`${e}`} className='side-link'>{e}</a>
                                    </li>
                                )
                            })}
                        </ul>
                        </div>
                    </div>
                </div>
            </li>
            <li className='link-contain'>
                <a href="/Sun Glasses/" className='side-link'>Sun Glasses</a>
                <span className='d-icon' onClick={handleClick2}><FontAwesomeIcon icon={faAngleDown} /></span>
            </li>
            <li>
                <div className={drop2?"wrapper is-open":"wrapper"}>
                    <div className='flex'>
                        <div className="inner">
                        <ul className='drop-menu'>
                            {egf.map((e,i)=>{
                                return(
                                    <li className='link-contain' key={i}>
                                        <a href={`${e}`} className='side-link'>{e}</a>
                                    </li>
                                )
                            })}
                        </ul>
                        </div>
                    </div>
                </div>
            </li>
            <li className='link-contain'>
                <a href="/Contact Lenses/" className='side-link'>Contact Lenses</a>
            </li>
            <li className='link-contain'>
                <a href="/Our Stores/" className='side-link'>Our Stores</a>
            </li>
            <li className='link-contain'>
                <a href="/Login/" className='side-link'>Login/Register</a>
            </li>
        </ul>
        
        </div>
        <div className={side?"inner2":"inner2 d-none"} onClick={handleSide}></div>
    </div>

   
  )
}
