
export function isMobileCheck(): boolean {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 900
}