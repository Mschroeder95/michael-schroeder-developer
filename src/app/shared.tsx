
export function isMobileCheck(): boolean {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 900
}

// scrolling function
export  let easeInOutQuart = (t: number) => { return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t }

export const hoverLinkCss = 'transition-all rounded-xl hover:pl-2 hover:cursor-pointer hover:text-secondary/50 hover:bg-gradient-to-r hover:from-secondary/20'
export const hoverShadowCss = 'transition-all hover:shadow hover:shadow-secondary/50 hover:-translate-y-1'


export function ArrowUpperRight() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-4 h-4 text-secondary invisible group-hover:visible`}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
  )
}