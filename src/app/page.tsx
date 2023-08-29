'use client'

import { useEffect, useState } from "react";
import { isMobileCheck } from "./shared";
import { BLURB_1, DEVELOPER_NAME, EMPLOYER_WEBSITE_URL, EMPLOYMENT_TAG_LINE, PAGE_SECTIONS, scrollEasingsFunction } from "./app-config";
import animateScrollTo from "animated-scroll-to";

let mousePositionY: number = 0
let intersectionObserver: IntersectionObserver | undefined = undefined
let pageKey = 0

export default function Home() {
  const [isPageScrolled, setIsPageScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [showMobileNav, setShowMobileNav] = useState(false)
  const [currentSection, setCurrentSection] = useState('')

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
    let about_checkpoints = [].slice.call(document.getElementsByClassName('about-checkpoint'))
    let experience_checkpoints = [].slice.call(document.getElementsByClassName('experience-checkpoint'))
    let projects_checkpoints = [].slice.call(document.getElementsByClassName('projects-checkpoint'))
    if(!intersectionObserver && about_checkpoints.length > 0 && about_checkpoints.length > 0 && about_checkpoints.length > 0) {
      var observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if(entry.isIntersecting == true) {
            handleIntersectionEntry(entry, setCurrentSection)
          }
        });
      }, {
        threshold: 1.0
      });
  
      let checkpoints = about_checkpoints.concat(experience_checkpoints).concat(projects_checkpoints)
      checkpoints.forEach((checkpoint) => {
        observer.observe(checkpoint);
      })
    }
  })

  let mainContentHtml: React.JSX.Element[] = []
  PAGE_SECTIONS.forEach((section) => {
    let sectionHTML = [
      <p id={`${section.cssClassName}-header`} key={`home-${pageKey++}`} className={section.cssClassName}>{section.display}</p>,
      <div key={`home-${pageKey++}`} className={`bg-secondary/50 rounded-lg h-[500px] w-full m-16 ${section.cssClassName}`}></div>,
      <div key={`home-${pageKey++}`} className={`bg-secondary/50 rounded-lg h-[500px] w-full m-16 ${section.cssClassName}`}></div>,
      <div key={`home-${pageKey++}`} className={`bg-secondary/50 rounded-lg h-[500px] w-full m-16 ${section.cssClassName}`}></div>,
      <div key={`home-${pageKey++}`} className={`bg-secondary/50 rounded-lg h-[500px] w-full m-16 ${section.cssClassName}`}></div>,
      <div key={`home-${pageKey++}`} className={`bg-secondary/50 rounded-lg h-[500px] w-full m-16 ${section.cssClassName}`}></div>,
      <div key={`home-${pageKey++}`} className={`bg-secondary/50 rounded-lg h-[500px] w-full m-16 ${section.cssClassName}`}></div>,
      <div key={`home-${pageKey++}`} className={`bg-secondary/50 rounded-lg h-[500px] w-full m-16`}></div>
    ]
    mainContentHtml = mainContentHtml.concat(sectionHTML)
  })
  return (
    <main className="flex flex-row justify-center bg-primary text-tertiary w-screen h-fit">
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
        {
          navigationHtml(currentSection, setCurrentSection)
        }
      </div>
      <div className="flex flex-col h-fit w-[40vw] m-8">
        {
          mainContentHtml
        }
      </div>
    </main>
  )
}

function handleIntersectionEntry(entry: IntersectionObserverEntry, setCurrentSection: CallableFunction) {
  if(entry.isIntersecting) {
    let usableClassNames: string[] = []
    PAGE_SECTIONS.forEach((section) => {
      usableClassNames.push(section.cssClassName)
    }) 
    Array.from(entry.target.classList).forEach((className) => {
      if(usableClassNames.includes(className)) {
        console.log(className)
        setCurrentSection(className)
      }
    })
  }
}

function navigationHtml(currentSection: string, setCurrentSection: CallableFunction): React.JSX.Element {
  let navLinksHtml: React.JSX.Element[] = []

  let divHoverCss = 'text-tertiary/50 transition-all group-hover:scale-x-150 group-hover:text-tertiary group-hover:pl-4 group-hover:pr-8'
  let divSelectedCss = 'text-tertiary pl-4 pr-8'

  let pHoverCss = 'text-tertiary/50 group-hover:text-tertiary'
  let pSelectedCss = 'text-tertiary'
  PAGE_SECTIONS.forEach((section) => {
    let selected = section.cssClassName == currentSection
    navLinksHtml.push(
    <div className="flex flex-row items-center group hover:cursor-pointer" onClick={()=> {
      animateScrollTo(document.getElementById(`${section.cssClassName}-header`) as Element, {
        easing: scrollEasingsFunction
      })
    }}>
      <div className={`flex flex-row items-center pr-8 h-5 ${selected ? divSelectedCss : divHoverCss}`} >
        <hr className='h-1 w-16' />
      </div>
      <p className={selected ? pSelectedCss : pHoverCss}>{section.display}</p>
    </div>
    )
  })
  return (
    <div>
      {
        navLinksHtml
      }
    </div>
  )
}