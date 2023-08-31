import { Experience, PageSection, Project, Tool } from "./models"
import { ArrowUpperRight, createToolChip, hoverLinkCss, hoverShadowCss } from "./shared"
import { easeInOutQuart } from "./shared"
let pageKey = 0 // This increments for each element in lists to satisfy the React rules for unique Key



// ####################
// # Update Your Info #
// ####################
export const DEVELOPER_NAME = 'Michael Schroeder'
export const EMPLOYMENT_TAG_LINE =  'Full Stack Software Engineer at Direct Supply'
export const GITHUB_URL = 'https://github.com/Mschroeder95'
export const LINKED_IN_URL = 'https://www.linkedin.com/in/michael-schroeder-b5493b199'
export const EMPLOYER_WEBSITE_URL = 'https://www.directsupply.com/?utm_source=google&utm_medium=organic&utm_campaign=GMB' 
export const BLURB_1 = 'I build full stack applications with exceptional user experience and solid infrastructure'
export const BIO: string[] = [
    'I began my developer journey in 2014 when I decided to start playing with c++. I found my passion in software development and learned so much on my own. I have come so far since those early days as I have a Bachelor\'s Degree in Computer Science from UW-Milwaukee, Machine Learning certificate from MSOE, and professional experience from Uline and Direct Supply.',
    'My focus these days is maintaining and developing new features for DS Smart, a mobile application for assisted living facilities.',
    'When I am not coding I am traveling with my wife, keeping up with friends online and dabbling in art/music.'
]

// #############################################################################
// # Add Tool Objects if there are any missing from technologies that you know #
// #############################################################################
export const PYTHON_TOOL: Tool = new Tool('python', 'https://www.python.org')
export const AWS_TOOL: Tool = new Tool('aws', 'https://aws.amazon.com')
export const SWIFT_TOOL: Tool = new Tool('swift', 'https://developer.apple.com/swift/')
export const KOTLIN_TOOL: Tool = new Tool('kotlin', 'https://kotlinlang.org')
export const ANDROID_TOOL: Tool = new Tool('android', 'https://developer.android.com')
export const XCODE_TOOL: Tool = new Tool('xcode', 'https://developer.apple.com/xcode/')
export const TERRAFORM_TOOL: Tool = new Tool('terraform', 'https://www.terraform.io')
export const JAVA_TOOL: Tool = new Tool('java', 'https://www.java.com/en/')
export const SPRING_BOOT_TOOL: Tool = new Tool('spring boot', 'https://spring.io/projects/spring-boot')
export const ANGURLAR_TOOL: Tool = new Tool('angular', 'https://angular.io')
export const JAVASCRIPT_TOOL: Tool = new Tool('javascript', 'https://angular.io')
export const TYPESCRIPT_TOOL: Tool = new Tool('typescript', 'https://www.typescriptlang.org')
export const PRIMEFLEX_TOOL: Tool = new Tool('primeflex', 'https://www.primefaces.org/primeflex/')
export const SQL_TOOL: Tool = new Tool('sql', 'https://docs.oracle.com/en/database/oracle/oracle-database/19/sqlrf/#Oracle®-Database')
export const NO_SQL_TOOL: Tool = new Tool('nosql', 'https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjk09OT2YWBAxU_bG8EHUtqA10YABACGgJqZg&ae=2&gclid=Cj0KCQjw0bunBhD9ARIsAAZl0E1ZzThFn1YIvUsIg-MFFrCR6lLNlmFT6wq92UA3yKssbjGx0QuyZwkaAhBtEALw_wcB&ohost=www.google.com&cid=CAESauD2vnn6Qtade-oOADBNGI1LjDpCSsMt22IubJK-vYv6ueGjH_i058hC51u_SvkeQKXsjrjSaW-ih1AwHQ6F6dwhuaz0s33mw9ItAzs8tvh5zgEDYg2s3SbtlGawHE_UXYGzCEITGFf3pd8&sig=AOD64_3Kk5CG7UBtg5NE-btjQiLKASDU4A&q&adurl&ved=2ahUKEwi8sMiT2YWBAxWDjYkEHQ8lB9oQ0Qx6BAgDEAE&nis=8&dct=1')
export const JENKINS_TOOL: Tool = new Tool('jenkins', 'https://www.jenkins.io')
export const AZURE_TOOL: Tool = new Tool('Azure', 'https://azure.microsoft.com/en-us/')
export const TAILWIND_CSS_TOOL: Tool = new Tool('tailwind css', 'https://tailwindcss.com')
export const REACT_TOOL: Tool = new Tool('react', 'https://react.dev')
export const NEXTJS_TOOL: Tool = new Tool('next.js', 'https://nextjs.org')
export const GODOT_4_TOOL: Tool = new Tool('godot 4', 'https://godotengine.org')
export const BLENDER: Tool = new Tool('blender', 'https://www.blender.org')
export const GIMP_TOOL: Tool = new Tool('gimp', 'https://www.gimp.org')
export const GITLAB_CI_CD_TOOL: Tool = new Tool('gitlab ci/cd', 'https://docs.gitlab.com/ee/ci/')
export const AMPLIFY_TOOL: Tool = new Tool('amplify', 'https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwi4t43l4oWBAxX4bG8EHetCAmIYABAAGgJqZg&ae=2&gclid=Cj0KCQjw0bunBhD9ARIsAAZl0E0UNFH2WIAKpWsqqQ3xm3k4UAHqakOCVdLCCdAdQHXeEnut7LzXcysaArBrEALw_wcB&ohost=www.google.com&cid=CAESauD2_S8NvzxNUWwtnswtdky6rJSiPHyRPLT12QwCJJzsEv-BHGOnQr1NZ3hdhxQ8SkwexM-9Wo0Gq467Y_U_aybA2vAZTQt1nvgUA4vg4UgbbkxgkgEcL5O8jc2Y6YayOzH_OLtCXIcbji4&sig=AOD64_1BhHe_C36Qs29uw7YnhBJQBIl7pQ&q&adurl&ved=2ahUKEwia3IXl4oWBAxX5tIkEHUeUDEYQ0Qx6BAgIEAE&nis=8&dct=1')



