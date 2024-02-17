import React,{useState,useRef} from 'react'
import { FaPlus,FaMinus } from "react-icons/fa";
import bestImg from "../Components/bestImg.png";
import amazeImg from "../Components/amazeImg.png";
import wideImg from "../Components/wideImg.png";
export default function Section() {
    const [bq,setBq]=useState(false);
    const [ap,setAp]=useState(false);
    const [col,setCol]=useState(false);

    
    const handleBq=()=>{
        bq ? setBq(false): setBq(true);
        setAp(false);
        setCol(false);
    }
    const handleAp=()=>{
        ap ? setAp(false): setAp(true);
        setBq(false);
        setCol(false);
    }
    const handleCol=()=>{
        col ? setCol(false): setCol(true);
        setBq(false);
        setAp(false);
    }
  

  return (
    <div className='element-container'>
      < div className='element' onClick={handleBq}>
        <div className='content'>
            {bq ? <FaMinus className='i'/> : <FaPlus className='i'/>}
            <h5 className='element-text'>Best Quality</h5>
        </div>
        <div className={bq ? "img-container open":"img-container"}>
          <div className="inner1">
          <img src={bestImg} alt="Best-Quality" className='element-img' />
          </div>
        </div>
      </div>
      <div className='element'>
        <div className="content" onClick={handleAp}>
            {ap ? <FaMinus className='i'/> : <FaPlus className='i'/>}
            <h5 className='element-text'>Amazing Prices</h5>
        </div>
        <div className={ap ? "img-container open":"img-container"}>
          <div className="inner1">
            <img src={amazeImg} alt="Amazing-prices" className='element-img'/>
          </div>
        </div>
      </div>
      <div className='element'>
        <div className="content" onClick={handleCol}>
            {col ? <FaMinus className='i'/> : <FaPlus className='i'/>}
            <h5 className='element-text'>Wide Range of Collections</h5>
        </div>
        <div className={col ? "img-container open":"img-container"}>
          <div className="inner1">
          <img src={wideImg} alt="Wide-Range" className='element-img'/>
          </div>
        </div>
      </div>
    </div>
  )
}
