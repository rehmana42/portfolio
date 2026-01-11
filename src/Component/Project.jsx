import { assets } from '@/assets/assets'
import { Button } from '@/components/ui/button'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { Tag } from 'lucide-react'
import React, { useEffect, useRef } from 'react'

const Project = () => {


// card object 

const cardObj=[
  {
  title:"online xerox app",
  image:assets.project1,
  des:"Print documents online without login, make secure payments, and track orders through a clean, user-friendly dashboard.",
  tag:'Web . Mern',
  href:'https://github.com/rehmana42/ApnaXerox.git'
  },
  {
    title:"Invoice Generator",
    image:assets.project2,
    des:"A fast and intuitive invoice generator that creates professional invoices with automatic calculations and PDF export.",
    tag:'Web . Mern',
    href:'https://github.com/rehmana42/Invoice.git'
  },
  {
    title:"Scrap Mart",
    image:assets.project3,
    des:"A digital scrap marketplace that connects sellers and dealers with real-time listings, bidding, and transparent pricing.",
    tag:'Web . Mern',
    href:'https://github.com/rehmana42/scrap_Mart.git'
  },

  {
    title:"rakt connect ",
    image:assets.project4,
    des:"A real-time blood donation platform that connects donors and patients instantly during emergencies.",
    tag:'App . flutter',
    href:'https://github.com/rehmana42/raktConnect.git'
  },


]


useEffect(()=>{
  cardObj.map((i)=>{
    console.log(i.title)
  })
},[])
const container=useRef()

  gsap.registerPlugin(ScrollTrigger)
  useGSAP(()=>{
    
    gsap.fromTo('#line',
      {width:'0vw'},
      {
      
      width:'clamp(120px, 10vw, 260px)'
,
      duration:2,
      delay:1,
      scrollTrigger:{
        trigger:'.dady ',
        
        start:' top 200vh ',
        end:'+=400',
        scrub:1.2,
        
         anticipatePin:1
      }
    })

    gsap.fromTo('.card',
      {
        autoAlpha:0,
        x:-30,
       
      },
      {

      autoAlpha:1,
      x:0,

      duration:1,
      stagger:{
        each:0.9,
        from:"start",

        
      },
     scrollTrigger:{
      trigger:'.card-group',
     
        start:' top  40% ',
        // end:"+=400",
        scrub:true,
        
       
        
        

       
     }

    })
  },{scope:'#project'})
  return (
    <div id='project'   className=' min-h-screen   w-full flex  ga-5   items-center'>

  <section className=" dady     w-full flex  flex-col  items-center  gap-10  ">
      <div   className=''>
        <h1 className='  mt-5  capitalize logo font-bold text-2xl text-slate-400'>my work</h1>
        <div id='line' className=' h-2   rounded-2xl bg-emerald-600'></div>
      </div>
    {/* card pattern  */}
    <div  className=" card-group w-full max-w-7xl mx-auto mb-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
{/* {
  cardObj.map((item,index)=>( */}

{/* card 1 */}
 
    <div
    // id={index}
  className="
  mb-2
    card
    group
     h-[55vh]
    sm:h-[32vw]
    bg-[#0f172a]
    rounded-3xl
    overflow-hidden
    border border-white/10
    transition-all duration-500
    hover:border-emerald-400/40
  "
>
  {/* IMAGE */}
  <div className="relative h-[55%] w-full overflow-hidden">
    <img
      src={assets.project1}
      alt="Project"
      className="
        w-full h-full
        object-cover
        transition-transform duration-700
        group-hover:scale-110
      "
    />

    {/* top label */}
    <span className="
      absolute top-4 left-4
      text-xs uppercase tracking-widest
      bg-black/60 text-white
      px-3 py-1 rounded-full
    ">
      Featured
    </span>
  </div>

  {/* CONTENT */}
  <div className="h-[45%] flex flex-col justify-between px-6 py-5">
    
    {/* TEXT */}
    <div className="space-y-2">
      <h3 className="text-xl font-semibold text-white tracking-tight">
      online xerox app
      </h3>

      <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
      Print documents online without login, make secure payments, and track orders through a clean, user-friendly dashboard.
      </p>
    </div>

    {/* FOOTER */}
    <div className="flex mt-5 items-center justify-between pt-3">
      <span className="text-xs text-emerald-400 font-medium tracking-wide">
       {/* {item.tag} */}
       Web . Mern
      </span>

      <button
      onClick={()=>{window.open('https://github.com/rehmana42/ApnaXerox.git')}}
        className="
          text-sm font-medium text-white
          flex items-center gap-2
          group-hover:text-emerald-400
          transition
        "
      >
        View Project →
      </button>
    </div>
  </div>
</div>
{/* 
card 2 */}

<div
    // id={index}
  className="
  mb-2
    card
    group
     h-[55vh]
    sm:h-[32vw]
    bg-[#0f172a]
    rounded-3xl
    overflow-hidden
    border border-white/10
    transition-all duration-500
    hover:border-emerald-400/40
  "
>
  {/* IMAGE */}
  <div className="relative h-[55%] w-full overflow-hidden">
    <img
      src={assets.project2}
      alt="Project"
      className="
        w-full h-full
        object-cover
        transition-transform duration-700
        group-hover:scale-110
      "
    />

    {/* top label */}
    <span className="
      absolute top-4 left-4
      text-xs uppercase tracking-widest
      bg-black/60 text-white
      px-3 py-1 rounded-full
    ">
      Featured
    </span>
  </div>

  {/* CONTENT */}
  <div className="h-[45%] flex flex-col justify-between px-6 py-5">
    
    {/* TEXT */}
    <div className="space-y-2">
      <h3 className="text-xl font-semibold text-white tracking-tight">
      Invoice Generator"
      </h3>

      <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
      A fast and intuitive invoice generator that creates professional invoices with automatic calculations and PDF export.
      </p>
    </div>

    {/* FOOTER */}
    <div className="flex mt-5 items-center justify-between pt-3">
      <span className="text-xs text-emerald-400 font-medium tracking-wide">
       {/* {item.tag} */}
       Web . Mern
      </span>

      <button
      onClick={()=>{window.open('https://github.com/rehmana42/Invoice.git')}}
        className="
          text-sm font-medium text-white
          flex items-center gap-2
          group-hover:text-emerald-400
          transition
        "
      >
        View Project →
      </button>
    </div>
  </div>
</div>

{/* card 3 */}

<div
    // id={index}
  className="
  mb-2
    card
    group
     h-[55vh]
    sm:h-[32vw]
    bg-[#0f172a]
    rounded-3xl
    overflow-hidden
    border border-white/10
    transition-all duration-500
    hover:border-emerald-400/40
  "
>
  {/* IMAGE */}
  <div className="relative h-[55%] w-full overflow-hidden">
    <img
      src={assets.project3}
      alt="Project"
      className="
        w-full h-full
        object-cover
        transition-transform duration-700
        group-hover:scale-110
      "
    />

    {/* top label */}
    <span className="
      absolute top-4 left-4
      text-xs uppercase tracking-widest
      bg-black/60 text-white
      px-3 py-1 rounded-full
    ">
      Featured
    </span>
  </div>

  {/* CONTENT */}
  <div className="h-[45%] flex flex-col justify-between px-6 py-5">
    
    {/* TEXT */}
    <div className="space-y-2">
      <h3 className="text-xl font-semibold text-white tracking-tight">
      Scrap Mart
      </h3>

      <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
      A digital scrap marketplace that connects sellers and dealers with real-time listings, bidding, and transparent pricing.
      </p>
    </div>

    {/* FOOTER */}
    <div className="flex mt-5 items-center justify-between pt-3">
      <span className="text-xs text-emerald-400 font-medium tracking-wide">
       {/* {item.tag} */}
       Web . Mern
      </span>

      <button
      onClick={()=>{window.open('https://github.com/rehmana42/scrap_Mart.git')}}
        className="
          text-sm font-medium text-white
          flex items-center gap-2
          group-hover:text-emerald-400
          transition
        "
      >
        View Project →
      </button>
    </div>
  </div>
</div>

 {/* card 4 */}

 <div
    // id={index}
  className="
  mb-2
    card
    group
     h-[55vh]
    sm:h-[32vw]
    bg-[#0f172a]
    rounded-3xl
    overflow-hidden
    border border-white/10
    transition-all duration-500
    hover:border-emerald-400/40
  "
>
  {/* IMAGE */}
  <div className="relative h-[55%] w-full overflow-hidden">
    <img
      src={assets.project8}
      alt="Project"
      className="
        w-full h-full
        object-cover
        transition-transform duration-700
        group-hover:scale-110
      "
    />

    {/* top label */}
    <span className="
      absolute top-4 left-4
      text-xs uppercase tracking-widest
      bg-black/60 text-white
      px-3 py-1 rounded-full
    ">
      Featured
    </span>
  </div>

  {/* CONTENT */}
  <div className="h-[45%] flex flex-col justify-between px-6 py-5">
    
    {/* TEXT */}
    <div className="space-y-2">
      <h3 className="text-xl font-semibold text-white tracking-tight">
      Rakt Connect 
      </h3>

      <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
      A real-time blood donation platform that connects donors and patients instantly during emergencies.
      </p>
    </div>

    {/* FOOTER */}
    <div className="flex mt-5 items-center justify-between pt-3">
      <span className="text-xs text-emerald-400 font-medium tracking-wide">
       {/* {item.tag} */}
       App . Flutter
      </span>

      <button
      onClick={()=>{ window.open('https://github.com/rehmana42/raktConnect.git')}}
        className="
          text-sm font-medium text-white
          flex items-center gap-2
          group-hover:text-emerald-400
          transition
        "
      >
        View Project →
      </button>
    </div>
  </div>
</div>


</div>

      </section>
    </div>
  )
}

export default Project