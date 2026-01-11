import { assets } from '@/assets/assets'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const skills = [
  assets.css,
  assets.supabase,
  assets.flutter,
  assets.html,
  assets.react,
  assets.nextjs,
  assets.mysql,
  assets.github,
  assets.git,
  assets.node,
  assets.tailwind,
  assets.python,
  assets.vscode,
]

const Skills = () => {
  const trackRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    const items = track.children

    // total width of all items
    const totalWidth = track.scrollWidth / 2

    const marquee = gsap.to(track, {
      x: -totalWidth,
      duration: 10,
      ease: "linear",
      repeat: -1,
    })

    // pause on hover
    track.addEventListener("mouseenter", () => marquee.pause())
    track.addEventListener("mouseleave", () => marquee.play())

    return () => marquee.kill()
  }, [])

  return (
    <div id='skill' className="w-full  h-auto mt-5 mb-5  flex flex-col   items-center  overflow-hidden">
      
      <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-8">
        Tech Stack
      </h1>

      {/* VIEWPORT */}
      <div className="w-full overflow-hidden">
        
        {/* TRACK */}
        <div
          ref={trackRef}
          className="flex gap-6 w-max"
        >
          {/* Duplicate list for seamless loop */}
          {[...skills, ...skills].map((img, index) => (
            <div
              key={index}
              className="
                w-14 h-14
                sm:w-16 sm:h-16
                md:w-18 md:h-18
                lg:w-20 lg:h-20
                rounded-xl
                bg-white/10
                backdrop-blur
                shadow-md
                flex items-center justify-center
                flex-shrink-0
              "
            >
              <img
                src={img}
                alt="skill"
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
