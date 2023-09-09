import { Experience, PageSection, Project, Tool } from "./models"
import { ArrowUpperRight, createToolChip, hoverLinkCss, hoverShadowCss } from "./shared"
import { easeInOutQuart } from "./shared"
let pageKey = 0 // This increments for each element in lists to satisfy the React rules for unique Key



// ####################
// # Update Your Info #
// ####################
export const DEVELOPER_NAME = 'Connor Nagela'
export const EMPLOYMENT_TAG_LINE =  'Software Engineer Intern at Direct Supply'
export const GITHUB_URL = 'https://github.com/itscanner'
export const LINKED_IN_URL = 'https://www.linkedin.com/in/connor-nagela'
export const EMPLOYER_WEBSITE_URL = 'https://www.directsupply.com/' 
export const BLURB_1 = 'Junior B.S. Computer Engineering, NCAA D3 Student-Athlete'
export const BIO: string[] = [
    'I began my journey into computers in high school, where I had an aptitude for problem solving. During COVID, I decided to delve further into hardware which led me to pursue a degree in Computer Engineering',
    'Currently I am working at Direct Supply as a Software Engineer Intern. I am working on DS Smart, a team that is developing a multi-platform medical device application. We help our customers increase the efficiency of their workflows.',
    'When I am not coding I am either working out, playing video games, or thinking about the next excuse to spend tons of money on peripherals.'
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
export const VIA_TOOL: Tool = new Tool('via', 'https://caniusevia.com')
export const ELECTRONIC_DESIGN_TOOL = new Tool('electronic design', 'https://stackoverflow.com/')
export const C_TOOL = new Tool('c', 'https://www.cprogramming.com/')
export const SOLDERING_TOOL = new Tool('soldering', 'https://www.amazon.com/')
export const EMBEDDED_C_TOOL = new Tool('embedded c', 'https://www.cprogramming.com/')
export const VHDL_TOOL = new Tool('vhdl', 'https://www.intel.com/content/www/us/en/collections/products/fpga/software/downloads.html')
export const QUARTUS_TOOL = new Tool('intel quartus', 'https://www.intel.com/content/www/us/en/collections/products/fpga/software/downloads.html')
export const DIGITAL_DESIGN_TOOL = new Tool('digital design', 'https://www.intel.com/content/www/us/en/collections/products/fpga/software/downloads.html')
export const MULTISIM_TOOL = new Tool('ni multisim', 'https://www.ni.com/en-us/support/downloads/software-products/download.multisim.html#369660')
export const OBJECT_ORIENTED_TOOL = new Tool('object oriented', 'https://www.java.com/en/')


// ########################################################
// # Create Experience Objects for the Experience section #
// ########################################################
export const EXPERIENCE: Experience[] = [
    new Experience(
        'Software Engineer - Direct Supply',
        'https://www.directsupply.com',
        'March 2023',
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
    )
]


// ###################################################
// # Create Project Objects for the Projects section #
// ###################################################
export const PROJECTS: Project[] = [
    new Project(
        'Personal Peripherals',
        '',
        './images/project-2-peek.jpg',
        [
            VIA_TOOL,
            ELECTRONIC_DESIGN_TOOL,
            C_TOOL,
            SOLDERING_TOOL
        ],
        'This is my hobby! I love to build and modify peripherals. I\'ve built multiple keyboards and mice. Modified them to my liking, and even created custom mouse shells. I\'m currently in the process of building a handwired keyboard with the goal of creating my own firmware.'
    ),
    new Project(
        'Number Guessing Game',
        '',
        './images/project-2-peek.png',
        [
            EMBEDDED_C_TOOL,
            VHDL_TOOL,
            QUARTUS_TOOL,
            DIGITAL_DESIGN_TOOL,
            MULTISIM_TOOL
        ],
        'This was a class project, but I had a lot of fun with it. I created a number guessing game on an STMF446 microcontroller. The game was played on a 7-segment display and the user input was taken from a keypad. The game was written in embedded C and the hardware was designed in VHDL.'
    ),
    new Project(
        'momBot', 
        'https://github.com/itscanner/momBot', 
        './images/project-1-peek.jpg',
        [
            JAVA_TOOL,
            OBJECT_ORIENTED_TOOL,
            AWS_TOOL
        ], 
        'A Discord bot that I made for my friends and I to use. It has a bunch of fun commands and was hosted on AWS'
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
