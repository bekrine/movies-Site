import  Card  from './compennets/Card';
import {useEffect,useState} from 'react'
import {getMovise} from "./api/apiCall";
import Navbar from './compennets/Navbar';

function App() {
useEffect(()=>{
  getd()
},[])
 
const [movise,setMovise]=useState()
const [toggle,setToggle]=useState(false)
const  getd =async()=>{

  const res= await getMovise()
  setMovise(res.data)
  console.log(res.data);
}

 const show=(e)=>{
  //  e.target.classList.add('active')
  setToggle(true)
 }
 const hidde=()=>{
   setToggle(false)
 }
  return (
    <>
    <Navbar/>
     <Card hidde={hidde} show={show} toggle={toggle} movise={movise}/>
    </>
  );
}

export default App;
