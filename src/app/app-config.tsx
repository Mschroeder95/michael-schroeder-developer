import { Experience, PageSection } from "./models"
import { easeInOutQuart } from "./shared"
let pageKey = 0 // Do not touch


export const DEVELOPER_NAME = 'Michael Schroeder'
export const EMPLOYMENT_TAG_LINE =  'Full Stack Software Engineer at Direct Supply'
// To remove linking to employer, set to undefined
export const EMPLOYER_WEBSITE_URL = 'https://www.directsupply.com/?utm_source=google&utm_medium=organic&utm_campaign=GMB' 
export const BLURB_1 = 'I build full stack applications with exceptional user experience and solid infrastructure'
export const BIO: string[] = [
    'I began my developer journey in 2014 when I decided to start playing with c++. I found my passion in software development and learned so much on my own. I have come so far since those early days as I have a Bachelors Degree in Computer Sceince from UW-Milwaukee, Machine Learning certificate from MSOE, and professional expereince from Uline and Direct Supply.',
    'My focus these days is maintaining and developing new features for DS Smart, a mobile application for assisted living facities.',
    'When I am not coding I am traveling with my wife, keeping up with friends online and dabbling in art/music.'
]
export const EXPERIENCE: Experience[] = [
    new Experience(
        'Software Developer',
        'https://www.uline.com',
        'July 2020',
        'January 2022',
        'Worked with various lines of business to developed Angular web applications and Java/Spring microservices. Our apps helped keep the business running efficiently.',
        [
            'Java',
            'Spring Boot',
            'Angular',
            'javascript',
            'SQL',
            'jenkins',
            'Azure'
        ]
    ),
    new Experience(
        'Software Developer',
        'https://www.uline.com',
        'July 2020',
        'January 2022',
        'Worked with various lines of business to developed Angular web applications and Java/Spring microservices. Our apps helped keep the business running efficiently.',
        [
            'Java',
            'Spring Boot',
            'Angular',
            'javascript',
            'SQL',
            'jenkins',
            'Azure'
        ]
    )

]


// ## Page sections for scrolling behavior
export const PAGE_SECTIONS: PageSection[] = [
    new PageSection('about-checkpoint', 'ABOUT', (cssClassName) => {
        let sectionHtml: React.JSX.Element[] = []
        BIO.forEach((paragraph) => {
            sectionHtml.push(
                <p key={`'config-'${pageKey++}`} className={` text-tertiary/60 pb-[1rem]`}>{paragraph}</p>
            )
        })
        return (
            <div>
                <div id={`${cssClassName}-header`} key={`config-${pageKey++}`} className={` ${cssClassName} h-1 w-full`}></div>
                <div className="py-[25vh]">
                    {
                        sectionHtml
                    }
                </div>
            </div>
        )
    }),
    new PageSection('experience-checkpoint', 'EXPERIENCE', (cssClassName) => {
        let sectionHtml: React.JSX.Element[] = []
        EXPERIENCE.forEach((exp) => {
            let toolsHtml: React.JSX.Element[] = []
            exp.tools.forEach((tool) => {
                toolsHtml.push(
                    <div className="bg-secondary/30 rounded-3xl m-1 px-1 w-fit h-fit">
                        <p className="">{tool}</p>
                    </div>
                )
            })
            sectionHtml.push(
                <div key={`'config-'${pageKey++}`} className={`flex flex-row h-fit hover:bg-primary/50 pb-8 ${cssClassName}`}>
                    <p key={`'config-'${pageKey++}`} className="pb-8">{exp.jobTitle} - {exp.end}</p>
                    <div key={`'config-'${pageKey++}`} className="flex flex-col">
                        <a key={`'config-'${pageKey++}`} className="pd-4" href={exp.url}><p key={`'config-'${pageKey++}`}>{exp.jobTitle}</p></a>
                        <p key={`'config-'${pageKey++}`} className="pd-4">{exp.description}</p>
                        <div key={`'config-'${pageKey++}`} className="flex flex-row flex-wrap">
                            {
                                toolsHtml
                            }
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div>
                <div id={`${cssClassName}-header`} key={`config-${pageKey++}`} className={`h-1 w-full`}></div>
                <div className="py-[25vh]">
                    {
                        sectionHtml
                    }
                </div>
            </div>
        )
    }),
    new PageSection('projects-checkpoint', 'PROJECTS', (cssClassName) => {
        let sectionHtml = [
            <div key={`config-${pageKey++}`} className={`bg-secondary/50 rounded-lg h-[500px] mb-8 ${cssClassName}`}></div>,
            <div key={`config-${pageKey++}`} className={`bg-secondary/50 rounded-lg h-[500px] mb-8 ${cssClassName}`}></div>,
            <div key={`config-${pageKey++}`} className={`bg-secondary/50 rounded-lg h-[500px] mb-8 ${cssClassName}`}></div>,
            <div key={`config-${pageKey++}`} className={`bg-secondary/50 rounded-lg h-[500px] mb-8 ${cssClassName}`}></div>,
            <div key={`config-${pageKey++}`} className={`bg-secondary/50 rounded-lg h-[500px] mb-8 ${cssClassName}`}></div>,
            <div key={`config-${pageKey++}`} className={`bg-secondary/50 rounded-lg h-[500px] mb-8 ${cssClassName}`}></div>,
            <div key={`config-${pageKey++}`} className={`bg-secondary/50 rounded-lg h-[500px] mb-8`}></div>
          ]
        return (
            <div>
                <div id={`${cssClassName}-header`} key={`config-${pageKey++}`} className={`h-1 w-full`}></div>
                <div className="py-[25vh]">
                    {
                        sectionHtml
                    }
                </div>
            </div>
        ) 
    })
]


// Other Settings
export let scrollEasingsFunction = (t: number) => {
    return easeInOutQuart(t)
}

