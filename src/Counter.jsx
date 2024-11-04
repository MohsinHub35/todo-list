import { useState } from "react";
export default function Counter(){
  const[count,setCount]=useState(0);
  function inccount(){
    setCount(count+10);
    console.log(count);
 }
 return (
    <>
      <h1>Count = {count}</h1>
      <button onClick={inccount}>Submit</button>
    </>

 );
}