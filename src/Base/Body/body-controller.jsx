import React, { useState } from 'react'
import axios from 'axios';

const BodyControler = () => {
  const [data, setData] = useState();
  const fetchData = async () => {
      try{
        const rep = await axios.get('https://api.github.com/users/MarcoCastellaniJR/repos')
        //const rep = await axios.get('localhost:3030/users/ses')
        console.log(rep.data);
        setData(rep.data)
        // if (!rep.id) {
        //   throw new Error('Network rep was not ok');
        // }
        console.log('2');
        const result = await rep.json()
        //setData(result)
        }catch(err){
        console.log(err);
      }
      
  }
  
  return (
    <>
      <h1>Body Controller</h1>
      <button name="Teste" onClick={() => {
        fetchData()
      }}> TEste</button>
      {data.name && <div>Data: {JSON.stringify(data)}</div>}
    </>
  )
}

export default BodyControler
