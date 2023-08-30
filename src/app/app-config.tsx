import { Experience, PageSection, Project } from "./models"
import { ArrowUpperRight, hoverLinkCss, hoverShadowCss } from "./shared"
import { easeInOutQuart } from "./shared"
let pageKey = 0 // Do not touch


export const DEVELOPER_NAME = 'Michael Schroeder'
export const EMPLOYMENT_TAG_LINE =  'Full Stack Software Engineer at Direct Supply'
export const GITHUB_URL = 'https://github.com/Mschroeder95'
export const LINKED_IN_URL = 'www.linkedin.com/in/michael-schroeder-b5493b199'
// To remove linking to employer, set to undefined
export const EMPLOYER_WEBSITE_URL = 'https://www.directsupply.com/?utm_source=google&utm_medium=organic&utm_campaign=GMB' 
export const BLURB_1 = 'I build full stack applications with exceptional user experience and solid infrastructure'
export const BIO: string[] = [
    'I began my developer journey in 2014 when I decided to start playing with c++. I found my passion in software development and learned so much on my own. I have come so far since those early days as I have a Bachelor\'s Degree in Computer Science from UW-Milwaukee, Machine Learning certificate from MSOE, and professional experience from Uline and Direct Supply.',
    'My focus these days is maintaining and developing new features for DS Smart, a mobile application for assisted living facilities.',
    'When I am not coding I am traveling with my wife, keeping up with friends online and dabbling in art/music.'
]
export const EXPERIENCE: Experience[] = [
    new Experience(
        'Software Engineer - Direct Supply',
        'https://www.directsupply.com',
        'January 2022',
        'Present',
        'Support and develop new features for a multi-platform medical device application. We help our customers increase the efficiency of their workflows.',
        [
            'Python',
            'AWS',
            'Swift',
            'Kotlin',
            'Android',
            'IOS',
            'Terraform'
        ]
    ),
    new Experience(
        'Software Developer - Uline',
        'https://www.uline.com',
        'July 2020',
        'January 2022',
        'Worked with various lines of business to develop Angular web applications and Java/Spring microservices. Our apps helped keep the business running efficiently.',
        [
            'Java',
            'Spring Boot',
            'Angular',
            'javascript',
            'TypeScript',
            'PrimeFlex',
            'SQL',
            'jenkins',
            'Azure'
        ]
    )
]


export const PROJECTS: Project[] = [
    new Project(
        'Fec\'s Place', 
        'https://main.dg4tszwgq01x6.amplifyapp.com', 
        './images/project-1-peek.png',
        [
            'AWS',
            'Next.js',
            'Amplify',
            'Typescript',
            'React',
            'Tailwind CSS'
        ], 
        'A responsive website for a local bar & grill. Designed to be incredibly flexible and reusable for other small businesses.'),
    new Project(
        'Concept Game',
        'https://youtu.be/uY1SxqblFFA',
        './images/project-2-peek.png',
        [
            'Godot 4',
            'Blender',
            'Gimp',
            'python'
        ],
        'This game is a product of a lot of practice over the years. I started in Unity, switched to Unreal Engine, and then finally found my favorite game engine Godot. It is an open source game engine that has seemless integration with Blender (a 3D modeling tool). I made all the assets, models and wrote all the code myself!'
    ),
    new Project(
        'Bodi\'s Bake Shop', 
        'https://main.diujez1kchjfo.amplifyapp.com', 
        './images/project-3-peek.png',
        [
            'AWS',
            'Next.js',
            'Amplify',
            'Typescript',
            'React',
            'Tailwind CSS'
        ], 
        'A responsive website for a local bakery. My Next.js code is so flexible and reusable that!'),
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
                <div className={`py-[35vh]`}>
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
                toolsHtml.push(createToolChip(tool))
            })
            sectionHtml.push(
                <div key={`'config-'${pageKey++}`} className={`transition-all flex flex-row h-fit rounded-lg mb-8 p-5`}>
                    <div className={`flex flex-col justify-center w-[20%] text-center mr-4  ${cssClassName}`}>
                        <p key={`'config-'${pageKey++}`} className="pd-8 text-tertiary/60 w-full">{exp.end}</p>
                        <hr className="h-1 w-full" />
                        <p key={`'config-'${pageKey++}`} className="pd-8 text-tertiary/60 w-full">{exp.start}</p>
                    </div>
                    <div key={`'config-'${pageKey++}`} className="flex flex-col w-[80%]">
                        <a key={`'config-'${pageKey++}`} className="pd-4 font-bold text-xl flex flex-row items-center group" href={exp.url}>
                            <p key={`'config-'${pageKey++}`} className={`${hoverLinkCss} pr-2`}>{exp.jobTitle}</p>
                            <ArrowUpperRight />
                        </a>
                        <p key={`'config-'${pageKey++}`} className="pd-4 text-tertiary/60 indent-5">{exp.description}</p>
                        <div key={`'config-'${pageKey++}`} className="flex flex-row flex-wrap pt-3">
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
                <div className={`py-[35vh]`}>
                    {
                        sectionHtml
                    }
                </div>
            </div>
        )
    }),
    new PageSection('projects-checkpoint', 'PROJECTS', (cssClassName) => {
        let sectionHtml: React.JSX.Element[] = []
        PROJECTS.forEach((project) => {
            let toolChips: React.JSX.Element[] = []
            project.tools.forEach((tool) => {
                toolChips.push(createToolChip(tool))
            })
            sectionHtml.push(
                
                <div className="flex flex-row items-center h-fit w-full rounded-xl pb-12">
                    <img className={`w-[7rem] mr-4 rounded-lg transition-all hover:cursor-pointer ${hoverShadowCss}`} src={project.imageSrc} alt="" onClick={ () => {
                        window.location.href = project.url
                    }} />
                    <div className="flex flex-col">
                        <a href={project.url} className="flex flex-row items-center group font-bold text-xl">
                            <p className={`transition-all pl-1 w-fit ${hoverLinkCss} pr-2`}>{project.title}</p>
                            <ArrowUpperRight />
                        </a>
                        <p className={`text-tertiary/60 indent-5`}>{project.description}</p>
                        <div className={`flex flex-row flex-wrap mt-5 ${cssClassName}`}>
                            {
                                toolChips
                            }
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div>
                <div id={`${cssClassName}-header`} key={`config-${pageKey++}`} className={`h-1 w-full`}></div>
                <div className={`py-[35vh]`}>
                    {
                        sectionHtml
                    }
                </div>
            </div>
        ) 
    })
]

function createToolChip(tool: string): React.JSX.Element {
    return (
        <div className={`bg-secondary/30 rounded-3xl m-1 px-2 w-fit h-fit text-secondary hover:cursor-pointer ${hoverShadowCss}`}>
            <p className="">{tool}</p>
        </div>
    )
}


// Other Settings
export let scrollEasingsFunction = (t: number) => {
    return easeInOutQuart(t)
}

