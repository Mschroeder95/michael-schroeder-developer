import { PageSection } from "./models"
import { easeInOutQuart } from "./shared"

// ### Developer Info ###
export const DEVELOPER_NAME = 'Michael Schroeder'

export const EMPLOYMENT_TAG_LINE =  'Full Stack Software Engineer at Direct Supply'
// To remove linking to employer, set to undefined
export const EMPLOYER_WEBSITE_URL = 'https://www.directsupply.com/?utm_source=google&utm_medium=organic&utm_campaign=GMB' 
export const BLURB_1 = 'I build full stack applications with exceptional user experience and solid infrastructure'
// #######################



// ## Page sections for scrolling behavior
export const PAGE_SECTIONS: PageSection[] = [
    new PageSection('about-checkpoint', 'ABOUT'),
    new PageSection('experience-checkpoint', 'EXPERIENCE'),
    new PageSection('projects-checkpoint', 'PROJECTS')
]


// Other Settings
export let scrollEasingsFunction = (t: number) => {
    return easeInOutQuart(t)
}

