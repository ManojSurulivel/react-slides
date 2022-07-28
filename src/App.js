import React,{useState} from 'react';
import './App.css'

function Slides({slides}) {
  const [position,setPosition] = useState(0)

  const isNextDisabled = position === slides.length-1
  const isPrevDisabled = position === 0

  return (
  <div className='slider'>
  <div id="navigation" className="text-center">
  <button data-testid="button-restart" className="small outlined" disabled={isPrevDisabled} onClick={()=>{
    setPosition(0)
  }}>Restart</button>
  <button data-testid="button-prev" className="small" onClick={()=>{
    setPosition(position -1)
  }} disabled={isPrevDisabled}>Prev</button> <button
  data-testid="button-next" className="small" onClick={()=>{
    setPosition(position +1)
  }} disabled={isNextDisabled}>Next</button> </div>
  <div id="slide" className="card text-center">
  <h1 data-testid="title">{slides[position].title}</h1>
  <p data-testid="text">{slides[position].text}</p>
  </div>
  </div>
  );
  
  }
  
  export default Slides;