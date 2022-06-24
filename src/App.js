import { Routes,Route } from 'react-router-dom';
import {useEffect,useState} from 'react'
import {getMovise} from "./api/apiCall";
import Home from './compennets/Home'
import DetailMovise from './compennets/DetailMovise'
import Recherche from './compennets/Recherche';
import  Card  from './compennets/Card';
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
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/detailmovise' element={<DetailMovise/>}/>
    <Route path='/recherch' element={<Recherche/>}/>
     <Card hidde={hidde} show={show} toggle={toggle} movise={movise}/>
    </Routes>
    </>
  );
}

export default App;
