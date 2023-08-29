'use client'

import { useEffect, useState } from "react";
import { isMobileCheck } from "./shared";
import { BLURB_1, DEVELOPER_NAME, EMPLOYER_WEBSITE_URL, EMPLOYMENT_TAG_LINE } from "./app-config";

let mousePositionY: number = 0
let intersectionObserver: IntersectionObserver | undefined = undefined

export default function Home() {
  const [isPageScrolled, setIsPageScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false)
  const [showMobileNav, setShowMobileNav] = useState(false)

  useEffect(() => {
    setIsMobile(isMobileCheck())
    document.addEventListener('scroll', () => {
      setIsPageScrolled(global.scrollY > 0)
      const pointer: HTMLElement = document.querySelector('.ambient-occlusion') as HTMLElement;
      pointer.style.top = (mousePositionY + scrollY) + 'px'
    })
    window.addEventListener('resize', () => {
      setIsMobile(isMobileCheck())
    })

    document.addEventListener('mousemove', (event) => {
      const pointer: HTMLElement = document.querySelector('.ambient-occlusion') as HTMLElement;
      pointer.style.left = event.clientX + 'px'
      mousePositionY = event.clientY
      pointer.style.top = (event.clientY + global.scrollY) + 'px'
    });

    if(!intersectionObserver) {
      let about_checkpoint = document.getElementById('about-checkpoint') as HTMLElement
      let experience_checkpoint = document.getElementById('experience-checkpoint') as HTMLElement
      let projects_checkpoint = document.getElementById('projects-checkpoint') as HTMLElement

      var observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if(entry.isIntersecting) {
            console.log(entry.target.id)
          }
        });
      });
      observer.observe(about_checkpoint);
      observer.observe(experience_checkpoint);
      observer.observe(projects_checkpoint);


    }


  })

  return (
    <main className="flex flex-row justify-center bg-primary text-tertiary w-screen h-fit scroll-smooth">
      <div className="ambient-occlusion"></div>
      <div className="sticky top-0 flex flex-col h-fit w-[20vw] pt-32">
        <p className="text-6xl font-bold">{DEVELOPER_NAME}</p>
        {
          EMPLOYER_WEBSITE_URL ?
          <p className="text-xl font-semibold hover:cursor-pointer"><a href={EMPLOYER_WEBSITE_URL}>{EMPLOYMENT_TAG_LINE}</a></p>
          :
          <p className="text-xl font-semibold">{EMPLOYMENT_TAG_LINE}</p>
        }
        <p className="text-xl font-semibold hover:cursor-pointer"><a href={EMPLOYER_WEBSITE_URL}>{EMPLOYMENT_TAG_LINE}</a></p>
        <p className="text-lg font-thin text-tertiary/50">{BLURB_1}</p>
      </div>
      <div className="flex flex-col h-fit w-[40vw] m-8">
      <div id='about-checkpoint'></div>
        <div className="bg-secondary/50 rounded-lg h-[500px] w-full m-16"></div>
        <div className="bg-secondary/50 rounded-lg h-[500px] w-full m-16"></div>
        <div className="bg-secondary/50 rounded-lg h-[500px] w-full m-16"></div>
        <div className="bg-secondary/50 rounded-lg h-[500px] w-full m-16"></div>
        <div id='experience-checkpoint'></div>
        <div className="bg-secondary/50 rounded-lg h-[500px] w-full m-16"></div>
        <div className="bg-secondary/50 rounded-lg h-[500px] w-full m-16"></div>
        <div className="bg-secondary/50 rounded-lg h-[500px] w-full m-16"></div>
        <div className="bg-secondary/50 rounded-lg h-[500px] w-full m-16"></div>
        <div id='projects-checkpoint'></div>
        <div className="bg-secondary/50 rounded-lg h-[500px] w-full m-16"></div>
        <div className="bg-secondary/50 rounded-lg h-[500px] w-full m-16"></div>
        <div className="bg-secondary/50 rounded-lg h-[500px] w-full m-16"></div>
        <div className="bg-secondary/50 rounded-lg h-[500px] w-full m-16"></div>
      </div>
    </main>
  )
}