// ########################################################
// # Create Experience Objects for the Experience section #
// ########################################################
export const EXPERIENCE: Experience[] = [
    new Experience(
        'Software Engineer - Direct Supply',
        'https://www.directsupply.com',
        'January 2022',
        'Present',
        'Support and develop new features for a multi-platform medical device application. We help our customers increase the efficiency of their workflows.',
        [
            PYTHON_TOOL,
            AWS_TOOL,
            SWIFT_TOOL,
            KOTLIN_TOOL,
            ANDROID_TOOL,
            XCODE_TOOL,
            TERRAFORM_TOOL,
            NO_SQL_TOOL,
            GITLAB_CI_CD_TOOL
        ]
    ),
    new Experience(
        'Software Developer - Uline',
        'https://www.uline.com',
        'July 2020',
        'January 2022',
        'Worked with various lines of business to develop Angular web applications and Java/Spring microservices. Our apps helped keep the business running efficiently.',
        [
            JAVA_TOOL,
            SPRING_BOOT_TOOL,
            ANGURLAR_TOOL,
            JAVASCRIPT_TOOL,
            TYPESCRIPT_TOOL,
            PRIMEFLEX_TOOL,
            SQL_TOOL,
            JENKINS_TOOL,
            AZURE_TOOL
        ]
    )
]


// ###################################################
// # Create Project Objects for the Projects section #
// ###################################################
export const PROJECTS: Project[] = [
    new Project(
        'Fec\'s Place', 
        'https://main.dg4tszwgq01x6.amplifyapp.com', 
        './images/project-1-peek.png',
        [
            AWS_TOOL,
            NEXTJS_TOOL,
            AMPLIFY_TOOL,
            TYPESCRIPT_TOOL,
            REACT_TOOL,
            TAILWIND_CSS_TOOL
        ], 
        'A responsive website for a local bar & grill. Designed to be incredibly flexible and reusable for other small businesses.'
    ),
    new Project(
        'Concept Game',
        'https://youtu.be/uY1SxqblFFA',
        './images/project-2-peek.png',
        [
            GODOT_4_TOOL,
            BLENDER,
            GIMP_TOOL,
            PYTHON_TOOL
        ],
        'This game is a product of a lot of practice over the years. I started in Unity, switched to Unreal Engine, and then finally found my favorite game engine Godot. It is an open source game engine that has seemless integration with Blender (a 3D modeling tool). I made all the assets, models and wrote all the code myself!'
    ),
    new Project(
        'Bodi\'s Bake Shop', 
        'https://main.diujez1kchjfo.amplifyapp.com', 
        './images/project-3-peek.png',
        [
            AWS_TOOL,
            NEXTJS_TOOL,
            AMPLIFY_TOOL,
            TYPESCRIPT_TOOL,
            REACT_TOOL,
            TAILWIND_CSS_TOOL
        ], 
        'A responsive website for a local bakery. My Next.js code is so flexible and reusable that!'
    ),
    new Project(
        'THIS WEBSITE!',
        'https://github.com/Mschroeder95/michael-schroeder-developer',
        './images/project-4-peek.png',
        [
            AWS_TOOL,
            NEXTJS_TOOL,
            AMPLIFY_TOOL,
            TYPESCRIPT_TOOL,
            REACT_TOOL,
            TAILWIND_CSS_TOOL
        ],
        'If you want a personal website feel free to fork mine and update the app-config.tsx to match your info! SO EASY!'
    )
]


// Only if you want additional page sections
// ###################################################################################
// # Make PageSection Objects for more sections like About, Experience, and Projects #
// ###################################################################################
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
                    <img className={`w-[7rem] mr-4 rounded-lg border-solid border-2 border-secondary/20 hover:cursor-pointer ${hoverShadowCss}`} src={project.imageSrc} alt="" onClick={ () => {
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

// This function effects how the auto scroll feels when selecting a section
export let scrollEasingsFunction = (t: number) => {
    return easeInOutQuart(t)
}







