
export function isMobileCheck(): boolean {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 900
}

// scrolling function
export  let easeInOutQuart = (t: number) => { return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t }