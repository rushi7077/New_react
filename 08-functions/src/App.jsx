import React from 'react'

function App() {

function onChanging(val){
  console.log(val);
  
}
const onClicking= ()=> {
  console.log("clicking");
  
};



  return (
    <div className='flex align-center justify-center flex-col'>
      <input className='m-2 p-5 h-screen text-center bg-amber-200' onChange={(ele)=>{
        onChanging(ele.target.value)
      }} type="text" placeholder='Enter the name' />
      <button onClick={onClicking}>click</button>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
    
  )
}

export default App