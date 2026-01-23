import axios from 'axios';
import { useState } from 'react';

function App() {

  const [data, setData] = useState([])

  const getData = async() =>{

    const Response = await axios.get("https://jsonplaceholder.typicode.com/posts");

    setData(Response.data)
    

  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>  
      <div>
        {data.map((ele,idx)=>{
          return <h1>Hello,{ele.title},{idx}</h1>

        })}
      </div>
     
    </div>
  )
}

export default App