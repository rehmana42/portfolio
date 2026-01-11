

import React, { useEffect, useState } from 'react'
import ThemeToggle from '@/Component/ThemeToggle'
import {AnimatePresence, motion, scale} from 'motion/react'
import { Menu, X } from 'lucide-react'

const NavBar = () => {

  const [open,setOpen]=useState(false)

  return (
    <div className=' bg-transparent overflow-x-hidden'>

        <div className='   cursor-pointer  w-full  h-16   flex justify-between items-center  px-6'>
           <h1  className=' font-extrabold  text-2xl sm:text-2xl heading'>
            <span>Abdul</span>
            <span>rehman</span>
           </h1>

           


           <div className="   sm:flex font-medium text-lg fontB list-none  gap-6 items-center justify-center">
            <div  className=' hidden  sm:flex font-medium text-lg fontB list-none  sm:gap-6 items-center" '>
  {[{name:'home',id:'#hero'},{name:"About",id:"#about" }, {name:"Project", id:"#project"}, {name:"Contact", id:"#contact"}].map((item) => (
    <li
      key={item}
      className="group relative cursor-pointer px-1"
    >
      <span className="transition-all duration-300 ease-out group-hover:text-red-500">
        <a href={item.id}>{item.name}</a>
      </span>

      {/* modern indicator */}
      <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-red-500 
        transition-all duration-300 ease-out 
        group-hover:w-full group-hover:left-0" />

        
    </li>
   
  ))}
  </div>

<div className='  flex items-center gap-5'>


<motion.button 
  animate={{rotate: open ? 200: 180 , duration:1 }}
onClick={()=>{setOpen(!open)}}>
  {
    open? <X/>:<Menu size={25} className=' sm:hidden'/>
  }

</motion.button>
</div>


</div>



</div>

{/* mobile view  */}
<AnimatePresence>
{
    open &&
<motion.div

initial={{ y: "100%" }}
animate={{ y: 0 }}
exit={{ y: "100%" }}
transition={{ duration: 0.4, ease: "easeInOut" }}
   className={`  sm:hidden w-full  h-screen   bg-transparent  `}
  >
   < motion.div
       whileTap={{scaleX:0.3}}
       transition={{
         duration: 0.4,
         ease: "easeOut"
       }}
         
   className={` flex   fontB  text-2xl font-semibold  dark:hover:bg-gray-500 hover:bg-gray-200  rounded-md backdrop-blur-lg h-16 w-full`}>
    <a href='#home'  className='  mt-5 ml-7'> Home</a>
    </motion.div> 
       {/* abdout section */}

    < motion.div
       whileTap={{scaleX:0.3}}
       transition={{
         duration: 0.4,
         ease: "easeOut"
       }}
         
   className={` flex   fontB  text-2xl font-semibold  dark:hover:bg-gray-500 hover:bg-gray-200  rounded-md backdrop-blur-lg h-16 w-full`}>
    <a  href='#about' className='  mt-5 ml-7'> About</a>
    </motion.div> 
       {/* project section */}
    < motion.div
       whileTap={{scaleX:0.3}}
       transition={{
         duration: 0.4,
         ease: "easeOut"
       }}
         
   className={` flex   fontB  text-2xl font-semibold  dark:hover:bg-gray-500 hover:bg-gray-200  rounded-md backdrop-blur-lg h-16 w-full`}>
    <a  href='#project' className='  mt-5 ml-7'> project</a>
    </motion.div> 
        {/* contact section */}
    < motion.div
       whileTap={{scaleX:0.3}}
       transition={{
         duration: 0.4,
         ease: "easeOut"
       }}
         
   className={` flex   fontB  text-2xl font-semibold  dark:hover:bg-gray-500 hover:bg-gray-200  rounded-md backdrop-blur-lg h-16 w-full`}>
    <a  href='#contact' className='  mt-5 ml-7'> Contact</a>
    </motion.div> 

  </motion.div>
}
</AnimatePresence>
  
    </div>
  )
}

export default NavBar