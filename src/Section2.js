import React from 'react'
import './App.css';
function Section2(props) {
  return (
    <section className='section2'>
        <div className='detals'>
            <i>{props.icon}</i>
            <h3>{props.text1}</h3>
            <p>{props.text2}</p>
            <br/>
            <p>{props.text3}</p>
            <img src={props.nkar0}   className="nkar"></img>
            </div>
    </section>
  )
}

export default Section2