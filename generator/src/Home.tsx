
import movies from './assets/db'
import { useState } from 'react'
import {motion} from 'framer-motion'
import Nav from './component/Nav';
const Home = () => {


    const [data,setdata]=useState<Movie | null>(null);
    type Movie={
    id:number
    title:string
    description:string
    releaseYear:number
    duration:number
    genre:string[]
    language:string
    ratingIMDB:number
    posterURL:string
}


    const getRandomId=():void=>{
        const random=Math.floor(Math.random() *movies.length)
        const selectedmovie=movies[random];
        setdata(selectedmovie)
    
    }



  
  return (
    <div className='flex flex-col bg-black'>
      <Nav/>
<div className=" flex flex-col justify-center items-center  min-h-screen gap-7"  >
       <motion.div className="flex flex-col   border-2 border-purple-500 w-[350px] sm:w-[400px] h-auto pb-5 shadow-md shadow-purple-600 rounded-xl" key={data?.id} initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} transition={{duration:1,ease: "easeOut"}}>
         <img src={data?.posterURL} alt=""  className='border-2 border-none rounded-t-xl'/>
         <div className='flex flex-col p-6 text-white gap-2'>
          <motion.p className='text-xl font-semibold' key={data?.id} initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} transition={{duration:1,ease: "easeOut"}}>{data?.title}</motion.p>
          <motion.p className='text-sm font-semibold' key={data?.id} initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} transition={{duration:1,ease: "easeOut"}}>{data?.description}</motion.p>
          <motion.p className='text-lg font-semibold bg-white p-1 rounded-lg border border-black w-20 text-black text-center 'key={data?.id} initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} transition={{duration:1,ease: "easeOut"}}>{data?.releaseYear}</motion.p>
          <div className='flex flex-row gap-2' >
            {data?.genre?.map((g,index)=>(
            <p className='bg-gray-400 text-white text-xs font-semibold rounded-lg  py-1 px-4  ' key={index}>{g}</p>
          ))}
          </div>
          <motion.p className='text-2xl font-bold text-yellow-500' key={data?.id} initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} transition={{duration:1,ease: "easeOut"}}>{data?.ratingIMDB}</motion.p>
         </div>
       
       </motion.div>
       <button className="px-4 py-2 bg-purple-500 shadow-sm cursor-pointer hover:bg-purple-400  shadow-purple-500 rounded-lg text-white font-semibold" onClick={getRandomId}>Generate Movie</button>
    </div>
    </div>
    
  )
}

export default Home
