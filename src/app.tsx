// import { useState, useEffect, useRef } from 'preact/hooks'
import React, { useState, useEffect, useRef } from 'react'

// import './app.css'


export function App() {
  const [inputValue, setInputValue] = useState('')
  const [message, setMessage] = useState('');
  const [count, setCount] = useState(0)
  const [multiplied, setMultiply] = useState(1)
  const inputRef = useRef(null) as any
  const [fontSize, setFontSize] = useState(16)
  const [count2, setCount2] = useState(1)
  const [inputValue2, setInputValue2] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const selectedColorBoxRef = useRef(null) as any
  const countRef = useRef(null) as any
  const ColorChangeRef = useRef(null) as any
  const moveBoxRef = useRef(null) as any
  const disabledBtnRef = useRef(null) as any


  const focus = () => {
    inputRef.current.focus()
  }
  
  function multiplyByTwo() {
    setMultiply(prevcount => prevcount * 2)
  }

  function addCount() {
    setCount(prevcount => prevcount + 1)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setMessage(inputValue)
  }

  function addCount2() {
    setCount2(prevcount => prevcount + 1)
  }

  useEffect(() => {
    disabledBtnRef.current.disabled = true
    setTimeout(() => {
      disabledBtnRef.current.disabled = false;
  }, 5000)
    console.log('FIRST RENDER')
  }, [])

  useEffect(() => {
    console.log('RENDER')
  })

  useEffect(() => {
    console.log('CHANGING COUNT')
  }, [count2])

  useEffect(() => {
    console.log('INPUT CHANGE')
  }, [inputValue2])


  const incrementFontSize = () => {
    setFontSize(prevcount => prevcount + 1)
    countRef.current.style.fontSize = `${fontSize}px`;
  }

  const changeBoxColor = () => {
    ColorChangeRef.current.style.backgroundColor = "gold";
  }

  const moveBox = () => {
    moveBoxRef.current.style.position = "absolute";
    moveBoxRef.current.style.top = "0";
    moveBoxRef.current.style.right = "0";
    moveBoxRef.current.innerHTML = "ESMU STŪRĪ";
    moveBoxRef.current.style.textAlign = "center";
  }

  const applySelectedColor = () => {
    selectedColorBoxRef.current.style.backgroundColor = selectedColor;
  }

  

  return (
    <>
     <div className="input_wrapper wrap">
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} autofocus onChange={(e) => setInputValue((e.target as HTMLInputElement).value)}/>
        <button ref={disabledBtnRef} className="btn" onClick={focus}>SUBMIT</button>
        <div>{message}</div>
      </form>
     </div>
     <div className="count__wrapper wrap">
      <button onClick={()=>{ multiplyByTwo(); addCount() }}>Count: {count}</button>
      <div>{multiplied}</div>
     </div>
     <div className="color-selector wrap">
      <button onClick={applySelectedColor}>+</button>
      <select name="cars" id="cars" onChange={(e) => setSelectedColor((e.target as HTMLInputElement).value)}>
        <option value="red" className='option-red'>Red</option>
        <option value="green" className='option-green'>Green</option>
        <option value="blue" className='option-blue'>Blue</option>
      </select>
      <div ref={selectedColorBoxRef} className="selectedColorBox"></div>
     </div>
     <div className="wrap">
      <button onClick={()=>{ addCount2(); incrementFontSize() }}>+</button>
      <span className="size" ref={countRef}>{count2}</span>
      <input type="text" onChange={(e) => setInputValue2((e.target as HTMLInputElement).value)}/>
      <span>{inputValue2}</span>
     </div>
     <div className="change-box-color wrap">
      <button onClick={changeBoxColor}>CHANGE COLOR</button>
      <div className="box" ref={ColorChangeRef}></div>
     </div>
     <div className="move-box wrap">
      <div className="moving-box" ref={moveBoxRef}></div>
      <button onClick={moveBox}>SEND DIV TO CORNER</button>
     </div>
    </>
  )
}
